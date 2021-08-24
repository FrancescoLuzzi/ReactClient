import axios from 'axios';

const baseURL= 'http://luzzipi.luzzidomain/scontriniDB/api/';

const AxiosIstance=axios.create({
    baseURL: baseURL
  });

export default AxiosIstance;