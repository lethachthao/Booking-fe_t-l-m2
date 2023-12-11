import { axiosInstance } from '@/lib/http/axios-instance';

export const addAccount = (data) => {
  //data là dữ liệu nhận từ form đăng kí
  return axiosInstance.post('/createUser', data);
};
