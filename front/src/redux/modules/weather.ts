import axios from "axios"

// state interface
interface Istate {
  weatherData: null,
  getWeatherLoading: boolean,
  getWeatherError: null,
  getWeatherDone: boolean,
};

// Action Type
const prefix: string = "weather/";
export const GET_WEATHER_REQUEST = `${prefix}/GET_WEATHER_REQUEST` as const;
export const GET_WEATHER_SUCCESS = `${prefix}/GET_WEATHER_SUCCESS` as const;
export const GET_WEATHER_FAILURE = `${prefix}/GET_WEATHER_FAILURE` as const;

// Action Create Type
export function getWeatherRequest(data: any) {
  return {
    type: GET_WEATHER_REQUEST,
    data
  };
};

export function getWeatherSuccess(data: any) {
  return {
    type: GET_WEATHER_SUCCESS,
    data
  };
};

export function getWeatherFailure(data: any) {
  return {
    type: GET_WEATHER_FAILURE,
    data,
  };
};

// initializing state
export const initialState: Istate = {
  weatherData: null,
  getWeatherLoading: false,
  getWeatherError: null,
  getWeatherDone: false
}


// reducer

// api address
function getWeatherAPI(data: any) {
  return axios.get("/weather/get", data);
};

// saga functions

// export weathersaga