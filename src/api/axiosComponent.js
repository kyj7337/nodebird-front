import axiosModule from 'axios';

const API_SERVER_URL = `http://localhost:2900`;

const axios = axiosModule.create({
  baseURL: API_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export { axios };
