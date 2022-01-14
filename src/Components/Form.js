import React, { Component } from 'react';
import { fetchChars } from '../ApiCalls';
import Results from './SearchResults';
import '../css/Form.css';

class Form extends Component {
  constructor(){
    super();
    this.state = {
      charName: '',
      serverName: '',
      searchResults: []
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitSearch = event => {
    event.preventDefault();
    fetchChars(this.state.charName, this.state.serverName)
      .then(data => this.setState({ searchResults: data.Results }))
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({
      charName: '',
      serverName: '',
    })
  }

  render(){
    return (
      <div>
        <form>
          <p> Whose outfit do you want to steal? </p>
          <input
            type='text'
            placeholder='Character Name'
            name='charName'
            value={this.state.charName}
            onChange={event => this.handleChange(event)}
          />
          <p> What server were they on? </p>
          <input
            type='text'
            placeholder='Server'
            name='serverName'
            value={this.state.serverName}
            onChange={event => this.handleChange(event)}
          />
          <button onClick={event => this.submitSearch(event)}>Grab that Glamour!</button>
        </form>
        <Results searchResults={this.state.searchResults}/>
      </div>
    )
  }
}

export default Form;
