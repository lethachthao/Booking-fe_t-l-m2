import { useMutation, useQuery } from '@tanstack/react-query';
import { App } from 'antd';
import { getAccountByType } from '../_services/account-service';

const useAccountType = (type) => {
  return useQuery({
    queryKey: ['account-type'],
    queryFn: () => {
      return getAccountByType(type);
    },
  }); //https://tanstack.com/query/latest/docs/react/reference/useQuery
};
export default useAccountType;
