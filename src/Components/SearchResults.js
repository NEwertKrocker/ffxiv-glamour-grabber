import React from 'react';
import Result from './Result';
import { Link } from 'react-router-dom';
import '../css/SearchResults.css'

const Results = ({ searchResults }) => {

  let results = searchResults.map((result) => {
    const id = result.ID;
    return (
      <Link to={`/${id}`}>
        <Result avatar={result.Avatar} key={id} id={id} name={result.Name} server={result.Server} />
      </Link>)
  })

  return(
    <div className='results-list'>
    {results}
    <p> {!searchResults.length === 50 && '...and there are more! Better narrow your search.'} </p>
    </div>
  )
}

export default Results;
