import * as types from '../actionTypes';

const INITIAL_STATE = {
  data: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_DATA_START:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case types.GET_DATA_SUCCESS:
      var modifiedData = action.payload.newData;
      modifiedData.data = [...action.payload.oldData, ...modifiedData.data];
      console.log(modifiedData.data);
      return {
        ...state,
        ...INITIAL_STATE,
        data: modifiedData,
      };
    case types.GET_DATA_FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
        error: action.payload,
      };
    default:
      return state;
  }
};
