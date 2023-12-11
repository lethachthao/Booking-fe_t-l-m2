'use client';

import AddUserForm from '../../_components/form/add-user';
import useAddAccount from '../../_hooks/use-add-account';

const AddAccout = () => {
  const { mutate } = useAddAccount();
  const addUserHanlder = (value) => {
    mutate(value);
  };

  return <AddUserForm onSubmit={addUserHanlder} />;
};

export default AddAccout;
