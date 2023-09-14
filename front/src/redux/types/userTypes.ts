export type userState = {
  user: Object,
  loginRequest: boolean,
  loginError: boolean,
  loginSuccess: boolean
};

export type userIdData = {
  id: string
};

export type signUpData = {
  email: string,
  pw: string,
  nickname: string,
  name: string,
  phone_num: number
};

export type loginData = {
  email: string,
  pw: string
}

export interface checkUserSignUp {
  code: string;
  message: string;
  payload: any;
};