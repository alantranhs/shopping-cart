import React from 'react';
import PropTypes from 'prop-types';

const SelectBox = ({ sortBy }) => {
  return (
    <select>
      {sortBy.map(item => (
        <option value={item.value} key={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  )
};

SelectBox.prototype = {
  sortBy: PropTypes.array.isRequired
};

export default SelectBox;