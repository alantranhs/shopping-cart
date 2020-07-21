import React from 'react';
import SelectBox from '../selectbox';
import compare from  '../../../utils';

console.log(compare);

const sortBy = [
  { value: '', label: 'Select' },
  { value: 'lowestprice', label: 'Lowest to highest' },
  { value: 'highestprice', label: 'Highest to lowest' }
];

const Sort = (props) => {
  console.log(props, 'sort');
  return (
    <div className="sort">
      Order by
      <SelectBox sortBy={sortBy}/>
    </div>
  )
};

export default Sort;