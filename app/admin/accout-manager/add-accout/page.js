'use client';

import useAddAccount from '../../_hooks/use-add-account';
import UserForm from '../_components/form/form-user';

const AddAccount = () => {
  const { mutate } = useAddAccount();
  const addAccountHanlder = (value) => {
    mutate(value);
  };
  return (
    <>
      <UserForm onSubmit={addAccountHanlder} />
    </>
  );
};

export default AddAccount;
