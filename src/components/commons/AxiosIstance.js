import axios from 'axios';

const baseURL= 'http://luzzipi.luzzidomain/scontriniDB/api/';

export const AxiosIstance=axios.create({
    baseURL: baseURL
  });
