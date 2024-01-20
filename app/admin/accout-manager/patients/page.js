'use client';
import useAccountType from '../../_hooks/use-get-account-Type';
import UserList from '../_components/user-list';
import { Typography } from 'antd';
const { Title } = Typography;
const Patient = () => {
  const { isPending, isLoading, data } = useAccountType('user');
  if (isPending || isLoading) {
    <div>Loading...</div>;
  }
  return (
    <div>
      <Title level={2}>Quản lí Bệnh nhân</Title>
      <UserList data={data && data.data} />
    </div>
  );
};
export default Patient;
