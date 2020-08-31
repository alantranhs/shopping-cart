import React from 'react';
import Thumb from '../thumb';
import { addProductToCart } from '../../../action';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    const id = product.id;
    dispatch(addProductToCart(id))
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