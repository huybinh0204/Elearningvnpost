import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLoading: true,
};
export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOADING: {
      return {...state, isLoading: false};
    }
    default:
      return state;
  }
}
