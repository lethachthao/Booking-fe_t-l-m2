'use client';

import UserForm from '../_components/form/add-user';
import useAddAccount from '../../_hooks/use-add-account';

const AddAccount = () => {
  const { mutate } = useAddAccount();
  const addUserHanlder = (value) => {
    mutate(value);
  };

  return <UserForm onSubmit={addUserHanlder} />;
};

export default AddAccount;
