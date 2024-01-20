import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAccount } from '../_services/account-service';
import { App } from 'antd';

const useDeleteAccount = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutationResults = useMutation({
    mutationFn: (email) => {
      return deleteAccount(email);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['account-type'] });
      message.success('Xóa tài khoản thành công');
    },
    onError: () => {
      message.error('Xóa tài khoản thất bại');
    },
  });
  return mutationResults;
};

export default useDeleteAccount;
