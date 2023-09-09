import * as types from "../actions/ActionTypes";

interface initialStates {
  user: object,
  loginRequest: boolean,
  loginError: boolean,
  loginSuccess: boolean,
}

// 초기상태 선언
const initialState: initialStates = {
  user: {},
  loginRequest: false,
  loginError: false,
  loginSuccess: false,
};

export const user = (state = initialState, action: any) => {
  switch (action.type) {
    case types.LOG_IN_REQUEST:
      state.loginRequest = true;
      state.loginError = false;
      state.loginSuccess = false;
      break;
    case types.LOG_IN_SUCCESS:
      state.loginRequest=false;
      state.loginSuccess=true;
      state.user=action.data;
      console.log(action.data); 
      state.loginError=false;
      break;
    case types.LOG_IN_FAILURE:
      state.loginRequest=false;
      state.loginSuccess=false;
      state.loginError=true;
      break;
    default:
      return state;
  }
};