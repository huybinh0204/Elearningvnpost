import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import loadingReducer from './loadingReducer';
const rootReducer = combineReducers({
  loginReducer,
  loadingReducer,
});

export default rootReducer;
