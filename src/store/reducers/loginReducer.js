import * as types from '../actionTypes';

const INITIAL_STATE = {
  user: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
      };

    default:
      return state;
  }
};
