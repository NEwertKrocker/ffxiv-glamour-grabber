import React from 'react';
import '../css/Result.css'

const Result = ({ avatar, id, name, server }) => {

  return (
    <div className='result' id={id}>
      <img src={avatar} alt={name} />
      <p>{name}</p>
      <p className='server'>{server}</p>
    </div>
  )
}

export default Result;
