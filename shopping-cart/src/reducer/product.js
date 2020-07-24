import * as types from './../constants/ActiveType'
import compare from '../utils';

const initialState = {
  data: [],
  defaultData: []
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      initialState.defaultStatus = action.response;
      const listProduct = initialState.defaultStatus;

      return {
        ...state,
        data: listProduct
      };

    case types.FETCH_FAIL:
      return {
        ...state
      };

    case types.UPDATE_SORT:
      const listSortProduct = !!action.payload ? [...state.data].sort(compare[action.payload]) : initialState.defaultStatus;

      return {
        data: listSortProduct
      };

    default:
      return state;
  }
};

export default products;