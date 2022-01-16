import React, { Component } from 'react';
import { fetchChars, fetchServers } from '../ApiCalls';
import Results from './SearchResults';
import '../css/Form.css';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      charName: '',
      serverName: 'all',
      servers: [],
      searchResults: [],
      setChar: props.setChar
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
    })
  }

  componentDidMount(){
    fetchServers()
      .then(data => {this.setState({ servers: data })})
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
          <select
            placeholder='Server'
            name='serverName'
            value={this.state.serverName}
            onChange={event => this.handleChange(event)}
          >
            <option value='all'>Search all</option>
            {this.state.servers.map((server) => {
              return <option value={server}>{server}</option>
            })}
          </select>
          <button onClick={event => this.submitSearch(event)}>Grab that Glamour!</button>
        </form>
        <Results searchResults={this.state.searchResults} setChar={this.setChar}/>
      </div>
    )
  }
}

export default Form;
