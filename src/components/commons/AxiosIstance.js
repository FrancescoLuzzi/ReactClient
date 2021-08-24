import axios from 'axios';

const baseURL='http://192.168.1.142:8000/api/';
//const baseURL: 'http://192.168.43.14:8000/api/'

const AxiosIstance=axios.create({
    baseURL: baseURL
  });

export default AxiosIstance;