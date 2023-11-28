import axios from "axios";
import { Action } from "redux";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

// state interface
interface Istate {
  weatherData: null;
  getWeatherLoading: boolean;
  getWeatherError: null;
  getWeatherDone: boolean;
}

// Action Type
const prefix: string = "weather/";
export const GET_WEATHER_REQUEST = `${prefix}/GET_WEATHER_REQUEST` as const;
export const GET_WEATHER_SUCCESS = `${prefix}/GET_WEATHER_SUCCESS` as const;
export const GET_WEATHER_FAILURE = `${prefix}/GET_WEATHER_FAILURE` as const;

// Action Create Type
export function getWeatherRequest(data: any) {
  return {
    type: GET_WEATHER_REQUEST,
    data,
  };
}

export function getWeatherSuccess(data: any) {
  return {
    type: GET_WEATHER_SUCCESS,
    data,
  };
}

export function getWeatherFailure(data: any) {
  return {
    type: GET_WEATHER_FAILURE,
    data,
  };
}

// initializing state
export const initialState: Istate = {
  weatherData: null,
  getWeatherLoading: false,
  getWeatherError: null,
  getWeatherDone: false,
};

// reducer
export default function weather(state = initialState, action: any) {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return {
        getWeatherLoading: true,
        getWeatherError: null,
        getWeatherDone: false,
        weatherData: null,
      };
    case GET_WEATHER_SUCCESS:
      return {
        getWeatherLoading: false,
        getWeatherDone: true,
        weatherData: action.data,
      };
    case GET_WEATHER_FAILURE:
      return {
        getWeatherLoading: false,
        getWeatherError: action.error,
      };
    default:
      return state;
  }
}

// api address
function getWeatherAPI(data: any) {
  return axios.get("/weather/get", data);
}

// saga functions
export function* gewtWeather(action: any) {
  try {
    const result: object = yield call(getWeatherAPI, action);
    yield put(getWeatherSuccess(result));
  } catch (err) {
    console.log(err);
    yield put(getWeatherFailure(err));
  }
};

function* watchGetWeather() {
  yield takeLatest(GET_WEATHER_REQUEST, gewtWeather);
};

// export weathersaga
export function* weatherSaga() {
  yield all([
    fork(watchGetWeather),
  ])
};