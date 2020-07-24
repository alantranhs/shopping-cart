import * as types from './../constants/ActiveType'
import {updateSort} from '../action';
import compare from '../utils';

let initialState = {
  data: [],
};

let products = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      const listProduct = action.response;

      return {
        ...state,
        data: listProduct
      };

    case types.FETCH_FAIL:
      return {
        ...state
      };

    case types.UPDATE_SORT:
      const listSortProduct = [...state.data].sort(compare[action.payload]);
      return {
        ...state,
        data: listSortProduct
      };

    default:
      return state;
  }
};

export default products;