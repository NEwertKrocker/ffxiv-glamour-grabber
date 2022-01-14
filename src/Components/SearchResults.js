import React from 'react';
import Result from './Result';
import '../css/SearchResults.css'

const Results = ({ searchResults }) => {

  let results = searchResults.map((result) => {
    return <Result avatar={result.Avatar} id={result.ID} name={result.Name} server={result.Server}/>
  })

  return(
    <div className='results-list'>
    {results}
    <p> {!searchResults.length === 50 && '...and there are more! Better narrow your search.'} </p>
    </div>
  )
}

export default Results;
