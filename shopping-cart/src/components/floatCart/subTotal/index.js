import React from 'react';

const SubTotal = ({cartProducts}) => {
  let sum = 0;
  if (cartProducts.length > 0) {
    sum = cartProducts.reduce((sum, cartItem) => (sum + cartItem.quantity * parseFloat(cartItem.price)), 0);
  }

  return (
    <React.Fragment>
      <div className="sub">SUBTOTAL</div>
      <div className="sub-price">
        <p className="sub-price__val">$ {sum}</p>
      </div>
      <div className="buy-btn">
        Checkout
      </div>
    </React.Fragment>
  )
};

export default SubTotal
