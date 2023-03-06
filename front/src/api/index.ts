import axios from "axios";

const baseAPI = (url: string, options: any) => {
  axios.create({baseURL: url, ...options});
}

const authAPI  = (url: string, options: any) => {
  
}