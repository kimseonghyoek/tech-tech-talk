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
  loading: boolean,
  user: object,
  error: null
};

/* Action Type */
const prefix: string = "user/";
const SIGN_UP_REQUEST = `${prefix}/SIGN_UP_REQUEST` as const;
const SIGN_UP_SUCCESS = `${prefix}/SIGN_UP_SUCCESS` as const;
const SIGN_UP_FAILURE = `${prefix}/SIGN_UP_FAILURE` as const;

/* Action Create Type */
export function signupUser(data: signupUserData) {
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

/* Inital state of the module */
const initialState: state = {
  user: {},
  loading: false,
  error: null,
};

/* reducer */
export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        user: null,
        loading: true,
        error: null
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.data
      }
    case SIGN_UP_FAILURE:
      return {
        loading: false,
        user: null,
        error: action.error
      }
      default:
        return state;
  }
};

/* api address */
function signupAPI(data: any) {
  return axios.post("/user/signup", data);
}

/* saga functions */
export function* watchSignupUser(action: Action) {
  try {
    const result: object =  yield call(signupAPI, signupUser);
    console.log(result);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: err
    });
  };
};