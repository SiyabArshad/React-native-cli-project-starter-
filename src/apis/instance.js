import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com', // Your API base URL
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    // Add any common headers here
    // config.headers['Authorization'] = 'Bearer ' + authToken;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common error cases here
    // For example, redirect to login page on unauthorized access
    // if (error.response.status === 401) {
    //   navigate('Login');
    // }

    return Promise.reject(error);
  }
);

export default instance;
