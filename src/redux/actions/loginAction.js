import * as actionTypes from '../actions/actionTypes';

export const login = user => {
  return {
    type: actionTypes.LOGIN,
    user,
  };
};
