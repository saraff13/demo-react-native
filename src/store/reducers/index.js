import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import PageReducer from './PageReducer';

export default combineReducers({
  loginReducer,
  PageReducer,
});
