import React from "react";
import PropTypes from 'prop-types';
import './style.scss'
import CheckBox from '../checkbox/checkbox';

const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

const Filter = () => {
  return (
    <div className="filters">
      <h4 className="title">Sizes:</h4>
      {availableSizes.map((size, index) => (
        <CheckBox label={size} key={index}/>
      ))}
    </div>
  );
};

export default Filter;