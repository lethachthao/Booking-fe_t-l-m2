'use client';

import AddUserForm from '../_components/form/add-user';
import useAddAccont from '../../_hooks/use-add-account';
import { useState } from 'react';

const AddAccount = () => {
  const [addData, setAddData] = useState('');
  const { mutate } = useAddAccont();
  const addUserHanlder = (value) => {
    mutate(value);
    setAddData('');
  };

  return <AddUserForm onSubmit={addUserHanlder} />;
};

export default AddAccount;
