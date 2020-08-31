import React from 'react';

const ShelfItem = (props) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
};

export default ShelfItem
