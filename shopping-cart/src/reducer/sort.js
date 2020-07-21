import * as types from './../constants/ActiveType'

let initialState = {
  data: [],
};

let sortProduct = (state = initialState, action) => {
  if (action.type === types.UPDATE_SORT) {
    const listProduct = action.response;
    return {
      ...state,
      data: listProduct
    };
  } else {
    return state;
  }
};

export default sortProduct;