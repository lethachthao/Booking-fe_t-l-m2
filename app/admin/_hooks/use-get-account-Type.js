import { useQuery } from '@tanstack/react-query';
import { getAccountByType } from '../_services/account-service';

const useAccountType = (type) => {
  return useQuery({
    queryKey: ['account-type'],
    queryFn: () => {
      return getAccountByType(type);
    },
  });
};
export default useAccountType;
