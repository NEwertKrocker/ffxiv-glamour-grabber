import React from 'react';
import Equipment from './Equipment'
import '../css/EquipContainer.css'

const EquipContainer = ({ gear, saveItem }) => {

  let equipment = gear.map((item) => {
    return <Equipment key={item.id} id={item.id} dye={item.dyeName} type={item.type} name={item.name} icon={item.icon} saveItem={saveItem} saved={false} />
  })

  return (
    <div className='equip-container'>
      {equipment}
    </div>
  )
}

export default EquipContainer;
