import * as types from '../actionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

export default function* PageSaga() {
  yield takeLatest(types.GET_DATA_START, getPageData);
}

function* getPageData(action) {
  try {
    const response = yield axios.get(
      `https://reqres.in/api/users?page=${action.payload.pageNo}`,
    );

    // console.log('Saga response => ', response.data);

    yield put({
      type: types.GET_DATA_SUCCESS,
      payload: {
        newData: response.data,
        oldData: action.payload.oldData,
      },
    });
  } catch (error) {
    console.log('Saga error => ', error);
    yield put({
      type: types.GET_DATA_FAIL,
      payload: error,
    });
  }
}
