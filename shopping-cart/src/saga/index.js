import { takeLatest, call, put} from 'redux-saga/effects';
import * as types from './../constants/ActiveType';
import axios from 'axios';

const ROOT_URL = 'https://5f0cf5d211b7f60016056467.mockapi.io/products';

export function* getListProduct() {
  try {
    const response = yield call(axios.get, `${ROOT_URL}`);
    yield put({ type: types.FETCH_SUCCESS, response})
  } catch (error) {
    yield put({type: types.FETCH_FAIL})
  }
}

export function* shoppingCartSaga() {
  yield takeLatest(types.FETCH_PRODUCT, getListProduct);
}
