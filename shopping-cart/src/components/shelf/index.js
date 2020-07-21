import React, { useEffect } from 'react';
import { getProducts } from '../../action';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Product from './products';
import './style.scss';

const Shelf = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productList = useSelector(state => state.products.data);
  console.log(productList, 'kkk');

  return (
    <React.Fragment>
      <div className="shelf-container">
        {productList.map(product => (
          <Product product={product} key={product.id}/>
        ))}
      </div>
    </React.Fragment>
  )
};

export default Shelf;