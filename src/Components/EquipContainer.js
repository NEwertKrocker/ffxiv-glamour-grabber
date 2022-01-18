import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Equipment from './Equipment'
import '../css/EquipContainer.css'

const EquipContainer = ({ gear, saveItem }) => {

  let equipment = gear.map((item) => {
    return <Equipment key={item.id} id={item.id} dye={item.dyeName} type={item.type} name={item.name} icon={item.icon} saveItem={saveItem} saved={false} />
  })

  return (
    <div className='equip-container'>
      {equipment}
      <Link to='/saved'>
        <button className='saved-btn'>Saved Items</button>
      </Link>
    </div>
  )
}

export default EquipContainer;

EquipContainer.propTypes = {
  gear: PropTypes.array,
  saveItem: PropTypes.func,
}
