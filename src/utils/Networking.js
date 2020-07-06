import axios from 'axios';
import * as Constants from './Constants';

//Common req-res model

const axiosBase = axios.create({
  
  baseURL: Constants.BASE_URL,
  headers: Constants.API_HEADER,  //standart header
});

export const get = (url, params) => {
  return axiosBase.get(url, {
    params,
  });
};

export const post = (url, params) => {
  return axiosBase.post(url, qs.stringify(params)); //qs -> jsonConvert
};
