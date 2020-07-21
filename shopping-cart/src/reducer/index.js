import { combineReducers } from 'redux';
import products from './product';
import sort from './sort'

const shoppingCartApp = combineReducers ({
  products,
  sort
});

export default shoppingCartApp;