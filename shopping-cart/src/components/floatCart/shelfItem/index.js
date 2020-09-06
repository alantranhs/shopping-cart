import React from 'react';
import { useSelector } from 'react-redux';
import ItemDetail from './itemDetail';

const ShelfItem = () => {
  let cartProducts = useSelector(state => (state.products.cartProducts));

  return (
    <React.Fragment>
      {cartProducts.length > 0 ?
        cartProducts.map((product, index) =>(<ItemDetail product={product} key={index}/>)) :
        <p className="shelf-empty">Add some products in the cart !</p>
      }
    </React.Fragment>
  )
};

export default ShelfItem
