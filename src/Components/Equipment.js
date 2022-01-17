import React from 'react';
import PropTypes from 'prop-types';
import '../css/Equipment.css';
import '../Assets/item_icon_checked.png';
import discardIcon from '../Assets/delete.png';

const Equipment = ({ id, dye, type, name, icon, saveItem, deleteItem, saved }) => {

  return (
    <div className='item-details' id={id} onClick={() => {saveItem(id, dye, icon, name, type)}}>
      <img src={`https://xivapi.com/${icon}`} className='item-icon' />
      <div className='names'>
        <p className='item-name'>{name}</p>
        <p className='dye-name'>{dye}</p>
      </div>
      {saved && <img src={discardIcon} className='discard-icon' onClick={() => {deleteItem(id)}}/>}
    </div>
  )
}

export default Equipment;

Equipment.propTypes = {
  id: PropTypes.number,
  dye: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  saveItem: PropTypes.func,
  deleteItem: PropTypes.func,
  saved: PropTypes.bool
}
