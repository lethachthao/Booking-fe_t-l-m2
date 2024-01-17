import { useMutation, useQueryClient } from '@tanstack/react-query';
import { App } from 'antd';
import { deteleAccount } from '../_services/account-service';

const useDeleteAccount = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();

  const mutationResult = useMutation({
    mutationFn: (email) => {
      return deteleAccount(email);
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['account-type'] });
      message.success('Xóa tài khoản thành công');
    },
    onError: () => {
      message.error('Xóa tài khoản không thành công ');
    },
  });
  return mutationResult;
};

export default useDeleteAccount;
