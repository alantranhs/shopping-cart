import React from 'react';
import { removeProductToCart, decreaseProductToBy, increaseProductToBy } from '../../../action';
import { useDispatch } from 'react-redux';

const ItemDetail = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveProductFormCart = () => {
    dispatch(removeProductToCart(product.id));
  };

  const handleIncreaseProductToBy = () => {
    dispatch(increaseProductToBy(product.id));
  };

  const handleDecreaseProductToBy = () => {
    dispatch(decreaseProductToBy(product.id));
  };

  return (
    <div className="shelf-item">
      <div className="shelf-item__del" onClick={handleRemoveProductFormCart}>X</div>
      <div className="shelf-item__thumb"></div>
      <div className="shelf-item__details">
        <p className="title"> {product.style} </p>
        <p className="desc">
          {product.description} <br/>
          <span>quantity: {product.quantity}</span>
        </p>
      </div>
      <div className="shelf-item__price"><p>$ {parseFloat(product.price) * product.quantity}</p>
        <div>
          <button className="change-product-button" onClick={handleDecreaseProductToBy}>-</button>
          <button className="change-product-button" onClick={handleIncreaseProductToBy}>+</button>
        </div>
      </div>
    </div>
  )
};

export default ItemDetail;