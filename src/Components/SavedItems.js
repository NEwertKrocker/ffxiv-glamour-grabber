import React from 'react';
import { Link } from 'react-router-dom';
import Equipment from './Equipment'
import '../css/SavedItems.css';

const SavedItems = ({ savedItems }) => {

  let equipment = savedItems.map((item) => {
    return <Equipment key={item.id} id={item.id} dye={item.dye} type={item.type} name={item.name} icon={item.icon} />
  })

  return(
    <div>
      {equipment}
      <Link to='/'>
        <button className='return-btn'> Back to Search </button>
      </Link>
    </div>
  )
}

export default SavedItems;
