import { Action } from "redux";
import * as types from "../actions/ActionTypes";

// 초기상태 선언
export const initialState = {
  user: null,
  loginRequest: false,
  loginError: false,
  loginSuccess: false,
};

const user = (state = initialState, action: Action) => {
  switch (action.type) {
    case types.LOG_IN_REQUEST:
      state.loginRequest = true;
      state.loginError = false;
      state.loginSuccess = false;
      break;
    case types.LOG_IN_SUCCESS:
      state.loginRequest=false;
      state.loginSuccess=true;
      state.loginError=false;
      break;
    case types.LOG_IN_FAILURE:
      state.loginRequest=false;
      state.loginSuccess=false;
      state.loginError=true;
      break;
  }
};

export default user;