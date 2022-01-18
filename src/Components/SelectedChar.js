import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Outfit from './Outfit';

const SelectedChar = ({ saveItem }) => {
  const id = useParams()['character'];
    return <Outfit id={id} saveItem={saveItem} />
}

export default SelectedChar;

SelectedChar.propTypes = {
  saveItem: PropTypes.func
}
