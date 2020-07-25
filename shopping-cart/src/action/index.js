import * as types from './../constants/ActiveType'

export const getProducts = () => {
  return {
    type: types.FETCH_PRODUCT,
  };
};

export const updateSort = (sort) => {
  return {
    type: types.UPDATE_SORT,
    payload: sort
  };
};

export const filter = (filter) => {
  return {
    type: types.FILTER,
    payload: filter
  };
};