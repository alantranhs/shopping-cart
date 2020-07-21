import React from 'react';
import SelectBox from "../selectbox";

const sortBy = [
  { value: '', label: 'Select' },
  { value: 'lowestprice', label: 'Lowest to highest' },
  { value: 'highestprice', label: 'Highest to lowest' }
];

const Sort = () => {
  return (
    <div className="sort">
      Order by
      <SelectBox sortBy={sortBy}/>
    </div>
  )
};

export default Sort;