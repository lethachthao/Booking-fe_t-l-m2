import { useMutation } from '@tanstack/react-query';

import { App } from 'antd';
import { addAccount } from '../_services/account-service';

//custom hook để sử lí việc add user , hook nay gửi data user sang backend.
const useAddAccount = () => {
  const { message } = App.useApp();
  const mutationResults = useMutation({
    mutationFn: (data) => {
      //đặt axios trong đây để fetch data, data đó sẽ do useMutation sử dụng
      return addAccount(data);
    },
    onSuccess: () => {
      //Nếu add account thành công thì, hàm onSuccess sẽ được gọi, ở đây chúng ta show thông báo lên UI cho người dùng biết
      message.success('Tạo tài khoản thành công');
    },
    onError: () => {
      //Ngược lại với onSuccess
      message.error('Tạo tài khoản thất bại');
    },
  });
  return mutationResults;
};

export default useAddAccount;
