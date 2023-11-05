import axios from "axios";
import { Action } from "redux";
import { call } from "redux-saga/effects";

// state interface
interface Istate {
  newsData: null,
  getNewsLoading: boolean,
  getNewsError: null,
  getNewsDone: boolean
};

// initializing state
export const initialState: Istate = {
  newsData: null,
  getNewsLoading: false,
  getNewsError: null,
  getNewsDone: false
};

/* Action Type */
const prefix: string = "news/";
export const GET_NEWS_REQUEST = `${prefix}/GET_NEWS_REQUEST` as const;
export const GET_NEWS_SUCCESS = `${prefix}/GET_NEWS_SUCCESS` as const;
export const GET_NEWS_FAILURE = `${prefix}/GET_NEWS_FAILURE` as const;

/* Action Create Type */
export function getNewsRequest(data: any) {
  return {
    type: GET_NEWS_REQUEST,
    data
  };
};

export function getNewsSuccess(data: any) {
  return {
    type: GET_NEWS_SUCCESS,
    data
  };
};

export function getNewsFailure(data: any) {
  return {
    type: GET_NEWS_FAILURE,
    data
  };
};

// api address
function getNewsAPI(data: any) {
  return axios.get("/comm/news/get", data);
};

/* saga functions */
export function* getNews(action: Action) {
  try {
    const result: object = yield call(getNewsAPI, action);
  } catch (err) {
    console.error(err);
  }
}

/* reducer */
export default function news(state = initialState, action: any) {
  switch(action.type) {
    case GET_NEWS_REQUEST:
      return {
        getNewsLoading: true,
        getNewsError: null,
        getNewsDone: false,
        newsData: null,
      }
    case GET_NEWS_SUCCESS:
      return {
        getNewsLoading: false,
        getNewsDone: true,
        newsData: action.data,
      }
    case GET_NEWS_FAILURE: 
      return {
        getNewsLoading: false,
        getNewsError: action.error
      }
  }
};