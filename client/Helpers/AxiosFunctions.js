import Axios from "axios";
import * as JwtToken from "./JwtToken";

let access_token = JwtToken.getToken();
let headers = {};
if (!!access_token) {
  headers["x-access-token"] = access_token;
}

// axios delete method

export default {
  deleteFunction: url => {
    return Axios.delete(url, {
      headers: headers
    });
  },
  getFunction: (url, params) => {
    return Axios.get(url, {
      headers: headers,
      params: params
    });
  },
  postFunction: (url, data, params) => {
    return Axios.post(url, data, {
      headers: headers,
      params: params
    });
  },
  uploadFunction: (url, formData) => {
    headers["content-type"] = "multipart/form-data";
    return Axios.post(url, formData, {
      headers: headers
    });
  }
};
