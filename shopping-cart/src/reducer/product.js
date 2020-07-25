import * as types from './../constants/ActiveType'
import compare from '../utils';

let initialState = {
  originalData : [],
  data: [],
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
      const listSortProduct = !!action.payload ? [...state.data].sort(compare[action.payload]) : initialState.originalData;
      return {
        data: listSortProduct
      };

    case types.FILTER:
       const listFilterProduct = initialState.originalData.filter(product => {
           return product.availableSizes.includes(action.payload);
         }
       );

      return {
        data: listFilterProduct
      };

    default:
      return state;
  }
};

export default products;