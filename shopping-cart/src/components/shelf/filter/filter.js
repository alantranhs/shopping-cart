import React from 'react';
import { useDispatch } from 'react-redux';
import './style.scss'
import CheckBox from '../checkbox/checkbox';
import { filter } from '../../../action';

const availableSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
let availableSizesChecked = availableSizes.map(size => ({ size, isChecked: false }));

const Filter = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = React.useState(new Set());
  const dispatch = useDispatch();

  const handleSelectSize = (label) => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }

    setSelectedCheckboxes(selectedCheckboxes);

    dispatch(filter(Array.from(selectedCheckboxes).length > 0 ? Array.from(selectedCheckboxes) : availableSizes));
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