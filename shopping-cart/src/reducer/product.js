import * as types from './../constants/ActiveType'

let initialState = {
  products: [],
  currentFilter: 'all'
};

let products = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      const listTodo = action.response.data;

      return {
        ...state,
        products: listTodo
      };
    case types.FETCH_FAIL:

    default:
      return state;
  }
};

export default products;