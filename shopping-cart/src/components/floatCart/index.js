import React from 'react';
import ShelfItem from './shelfItem/index';
import SubTotal from './subTotal';
import './style.scss';
import { useSelector } from 'react-redux';

const FloatCart = () => {
  const [openBox, setOpenBox] = React.useState(false);

  const handleOpenBox = () => {
    setOpenBox(!openBox);
  };

  let listProductsCart = useSelector(state => state.products.cartProducts);
  let numberProductsCart = 0;
  if (listProductsCart.length > 0) {
    numberProductsCart = listProductsCart.reduce((acc, crr) => {
      return acc + crr.quantity;
    }, 0);
  }

  return (
    <div className={`float-cart ${openBox ? 'float-cart--open' : ''}`}>
      <div className="float-cart__close-btn" onClick={handleOpenBox}>
        X
      </div>
      {!openBox &&
    <div className="bag bag--float-cart-closed" onClick={handleOpenBox}>
      <span className="bag__quantity">{numberProductsCart}</span>
    </div>
    }
      <div className="float-cart__content">
        <div className="float-cart__header">
            <span className="bag">
              <span className="bag__quantity">{numberProductsCart}</span>
            </span>
          <span className="header-title">Bag</span>
        </div>

        <div className="float-cart__shelf-container">
          <ShelfItem/>
        </div>

        <div className="float-cart__footer">
          <SubTotal cartProducts={listProductsCart}/>
        </div>
      </div>
    </div>
  )
};

export default FloatCart
