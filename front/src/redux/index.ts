import { combineReducers } from "redux";
import user, { userSaga } from "./modules/user";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  user
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([userSaga]);
}