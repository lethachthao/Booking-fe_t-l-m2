import { App } from 'antd';
import { editAccount } from '../_services/account-service';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useEditAccount = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutationResults = useMutation({
    mutationFn: (data) => {
      return editAccount(data);
    },
    onSuccess: () => {
      message.success('Edit tài khoản thành công ');
      queryClient.invalidateQueries({ queryKey: ['accout-type'] });
    },
    onError: () => {
      message.error('Edit tài khoản thất bại');
    },
  });
  return mutationResults;
};

export default useEditAccount;
