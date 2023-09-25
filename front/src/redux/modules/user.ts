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

interface state {
  signupLoading: boolean,
  user: object,
  signupError: null,
  loginLoading: boolean,
  loginError: boolean,
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
  loginLoading: false,
  loginError: false,
};

/* reducer */
export default function user(state = initialState, action: any) {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        user: null,
        signupLoading: true,
        signupError: null
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.data
      }
    case SIGN_UP_FAILURE:
      return {
        signupLoading: false,
        user: null,
        signupError: action.error
      }
    case LOGIN_REQUEST:
      return {
        ...state,
        loginUserRequest: true,
        user: null
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.data
      }
    case LOGIN_FAILURE:
      return {
        loginUserRequest: false,
        user: null,
        loginUserFailure: action.error
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
    console.log(result);
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
    console.log(result);
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