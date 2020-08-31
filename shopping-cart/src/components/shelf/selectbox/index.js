import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateSort } from '../../../action';

const SelectBox = ({ sortBy }) => {
  const dispatch = useDispatch();

  const handleSort = (e) => {
   const infoSort = {
     value: e.target.value,
     type: e.target.value
   };

   dispatch(updateSort(infoSort));
  };

  return (
    <select onChange={handleSort}>
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