import * as types from './../constants/ActiveType'

let initialState = {
  products: [],
};

let products = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      console.log(action.response, 'res2');
      const listProduct = action.response;

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