import React from "react";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './style.scss'
import CheckBox from '../checkbox/checkbox';
import { filter } from '../../../action';

const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
let availableSizesChecked = availableSizes.map(size => ({ size, isChecked: false }));

const Filter = () => {
  const [allSize, setAllSize] = React.useState(availableSizesChecked);
  console.log(allSize, 'allSize');
  const dispatch = useDispatch();
  const newAllSize = [];
  const handleSelectSize = (e) => {
    dispatch(filter(availableSizesChecked));
  };

  return (
    <div className="filters">
      <h4 className="title">Sizes:</h4>
      {availableSizesChecked.map((availableSize, index) => (
        <CheckBox handleSelectSize={handleSelectSize} ischecked={availableSizes.isChecked} label={availableSize.size} key={index}/>
      ))}
    </div>
  );
};

export default Filter;