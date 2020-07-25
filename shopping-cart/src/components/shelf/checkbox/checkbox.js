import React from "react";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filter } from '../../../action';

const CheckBox = ( { label, isChecked} ) => {
  const dispatch = useDispatch();

  const handleSelectSize = (e) => {
    dispatch(filter(e.target.value))
  };

  return (
    <div className="filters-available-size">
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={handleSelectSize}
        />

        <span className="checkmark">{label}</span>
      </label>
    </div>
  )
};

export default CheckBox;