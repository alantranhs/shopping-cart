import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../action';

const ListProduct = (props) => {
  useEffect(() => {
    const { getProducts } = props;
    getProducts();
  }, [props]);

  console.log(props);



  return (
      <div></div>
  )

};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);