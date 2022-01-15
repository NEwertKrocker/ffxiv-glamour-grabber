import React from 'react';
import '../css/Equipment.css';
import '../Assets/item_icon_checked.png';

const Equipment = ({ id, dye, type, name, icon, saveItem }) => {

  return (
    <div className='item-details' id={id} onClick={() => {saveItem(id, dye, icon, name, type)}}>
      <img src={`https://xivapi.com/${icon}`} className='item-icon' />
      <p className='item-name'>{name}</p>
      <p className='dye-name'>{dye}</p>
    </div>
  )
}

export default Equipment;
