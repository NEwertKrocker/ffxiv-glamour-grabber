import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from './Form';
import SelectedChar from './SelectedChar';
import SavedItems from './SavedItems'
import ErrorPage from './404';
import '../Assets/background.jpeg';
import crystal from '../Assets/Aetheryte.png';
import '../css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      charID: 0,
      savedItems: [],
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
    if(!this.state.savedItems.some((item) => {return item.id === newItem.id})){
      this.setState({ savedItems: [...this.state.savedItems, newItem] })
      setTimeout(() => {this.storeItems()}, 500)
    }
  }

  deleteItem = (id) => {
    const filteredItems = this.state.savedItems.filter(item => item.id != id);
    this.setState({ savedItems: filteredItems });
    setTimeout(() => {this.storeItems()}, 500)
  }

  storeItems = () => {
    let stringifiedItems = JSON.stringify(this.state.savedItems);
    localStorage.setItem('savedItems', stringifiedItems);
  }

  retrieveItems = () => {
    let savedItems = localStorage.getItem('savedItems');
    let parsedItems = JSON.parse(savedItems);
    if(parsedItems){
      this.setState({ savedItems: parsedItems })
    }
  }

  componentDidMount(){
    this.retrieveItems();
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <Link className='app-title' to={`/`}>
          <img className='crystal' src={crystal} />
          <p>FFXIV Glamour Grabber</p>
          <img className='crystal' src={crystal} />
        </Link>
        </header>
        <Routes>
          <Route path='/' element={<Form setChar={this.setChar}/>} />
          <Route path='/character/:character' element={<SelectedChar saveItem={this.saveItem}/>} />
          <Route path='/saved' element={<SavedItems savedItems={this.state.savedItems} deleteItem={this.deleteItem}/>} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;

App.propTypes = {
  charID: PropTypes.number,
  savedItems: PropTypes.array,
}
