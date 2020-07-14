import * as types from './../constants/ActiveType'

export const getProducts = () => {
  return {
    type: types.FETCH_PRODUCT,
  };
};