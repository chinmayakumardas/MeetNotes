import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // JSON Server URL
  timeout: 5000,
});

export default axiosInstance;
