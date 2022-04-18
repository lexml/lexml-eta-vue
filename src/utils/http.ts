import Axios from "axios";

export const http = Axios.create({
  baseURL: process.env.VUE_APP_BASE_URL_API,
});
