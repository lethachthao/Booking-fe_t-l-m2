'use client';

import useAccountType from '../../_hooks/use-account-type';
import UserList from '../_components/user-list';
import { Typography } from 'antd';

const { Title } = Typography;

const Doctor = () => {
  const { isPending, isLoading, data } = useAccountType('doctor');

  if (isPending || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Title level={2}>Quản lí bac si</Title>

      <UserList data={data.data} />
    </div>
  );
};

export default Doctor;
