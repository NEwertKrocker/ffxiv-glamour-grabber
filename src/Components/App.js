import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './Form';
import Outfit from './Outfit';
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
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/:character' element={<Outfit />} />
        </Routes>

      </div>
    );
  }
}

export default App;
