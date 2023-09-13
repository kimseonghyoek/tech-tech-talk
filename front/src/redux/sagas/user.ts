import axios from "axios";

function signUpAPI(data: any) {
  return axios.post("/signup", data);
};

function loginAPI(data: any) {
  return axios.post("/login", data);
};

function changeUserInfoAPI(data: any) {
  return axios.patch(`user_id/nickname`, data);
};

function deleteUserAPI(data: any) {
  return axios.delete(`usaer_id`, data);
};

function getUserAPI(data: any) {
  return axios.get(`user_id`, data);
};
