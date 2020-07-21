import * as types from './../constants/ActiveType'

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

    default:
      return state;
  }
};

export default products;