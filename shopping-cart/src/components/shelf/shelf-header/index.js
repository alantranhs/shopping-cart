import React from 'react';
import Sort from '../sort';

const ShelfHeader = ({ productList, productsLength}) => {
  return (
    <div className="shelf-container-header">
      <small className="products-found">
        <span>{productsLength} Product(s) found.</span>
      </small>
      <Sort productList={productList}/>
    </div>
  )
};

export default ShelfHeader;