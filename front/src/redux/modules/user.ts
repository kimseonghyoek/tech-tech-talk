import { createAsyncAction } from 'typesafe-actions';
import { Action } from 'redux';
import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

/* interface */
interface signupUserData {
  email: string,
  pw: string,
  nickname: string,
  name: string,
  phone_num: number
};

export interface state {
  signupLoading: boolean,
  user: object,
  signupError: null,
  signupDone: boolean,
  loginLoading: boolean,
  loginError: null,
  loginDone: boolean,
};

interface loginUserData {
  email: string,
  pw: string
}

/* Action Type */
const prefix: string = "user/";
export const SIGN_UP_REQUEST = `${prefix}/SIGN_UP_REQUEST` as const;
export const SIGN_UP_SUCCESS = `${prefix}/SIGN_UP_SUCCESS` as const;
export const SIGN_UP_FAILURE = `${prefix}/SIGN_UP_FAILURE` as const;
export const LOGIN_REQUEST = `${prefix}/LOGIN_REQUEST` as const;
export const LOGIN_SUCCESS = `${prefix}/LOGIN_SUCCESS` as const;
export const LOGIN_FAILURE = `${prefix}/LOGIN_FAILURE` as const;

/* Action Create Type */
export function signupUserRequest(data: signupUserData) {
  return {
    type: SIGN_UP_REQUEST,
    data
  };
};

export function signupUserSuccess(data: any) {
  return {
    type: SIGN_UP_SUCCESS,
    data
  };
};  

export function signupUserFailure(error: any) {
  console.log(error);
  return {
    type: SIGN_UP_FAILURE,
    error
  };
};

export function loginUserRequest(data: loginUserData) {
  return {
    type: LOGIN_REQUEST,
    data
  };
};

export function loginUserSuccess(data: any) {
  return {
    type: LOGIN_SUCCESS,
    data
  };
};

export function loginUserFailure(data: any) {
  return {
    type: LOGIN_FAILURE,
    data
  };
};

/* Inital state of the module */
export const initialState: state = {
  user: {},
  signupLoading: false,
  signupError: null,
  signupDone: false,
  loginLoading: false,
  loginError: null,
  loginDone: false,
};

/* reducer */
export default function user(state = initialState, action: any) {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        user: null,
        signupLoading: true,
        signupError: false,
        signupDone: false,
      }
    case SIGN_UP_SUCCESS:
      return {
        signupLoading: false,
        signupDone: true,
      }
    case SIGN_UP_FAILURE:
      return {
        signupLoading: false,
        signupError: action.error
      }
    case LOGIN_REQUEST:
      return {
        loginLoading: true,
        loginError: null,
        loginDone: false,
      }
    case LOGIN_SUCCESS:
      return {
        loginLoading: false,
        user: action.data.data,
        loginDone: true,
      }
    case LOGIN_FAILURE:
      return {
        loginLoading: false,
        loginError: action.error
      }
      default:
        return state;
  }
};

/* api address */
function signupAPI(data: any) {
  return axios.post("/user/signup", data);
};

function loginAPI(data: any) {
  return axios.post("/user/login", data);
};

/* saga functions */
export function* signupUser(action: Action) {
  try {
    const result: object =  yield call(signupAPI, action);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: err
    });
  };
};

export function* loginUser(action: Action) {
  try {
    const result: object = yield call(loginAPI, action);
    yield put({
      type: LOGIN_SUCCESS,
      data: result
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOGIN_FAILURE,
      eror: err
    });
  };
};

function* watchSignupUser() {
  yield takeLatest(SIGN_UP_REQUEST, signupUser);
}

function* watchLoginUser() {
  yield takeLatest(LOGIN_REQUEST, loginUser);
}

/* export usersaga */
export function* userSaga() {
  yield all([
    fork(watchSignupUser),
    fork(watchLoginUser),
  ]);
}