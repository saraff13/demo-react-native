import * as types from '../actionTypes';

export const getData = payload => ({
  type: types.GET_DATA_START,
  payload,
});
