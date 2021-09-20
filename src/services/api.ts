import axios from 'axios';

const api = axios.create({
  baseURL: 'https://develcode-back.herokuapp.com/',
});

export default api;
