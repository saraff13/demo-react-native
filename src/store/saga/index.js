import {fork, all} from 'redux-saga/effects';
import PageSaga from './PageSaga';

export default function* rootSaga() {
  yield all([fork(PageSaga)]);
}
