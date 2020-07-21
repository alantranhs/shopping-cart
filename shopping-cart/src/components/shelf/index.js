import React, { useEffect } from 'react';
import { getProducts } from '../../action';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import ShelfHeader from "./shelf-header";
import Product from './products';
import Filter from "./filter/filter";
import './style.scss';

const Shelf = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productList = useSelector(state => state.products.data);

  return (
    <React.Fragment>
      <ShelfHeader productsLength={productList.length} productList={productList}/>
      <div children="shelf-container-filter">
        <Filter/>
        <div className="shelf-container">
          {productList.map(product => (
            <Product product={product} key={product.id}/>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
};

export default Shelf;