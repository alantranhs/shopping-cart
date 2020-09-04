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
      console.log(product);
      let products = state.cartProducts.map(item =>{
        if(product.id === item.id) {
          return item.quantity = product.quantity;
        }

        return item;
      });

      console.log(state.cartProducts);

      return {
      ...state,
      cartProducts: [...state.cartProducts, products]
    };

    case types.REMOVE_PRODUCT_TO_CART:
      const remainingProducts = [...state.cartProducts].filter(item => (item.id !== action.payload));

      return {
        ...state,
        cartProducts: remainingProducts
      };

    case types.INCREASE_PRODUCT_TO_BY:
      let productFilterToIncrease = [...state.cartProducts].filter(item => (item.id === action.payload));
      console.log(productFilterToIncrease);
      if(productFilterToIncrease.count > 0 && productFilterToIncrease.count) {
        productFilterToIncrease.count = productFilterToIncrease.count + 1
      } else {
        productFilterToIncrease = [...state.cartProducts].filter(item => (item.id !== action.payload))
      }

      return {
        ...state
      };

    default:
      return state;
  }
};

export default products;