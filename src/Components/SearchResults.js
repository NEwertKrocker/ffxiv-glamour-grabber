import React from 'react';

const Results = ({ searchResults }) => {

  let results = searchResults.map((result) => {
    return result.Name
  })

  return(
    <div>
    {results}
    </div>
  )
}

export default Results;
