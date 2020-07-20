import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../action';
import { useSelector, useDispatch } from "react-redux";

console.log(useSelector, 'useSelector');

const ListProduct = (props) => {
  const productList = useSelector(state => state.products);
  console.log(productList, 'productList');

  useEffect(() => {
    props.getProducts();
    render();
  }, []);

  const render = () => {
    console.log(props);
    console.log(props.products.products, 'props.products.products');
    console.log(productList);
  };




  return (
      <div></div>
  )

};

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
});

export default connect(null, mapDispatchToProps)(ListProduct);