import * as types from '../actionTypes';

export const initLogin = request => ({
  type: types.LOGIN_START,
  payload: request,
});
