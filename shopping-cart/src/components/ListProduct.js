import React, { useEffect, useState, useCallback } from 'react';
import { getProducts } from '../action';
import { useSelector, useDispatch } from 'react-redux';

const ListProduct = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productList = useSelector(state => state.products.data);
  console.log(productList, 'kkk');

  return (
      <div></div>
  )
};

export default ListProduct;