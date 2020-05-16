import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user: {},
  isSignedIn: false,
};
export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN: {
      // CALL API
      let login = true;
      let user = {id: '1', userName: 'QA', token: '892c734t89372c89293c8m'};
      if (login) {
        console.log('log in true', user);
        return {...state, user: user, isSignedIn: true};
      } else {
        console.log('log in false');
        return {...state, user: {}, isSignedIn: false};
      }
    }
    case actionTypes.LOGOUT: {
      console.log('logout');
      return {...state, user: {}, isSignedIn: false};
    }
    default:
      return state;
  }
}
