import React from 'react';
import '../css/Equipment.css'

const Equipment = ({ id, dye, type, name }) => {

  return (
    <div className='item' id={id}>
      <p>{name}</p>
      <p>{dye}</p>
    </div>
  )
}

export default Equipment;
