import axios from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_INDEX_ROUTE_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthInterceptor = (token, axiosInstance) => {
  axiosInstance.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};
