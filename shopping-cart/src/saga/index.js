import { takeLatest, call, put} from 'redux-saga/effects';
import * as types from './../constants/ActiveType';
import ProductApi from './../api/productApi'

export function* getListProduct() {
  try {
    const response = yield call(ProductApi.getAll);
    yield put({ type: types.FETCH_SUCCESS, response})
  } catch (error) {
    yield put({type: types.FETCH_FAIL})
  }
}

export function* shoppingCartSaga() {
  yield takeLatest(types.FETCH_PRODUCT, getListProduct);
}