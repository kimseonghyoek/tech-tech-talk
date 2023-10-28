import axios from "axios";

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
function getNewsAPI() {
  return axios.get("/comm/news/get");
};
