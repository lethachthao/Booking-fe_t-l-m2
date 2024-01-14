import axios from 'axios';

//https://axios-http.com/docs/instance Đường dẫn đến doc
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30000, //Cho phap request gửi đi tối đa 30s, nếu vượt qua 30s sẽ trả về lỗi
  headers: { content_Type: 'application/json' },
});

//https://axios-http.com/docs/interceptors Đường dẫn đến doc

// Add a request interceptor, Tất cả các requset sẽ đi qua cái interceptors này trước khi gửi đi
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor, Tất cả các response sẽ đi qua cái interceptors này trước khi trả về
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export { axiosInstance };
