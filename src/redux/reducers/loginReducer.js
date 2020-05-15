import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user: {
    userName: 'test',
    password: '',
  },
  error: 0,
};
export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    // case actionTypes.CHECK_LOGIN:
    //   return {...state, user: action.user};
    // case actionTypes.SAVE_USER_LOGIN:
    //   return {...state, user: action.user};
    case actionTypes.LOGIN:
      return {...state, user: action.user};
    case actionTypes.ERROR:
      return {...state, user: ''};
    default:
      return state;
  }
}
