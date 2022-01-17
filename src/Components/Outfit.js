import { React, Component } from 'react';
import PropTypes from 'prop-types';
import { getCharOutfit, fetchItem } from '../ApiCalls.js';
import { useParams } from 'react-router-dom';
import Equipment from './Equipment';
import EquipContainer from './EquipContainer'
import '../css/Outfit.css';

class Outfit extends Component {
  constructor(props){
    super(props);
    this.state = {
      charID: props.id,
      saveItem: props.saveItem,
      charData: {},
      charGear: {},
      parsedGear: [],
      loading: true,
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
    this.fetchItemNames(parsedGearData)
    setTimeout(() => {this.setState({ parsedGear: parsedGearData, loading: false })}, 1000)
  }

  fetchItemNames(gearset){
    gearset.map((item) => {
      fetchItem(item.id)
        .then(data => {
          item['name'] = data.Name;
          item['icon'] = data.IconHD
        })
      if(item.dye){
      fetchItem(item.dye)
        .then(data => item['dyeName'] = data.Name)
      }
    })
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

    return (
        <div className='outfit'>
          {this.state.loading && <p className='loading-msg'>Loading...</p>}
          {!this.state.loading && <img src={`${this.state.charData.Portrait}`} alt={`Portrait of ${this.state.charData.Name}`}/>}
          {!this.state.loading && <p> This is {`${this.state.charData.Name}'s outfit.`} </p>}
          <EquipContainer gear={this.state.parsedGear} saveItem={this.state.saveItem}/>
        </div>
    )
  }
}


export default Outfit;

Outfit.propTypes = {
  id: PropTypes.number,
  saveItem: PropTypes.func,
}
