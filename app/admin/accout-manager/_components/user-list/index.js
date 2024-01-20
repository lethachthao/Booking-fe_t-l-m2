import { Button, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import React, { useMemo, useState } from 'react';
import useDeleteAccount from '@/app/admin/_hooks/use-delete-account';
import useEditAccount from '@/app/admin/_hooks/use-edit-account';
import EditAccountModal from '../modal/edit-account-modal';
const UserList = ({ data }) => {
  const { mutate: mutateDeleteAccount } = useDeleteAccount();
  const { isPending: isSubmitting, mutate: mutateEditAccount } =
    useEditAccount();
  const [editId, setEditId] = useState('');

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phonenumber',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (record) => {
        return (
          <div className="flex items-center gap-2">
            <Button
              type="primary"
              size="small"
              danger
              icon={<DeleteOutlined />}
              onClick={deleteAccount(record.email)}
            >
              Delete
            </Button>
            <Button
              type="primary"
              size="small"
              icon={<EditOutlined />}
              onClick={() => setEditId(record.email)}
            >
              Update
            </Button>
          </div>
        );
      },
    },
  ];

  const normalData = useMemo(() => {
    return data?.map((account) => ({
      name: account.name, //name: dataIndex
      // age: 10,
      phoneNumber: account.phoneNumber,
      email: account.email,
      address: account.address,
    }));
  }, [data]);
  const editData = useMemo(() => {
    return data?.find((account) => account.email === editId);
  }, [data, editId]);

  function deleteAccount(email) {
    return () => {
      mutateDeleteAccount(email);
    };
  }

  function editAccount(data) {
    mutateEditAccount(data, {
      onSuccess: () => {
        setEditId('');
      },
    });
  }

  return (
    <>
      <Table pagination={false} columns={columns} dataSource={normalData} />
      <EditAccountModal
        isOpen={Boolean(editId)}
        isSubmitting={isSubmitting}
        data={editData}
        onSubmit={editAccount}
        onCancel={() => setEditId('')}
      />
    </>
  );
};
export default UserList;
