import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  { user } from "./reducer/user";
import rootReducer from './reducer/index';


export const store = configureStore({
  reducer: rootReducer,
});
