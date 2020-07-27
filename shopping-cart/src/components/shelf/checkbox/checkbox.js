import React from "react";

const CheckBox = ( { label,  handleSelectSize, isChecked } ) => {
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