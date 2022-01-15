import React from 'react';
import Equipment from './Equipment'
import '../css/EquipContainer.css'

const EquipContainer = ({ gear }) => {

  let equipment = gear.map((item) => {
    return <Equipment key={item.id} id={item.id} dye={item.dyeName} type={item.type} name={item.name} />
  })

  return (
    <div className='equip-container'>
      {equipment}
    </div>
  )
}

export default EquipContainer;
