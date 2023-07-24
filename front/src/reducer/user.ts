import { Action } from 'redux';
import * as types from '../actions/ActionTypes';

// 초기상태 선언
export const initialState = {
  user: {
    isLoggedIn: false
  },
}

export const isLogin = {
  type: types.IS_LOGGED_IN
}

const user = (state = initialState.user, action: Action) => {
  switch (action.type) {
    case types.IS_LOGGED_IN:
      return {
        isLoggedIn: true
      }
    default:
      return state
  }
};

export default user;