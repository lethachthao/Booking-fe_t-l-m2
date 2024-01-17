import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editAccount } from '../_services/account-service';
import { App, message } from 'antd';

const useEditAccount = () => {
  const { message } = App.useApp();
  const quertClient = useQueryClient();

  const mutationResults = useMutation({
    mutationFn: (data) => {
      return editAccount(data);
    },
    onSuccess: () => {
      message.success('Edit thành công');
      quertClient.invalidateQueries({ queryKey: ['account-type'] });
    },
    onError: () => {
      message.error('edit thất bại');
    },
  });
  return mutationResults;
};

export default useEditAccount;
