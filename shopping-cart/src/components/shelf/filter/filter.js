import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './style.scss'
import CheckBox from '../checkbox/checkbox';
import { filter } from '../../../action';

const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
let availableSizesChecked = availableSizes.map(size => ({ size, isChecked: false }));

const Filter = () => {
  const [allSize, setAllSize] = React.useState(availableSizesChecked);
  const [selectedCheckboxes, setSelectedCheckboxes] = React.useState(new Set());
  const dispatch = useDispatch();

  const handleSelectSize = (label) => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }

    console.log(Array.from(selectedCheckboxes), 'Array.from(selectedCheckboxes)');

    dispatch(filter(Array.from(selectedCheckboxes)));
  };


  return (
    <div className="filters">
      <h4 className="title">Sizes:</h4>
      {availableSizesChecked.map((availableSize, index) => (
        <CheckBox handleSelectSize={() => handleSelectSize(availableSize.size)} ischecked={availableSizes.isChecked} label={availableSize.size} key={index}/>
      ))}
    </div>
  );
};

export default Filter;