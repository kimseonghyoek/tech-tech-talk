import { combineReducers } from "redux";
import user, { userSaga } from "./modules/user";
import news, { newsSaga } from "./modules/news";
import { all, fork } from "redux-saga/effects";

const rootReducer = combineReducers({
  user,
  // news,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([fork(userSaga)]);
  // yield all([fork(newsSaga)]);
}