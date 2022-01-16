import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './Form';
import SelectedChar from './SelectedChar';
import SavedItems from './SavedItems'
import '../Assets/background.jpeg';
import '../css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      charID: 0,
      savedItems: []
    }
  }

  setChar = (id) => {
    this.setState({ charID: id })
  }

  saveItem = (id, dye, icon, name, type) => {
    let newItem = {
      id: id,
      dye: dye,
      icon: icon,
      name: name,
      type: type
    }
    this.setState({ savedItems: [...this.state.savedItems, newItem] })
    this.storeItems();
  }

  deleteItem = (id) => {
    console.log(id)
    const filteredItems = this.state.savedItems.filter(item => item.id != id);
    this.setState({ savedItems: filteredItems });
    console.log(this.state.savedItems)
    setTimeout(() => {this.storeItems()}, 500)
  }

  storeItems = () => {
    let stringifiedItems = JSON.stringify(this.state.savedItems);
    localStorage.setItem('savedItems', stringifiedItems);
  }

  retrieveItems = () => {
    let savedItems = localStorage.getItem('savedItems');
    let parsedItems = JSON.parse(savedItems);
    console.log("retrieved items to be set in state", parsedItems)
    this.setState({ savedItems: parsedItems })
  }

  componentDidMount(){
    this.retrieveItems();
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>FFXIV Glamour Grabber</p>
        </header>
        <Routes>
          <Route path='/' element={<Form setChar={this.setChar}/>} />
          <Route path='/:character' element={<SelectedChar saveItem={this.saveItem}/>} />
          <Route path='/saved' element={<SavedItems savedItems={this.state.savedItems} deleteItem={this.deleteItem}/>} />
        </Routes>

      </div>
    );
  }
}

export default App;
