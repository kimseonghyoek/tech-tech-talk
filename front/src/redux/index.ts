import { combineReducers } from "redux";
import userReducer, { watchSignupUser } from "./modules/user";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  userReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
export function* rootSaga() {
  yield all([watchSignupUser]);
}