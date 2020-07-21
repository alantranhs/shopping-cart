import React from 'react';
import Sort from '../sort';

const ShelfHeader = (props) => {
  return (
    <div className="shelf-container-header">
      <small className="products-found">
        <span>{props.productsLength} Product(s) found.</span>
      </small>
      <Sort/>
    </div>
  )
};

export default ShelfHeader;