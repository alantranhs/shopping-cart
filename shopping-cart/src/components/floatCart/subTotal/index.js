import React from 'react';

const SubTotal = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
};

export default SubTotal
