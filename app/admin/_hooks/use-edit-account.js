import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { editAccount } from '../_services/account-service';
import { App } from 'antd';

const useEditAccount = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();

  const mutationResult = useMutation({
    mutationFn: (data) => {
      return editAccount(data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['account-type'] });
      message.success('Edit tài khoản thành công');
    },
    onError: () => {
      message.error('edit tài khoản thất bại');
    },
  });
  return mutationResult;
};
export default useEditAccount;
