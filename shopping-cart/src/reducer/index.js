import { combineReducers } from 'redux';
import products from './product';

const shoppingCartApp = combineReducers ({
  products
});

export default shoppingCartApp;