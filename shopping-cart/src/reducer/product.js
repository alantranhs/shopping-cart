import * as types from './../constants/ActiveType'
import compare from '../utils';

let initialState = {
  originalData : [],
  data: [],
  cartProducts: [],
  typeSort: ''
};

let products = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      initialState.originalData = action.response;
      const listProduct = initialState.originalData;

      return {
        ...state,
        data: listProduct
      };

    case types.FETCH_FAIL:
      return {
        ...state
      };

    case types.UPDATE_SORT:
      const listSortProduct = !!action.payload.type ? [...state.data].sort(compare[action.payload.type]) : initialState.originalData;

      return {
        ...state,
        data: listSortProduct,
        typeSort: action.payload.type
      };

    case types.FILTER:
       const listFilterProduct = [...state.originalData].sort(compare[state.typeSort]).filter(product => {
         return product.availableSizes.some(item => action.payload.includes(item));
       });

      return {
        ...state,
        data: listFilterProduct,
      };

    case types.ADD_PRODUCT_TO_CART:
      let product = action.payload;
      let newListProduct = [];
      let productsAdded = [];

      if (state.cartProducts.length > 0) {
        productsAdded = state.cartProducts.filter(item => (item.id === product.id));
      }

      if(productsAdded.length > 0 && state.cartProducts.length > 0) {
        state.cartProducts.pop();
      }

      newListProduct = [...state.cartProducts, product];
      return {
      ...state,
      cartProducts: newListProduct
    };

    case types.REMOVE_PRODUCT_TO_CART:
      const remainingProducts = [...state.cartProducts].filter(item => (item.id !== action.payload));

      return {
        ...state,
        cartProducts: remainingProducts
      };

    case types.INCREASE_PRODUCT_TO_BY:
      let productsAfterIncrease = action.payload;

      let indexProductIn = state.cartProducts.map(function(element) { return element.id; }).indexOf(productsAfterIncrease.id);
      if (indexProductIn !== -1) {
        state.cartProducts[indexProductIn] = productsAfterIncrease;
      }

      return {
        ...state,
        cartProducts: [...state.cartProducts]
      };

    case types.DECREASE_PRODUCT_TO_BY:
      let productsAfterDecrease = action.payload;

      let indexProductDe = state.cartProducts.map(function(element) { return element.id; }).indexOf(productsAfterDecrease.id);
      if (indexProductDe !== -1) {
        state.cartProducts[indexProductDe] = productsAfterDecrease;
      }

      return {
        ...state,
        cartProducts: [...state.cartProducts]
      };

    default:
      return state;
  }
};

export default products;