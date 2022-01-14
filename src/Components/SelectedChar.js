import React from 'react';
import { useParams } from 'react-router-dom';
import Outfit from './Outfit';

const SelectedChar = () => {
  const id = useParams()['character'];
  console.log(useParams());
    return <Outfit id={id} />
}

export default SelectedChar;
