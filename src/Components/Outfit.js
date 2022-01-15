import { React, Component } from 'react';
import { getCharOutfit, fetchItem } from '../ApiCalls.js';
import { useParams } from 'react-router-dom';
import Equipment from './Equipment';
import '../css/Outfit.css';

class Outfit extends Component {
  constructor(props){
    super(props);
    this.state = {
      charID: props.id,
      charData: {},
      charGear: {},
      parsedGear: []
    }
  }

  parseGear(){
    let gearTypes = Object.keys(this.state.charGear);
    let gearData = Object.values(this.state.charGear);
    let parsedGearData = gearData.map((item) => {
      if(item['Mirage']){
        return { id: item['Mirage'], dye: item['Dye'] }
      } else {
        return { id: item['ID'], dye: item['Dye'] }
      }
    })
    for (let i = 0; i < parsedGearData.length; i++){
      parsedGearData[i]['type'] = gearTypes[i]
    }
    parsedGearData.splice(10, 3);
    parsedGearData.forEach((item) => {
      fetchItem(item.id)
        .then(data => item['name'] = data.Name)
      if(item.dye){
      fetchItem(item.dye)
        .then(data => item['dyeName'] = data.Name)
      }
    })
    this.setState({ parsedGear: parsedGearData })
    console.log("parsed in state>>>>", this.state.parsedGear)
  }

  componentDidMount(){
    getCharOutfit(this.state.charID)
      .then(data => {
        this.setState({ charData: data.Character, charGear: data.Character.GearSet.Gear })
      })
      .then(() => this.parseGear())
      .catch(err => { console.log(err.message)})
  }

  render(){
    let equipment = this.state.parsedGear.map((item) => {
      return <Equipment key={item.id} id={item.id} dye={item.dyeName} type={item.type} name={item.name} />
    })

    return (
        <div className='outfit'>
          <img src={`${this.state.charData.Portrait}`} alt={`Portrait of ${this.state.charData.Name}`}/>
          <p> This is {`${this.state.charData.Name}'s outfit.`} </p>
          <div className='equipment-container'>
            {equipment}
          </div>
        </div>
    )
  }
}


export default Outfit;
