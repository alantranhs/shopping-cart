import React, { useState } from 'react';
import Thumb from '../thumb';
import { addProductToCart } from '../../../action';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Product = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.products.cartProducts);

  const addToCart = () => {
    let productAlreadyAdd = false;
    product.quantity = 1;
    cartProducts.forEach((item, index) => {
      if(item.id === product.id) {
        productAlreadyAdd = true
      }
    });

    if (productAlreadyAdd) {
      product.quantity = product.quantity + 1;
    }

    dispatch(addProductToCart(product))
  };

  return (
    <div
      className="shelf-item"
      data-sku={product.sku}
    >
      { product.isFreeShipping &&  (
        <div className="shelf-stopper">Free shipping</div>
      )}

      <Thumb
        classes="shelf-item__thumb"
        src={require(`../../../static/products/${product.sku}.jpg`)}
        alt={product.title}
      />

      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className="val">
          {product.currencyFormat}{product.price}
        </div>
      </div>
      <div className="shelf-item__buy-btn" id={product.id} onClick={addToCart}>Add to cart</div>
    </div>
  )
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;