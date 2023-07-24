// 액션 생성자 선언
import * as types from './ActionTypes';

export const isLoggedIn = () => ({
  type: types.IS_LOGGED_IN
});

export const isLoggedOut = () => ({
  type: types.IS_LOGGED_OUT
});