import { combineReducers } from "redux";
import userReducer from "./modules/user";

const rootReducer = combineReducers({
  userReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;