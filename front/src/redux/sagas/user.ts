import axios from "axios";
import {
  checkUserSignUp,
  loginData,
  signUpData,
  userIdData,
} from "../types/userTypes";
import { Action } from "redux";

function signUpAPI(data: signUpData) {
  return axios.post<checkUserSignUp>("/signup", data);
}

function* signUp(action: Action) {
  try {
  } catch (err) {
    console.error(err);
  }
}

function loginAPI(data: loginData) {
  return axios.post("/login", data);
}

function* login(action: Action) {
  try {
  } catch (err) {
    console.error(err);
  }
}

function changeUserInfoAPI(data: userIdData) {
  return axios.patch(`user_id/nickname`, data);
}

function* changeUSerInfo(action: Action) {
  try {
  } catch (err) {
    console.error(err);
  }
}

function deleteUserAPI(data: any) {
  return axios.delete(`usaer_id`, data);
}

function* deleteUser(action: Action) {
  try {
  } catch (err) {
    console.error(err);
  }
}

function getUserAPI(data: any) {
  return axios.get(`user_id`, data);
}
