import { deleteAccount } from '../_services/account-service';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { App } from 'antd';

const useDeleteAccount = () => {
  const queryClient = useQueryClient();
  const { message } = App.useApp();

  const mutationResults = useMutation({
    mutationFn: (email) => {
      queryClient.invalidateQueries({ queryKey: ['account-type'] });
      return deleteAccount(email);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['account-type'] }); //Sau khi xóa xong thì tìm nạp lại dữ liệu trong nền để cập cập list accout mới nhất
      message.success('Xoa tai khoan thanh cong');
    },
    onError: () => {
      message.error('Xoa nguoi dung khong thanh cong');
    },
  });
  return mutationResults;
};

export default useDeleteAccount;
