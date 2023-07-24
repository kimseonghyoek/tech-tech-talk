import { Action } from 'redux';
import * as types from '../actions/ActionTypes';

// 초기상태 선언
const initialState = {
  isLoggedIn: false
}

const User = (state = initialState, action: Action) => {
  switch (action.type) {
    case types.IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true
      }
  }
};

export default User;