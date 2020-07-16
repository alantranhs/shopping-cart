import * as types from './../constants/ActiveType'

let initialState = {
  products: [],
};

let products = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      const listProduct = action.response.data;

      return {
        ...state,
        products: listProduct
      };

    case types.FETCH_FAIL:

    default:
      return state;
  }
};

export default products;