import React, {Component} from 'react';
import './style.scss';

const FloatCart = () => {
  const [openBox, setOpenBox] = React.useState(false);

  const handleOpenBox = () => {
    setOpenBox(!openBox);
  };

  return (
    <div className={`float-cart ${openBox ? 'float-cart--open' : ''}`}>
      <div className="float-cart__close-btn" onClick={handleOpenBox}>
        X
      </div>
      ${!openBox &&
    <span className="bag bag--float-cart-closed" onClick={handleOpenBox}>
            <span className="bag__quantity"></span>
          </span>
    }

      <div className="float-cart__content">
        <div className="float-cart__header">
            <span className="bag">
              <span className="bag__quantity"></span>
            </span>
          <span className="header-title">Bag</span>
        </div>

        <div className="float-cart__shelf-container">
          <p className="shelf-empty">Add some products in the cart !</p>
          <div className="shelf-item">
            <div className="shelf-item__del"></div>
            <div className="shelf-item__thumb"></div>
            <div className="shelf-item__details">
              <p className="title"> Sphynx Tie Dye Wine T-Shirt </p>
              <p className="desc">
                X | Front tie dye print<br/>Quantity: 5
              </p>
            </div>
            <div className="shelf-item__price"><p>$ 9.00</p>
              <div>
                <button className="change-product-button">-</button>
                <button className="change-product-button">+</button>
              </div>
            </div>
          </div>
        </div>

        <div className="float-cart__footer">
          <div className="sub">SUBTOTAL</div>
          <div className="sub-price">
            <p className="sub-price__val">$ 27.00</p>
            <small className="sub-price__installment">
              <span>OR UP TO 3 x $ 9.00</span>
            </small>
          </div>
          <div className="buy-btn">
            Checkout
          </div>
        </div>
      </div>
    </div>
)
};

export default FloatCart
