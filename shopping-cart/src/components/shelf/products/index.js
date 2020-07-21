import React, { useEffect } from 'react';
import Thumb from "../thumb";
import PropTypes from 'prop-types';

const Product = ({ product }) => {
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
        src={require(`../../../static/products/${product.sku}_1.jpg`)}
        alt={product.title}
      />

      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className="val">
          {product.currencyFormat}{product.price}
        </div>
      </div>
      <div className="shelf-item__buy-btn">Add to cart</div>
    </div>
  )
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;