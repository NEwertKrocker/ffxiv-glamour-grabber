import React, { Component } from 'react';
import Form from './Form'
import '../Assets/background.jpeg';
import '../css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <p>FFXIV Glamour Grabber</p>
        </header>
        <Form />
      </div>
    );
  }
}

export default App;
