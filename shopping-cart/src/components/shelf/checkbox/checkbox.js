import React from "react";
import PropTypes from 'prop-types';

const CheckBox = ( { label, isChecked} ) => {
  return (
    <div className="filters-available-size">
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
        />

        <span className="checkmark">{label}</span>
      </label>
    </div>
  )
};

export default CheckBox;