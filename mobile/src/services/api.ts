import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.99.111:3333'
});

export default api;