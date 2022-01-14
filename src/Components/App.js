import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './Form';
import SelectedChar from './SelectedChar';
import '../Assets/background.jpeg';
import '../css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      charID: 0
    }
  }

  setChar = (id) => {
    this.setState({ charID: id })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>FFXIV Glamour Grabber</p>
        </header>
        <Routes>
          <Route path='/' element={<Form setChar={this.setChar}/>} />
          <Route path='/:character' element={<SelectedChar />} />
        </Routes>

      </div>
    );
  }
}

export default App;
