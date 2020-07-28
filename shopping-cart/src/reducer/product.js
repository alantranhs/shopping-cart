import * as types from './../constants/ActiveType'
import compare from '../utils';

let initialState = {
  originalData : [],
  data: [],
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

    default:
      return state;
  }
};

export default products;