import React from 'react';
import { useSelector } from 'react-redux';
import ItemDetail from './itemDetail';

const ShelfItem = () => {
  let cartProducts = useSelector(state => (state.products.cartProducts));

  let products = cartProducts.reduce(function(acc, current) {
    let isElemExist = acc.findIndex(function(item) {
      return item.id === current.id;
    });

    if (isElemExist === -1) {
      let obj = {};
      obj = current;
      obj.count = 1;
      acc.push(obj)
    } else {
      acc[isElemExist].count += 1
    }

    return acc;
  }, []);


  return (
    <React.Fragment>
      {products.length > 0 ?
        products.map((product, index) =>(<ItemDetail product={product} key={index}/>)) :
        <p className="shelf-empty">Add some products in the cart !</p>
      }
    </React.Fragment>
  )
};

export default ShelfItem
