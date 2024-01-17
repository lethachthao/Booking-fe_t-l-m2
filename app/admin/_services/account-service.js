import { axiosInstance } from '@/lib/http/axios-instance';

export const addAccount = (data) => {
  return axiosInstance.post('/user/createUser', data);
};

export const getAccountByType = (type) => {
  return axiosInstance.get(`/user/${type}`, type);
};

export const deteleAccount = (email) => {
  return axiosInstance.delete('/user/deleteUser', { params: { email } });
};

export const editAccount = (data) => {
  return axiosInstance.put('/user', data);
};
