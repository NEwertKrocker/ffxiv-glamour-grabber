import { React, Component } from 'react';
import { getCharOutfit } from '../ApiCalls.js';
import { useParams } from 'react-router-dom';
import '../css/Outfit.css';

class Outfit extends Component {
  constructor(props){
    super(props);
    this.state = {
      charID: props.id,
      charData: {},
      charGear: {}
    }
  }

  componentDidMount(){
    getCharOutfit(this.state.charID)
    .then(data => this.setState({ charData: data.Character, charGear: data.Character.GearSet.Gear }))
  }

  render(){
    return (
        <div>
          <img src={`${this.state.charData.Portrait}`} alt={`Portrait of ${this.state.charData.Name}`}/>
          <p> Outfit page goes here. </p>
          <p> This is {`${this.state.charData.Name}'s outfit.`} </p>
        </div>
    )
  }
}


export default Outfit;
