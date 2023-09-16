import { Action } from 'redux';
/* interface */
interface signupUserData {
  email: string,
  pw: string,
  nickname: string,
  name: string,
  phone_num: number
};

/* Action Type */
const SIGN_UP_REQUEST = "user/SIGN_UP_REQUEST" as const;

/* Action Create Type */
export const signUp = (data: signupUserData) => ({
  type: SIGN_UP_REQUEST,
  data: data
});

/* Inital state of the module */
const initialState: object = {
  user: []
};

/* reducer */
export default function userReducer(state = initialState, action: Action) {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state
      }
      default:
        return state;
  }
}