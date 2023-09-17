import { Action } from 'redux';
import { takeEvery } from 'redux-saga/effects';

/* interface */
interface signupUserData {
  email: string,
  pw: string,
  nickname: string,
  name: string,
  phone_num: number
};

/* Action Type */
const user: string = "user/";
const SIGN_UP_REQUEST = `${user}/SIGN_UP_REQUEST` as const;
const SIGN_UP_SUCCESS = `${user}/SIGN_UP_SUCCESS` as const;
const SIGN_UP_FAILURE = `${user}/SIGN_UP_FAILURE` as const;

/* Action Create Type */
export const signUp = (data: signupUserData) => ({
  type: SIGN_UP_REQUEST,
  data: data
});

/* Inital state of the module */
const initialState: object = {
  user: []
};

/* reducer */
export default function userReducer(state = initialState, action: Action) {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state
      }
      default:
        return state;
  }
};

/* saga functions */
export function* signUpRequest() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}