import { axiosInstance } from '@/lib/http/axios-instance';

export const addAccount = (data) => {
  //data là dữ liệu nhận từ form đăng kí
  return axiosInstance.post('/user/createUser', data);
};

export const getAccountType = (type) => {
  return axiosInstance.get(`/user/${type}`);
};

export const deleteAccount = (email) => {
  return axiosInstance.delete('/user', { params: { email } });
};

export const editAccount = (data) => {
  return axiosInstance.put(`/user`, data);
};
