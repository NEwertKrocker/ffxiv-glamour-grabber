import React from 'react';
import PropTypes from 'prop-types';
import Result from './Result';
import { Link } from 'react-router-dom';
import '../css/SearchResults.css'

const Results = ({ searchResults, searchError }) => {

  let results = searchResults.map((result) => {
    const id = result.ID;
    return (
      <Link to={`/character/${id}`}>
        <Result avatar={result.Avatar} key={id} id={id} name={result.Name} server={result.Server} />
      </Link>)
  })

  return(
    <div className='results-list'>
    {results}
    {searchError}
    <p> {(searchResults.length === 50) && '...and there are more! Better narrow your search.'} </p>
    <Link to='/saved'>
      <button className='saved-btn'>Saved Items</button>
    </Link>
    </div>
  )
}

export default Results;

Results.propTypes = {
  searchResults: PropTypes.array,
  searchError: PropTypes.string
}
