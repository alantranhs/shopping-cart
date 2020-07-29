import React, { Component } from 'react';
import './style.scss';

const FloatCart = () => {
  return (
    <div>
        <div
          onClick={() => this.closeFloatCart()}
          className="float-cart__close-btn"
        >
          X
        </div>

        <span
          onClick={() => this.openFloatCart()}
          className="bag bag--float-cart-closed"
        >
            <span className="bag__quantity"></span>
        </span>

      <div className="float-cart__content">
        <div className="float-cart__header">
            <span className="bag">
              <span className="bag__quantity"></span>
            </span>
          <span className="header-title">Bag</span>
        </div>

        <div className="float-cart__shelf-container">
            <p className="shelf-empty">
              Add some products in the bag <br />
            </p>
        </div>

        <div className="float-cart__footer">
          <div className="sub">SUBTOTAL</div>
          <div className="sub-price">
            <p className="sub-price__val">

            </p>
            <small className="sub-price__installment">
                <span>
                </span>
            </small>
          </div>
          <div onClick={() => this.proceedToCheckout()} className="buy-btn">
            Checkout
          </div>
        </div>
      </div>
    </div>
    )
};

export default FloatCart
