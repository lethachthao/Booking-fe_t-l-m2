'use client';
import useAccountType from '../../_hooks/use-get-account-Type';
import UserList from '../_components/user-list';
import { Typography } from 'antd';
const { Title } = Typography;

const Doctor = () => {
  const { isPending, isLoading, data } = useAccountType('doctor');

  if (isPending || isLoading) {
    <div>Loading....</div>;
  }

  return (
    <div>
      <Title level={2}>Quản lí bác sĩ</Title>

      <UserList data={data && data?.data} />
    </div>
  );
};
export default Doctor;
