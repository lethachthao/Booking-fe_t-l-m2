import { useMutation } from '@tanstack/react-query';
import { addAccount } from '../_services/account-service';
import { App } from 'antd';

const useAddAccount = () => {
  const { message } = App.useApp();
  const mutationResults = useMutation({
    mutationFn: (data) => {
      return addAccount(data);
    },
    onSuccess: () => {
      message.success('Tạo tài khoản thành công');
    },
    onError: () => {
      message.error('Tạo tài khoản thất bại');
    },
  });
  return mutationResults;
};
export default useAddAccount;
