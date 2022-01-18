import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      searchError: '',
      searching: false,
      searchResults: [],
      setChar: props.setChar
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitSearch = event => {
    event.preventDefault();
    if(this.state.charName === ''){
      this.setState({ searchError: 'Whoops! Don\'t forget to enter a character name!' })
    } else {
    this.setState({ searchError: '', searching: true });
    fetchChars(this.state.charName, this.state.serverName)
      .then(data => {
        if(data.Pagination.ResultsTotal === 0){
          this.setState({ searchError: 'Whoops! Looks like there\'s no one in Eorzea with that name. Try another search?', searching: false})
        } else {
          this.setState({ searchResults: data.Results, searching: false })
        }
      })
    }
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
              return <option key={server} value={server}>{server}</option>
            })}
          </select>
          <button onClick={event => this.submitSearch(event)}>Grab that Glamour!</button>
        </form>
        {this.state.searching && <p className='searching-msg'>Searching...</p>}
        <Results searchResults={this.state.searchResults} searchError={this.state.searchError} setChar={this.setChar}/>
      </div>
    )
  }
}

export default Form;

Form.propTypes = {
  setChar: PropTypes.func
}
