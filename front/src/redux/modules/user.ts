import { Action } from 'redux';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
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
  user: null,
  signupError: null,
  signupDone: boolean,
  loginLoading: boolean,
  loginError: null,
  loginDone: boolean,
  logoutLoading: boolean,
  logoutDone: boolean,
  logoutError: null,
  loadUserLoading: boolean,
  loadUserDone: boolean,
  loadUserError: null
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

export const LOGOUT_REQUEST = `${prefix}/LOGOUT_REQUEST` as const;
export const LOGOUT_SUCCESS = `${prefix}/LOGOUT_SUCCESS` as const;
export const LOGOUT_FAILURE = `${prefix}/LOGOUT_FAILURE` as const;

export const LOAD_MY_INFO_REQUEST = `${prefix}/LOAD_MY_INFO_REQUEST` as const;
export const LOAD_MY_INFO_SUCCESS = `${prefix}/LOAD_MY_INFO_SUCCESS` as const;
export const LOAD_MY_INFO_FAILURE = `${prefix}/LOAD_MY_INFO_FAILURE` as const;

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
  console.log("로그인 완료");
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

export function logoutUserRequest() {
  return {
    type: LOGOUT_REQUEST,
  };
};

export function logoutUserSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export function logoutUserFailure() {
  return {
    type: LOGOUT_FAILURE,
  };
};

/* Inital state of the module */
export const initialState: state = {
  user: null,
  signupLoading: false,
  signupError: null,
  signupDone: false,
  loginLoading: false,
  loginError: null,
  loginDone: false,
  logoutLoading: false,
  logoutDone: false,
  logoutError: null,
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
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
    case LOGOUT_REQUEST:
      return {
        logoutLoading: true,
        logoutError: null,
        logoutDone: false,
      }
    case LOGOUT_SUCCESS:
      return {
        logoutLoading: false,
        logoutDone: true,
      }
    case LOGOUT_FAILURE:
      return {
        logoutLoading: false,
        logoutError: action.error
      }
    case LOAD_MY_INFO_REQUEST:
      return {
        loadUserLoading: true,
        loadUserDone: false,
        loadUserError: null,
      }
    case LOAD_MY_INFO_SUCCESS:
      return {
        loadUserLoading: false,
        loadUserDone: true,
        user: action.data.data,
      }
    case LOAD_MY_INFO_FAILURE:
      return {
        loadUserLoading: false,
        loadUserError: action.error,
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

function logoutAPI() {
  return axios.post("/user/logout");
};

function loadUserAPI(data: any) {
  return axios.get("/user", data);
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
    yield put(loginUserSuccess(result));
  } catch (err) {
    console.error(err);
    yield put({
      type: LOGIN_FAILURE,
      error: err
    });
  };
};

export function* logoutUser() {
  try {
    yield call(logoutAPI);
    yield put({
      type: LOGOUT_SUCCESS
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOGOUT_FAILURE,
      error: err
    });
  };
};

export function* loadUser(action: Action) {
  try {
    const result: object = yield call(loadUserAPI, action);
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: result
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: err
    })
  }
}

function* watchSignupUser() {
  yield takeLatest(SIGN_UP_REQUEST, signupUser);
};

function* watchLoginUser() {
  yield takeLatest(LOGIN_REQUEST, loginUser);
};

function* watchLogoutUser() {
  yield takeLatest(LOGOUT_REQUEST, logoutUser);
};

function* watchLoadUser() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadUser);
};

/* export usersaga */
export function* userSaga() {
  yield all([
    fork(watchSignupUser),
    fork(watchLoginUser),
    fork(watchLogoutUser),
    fork(watchLoadUser),
  ]);
};