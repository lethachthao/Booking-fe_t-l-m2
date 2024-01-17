'use client';

import React, { useMemo, useState } from 'react';
import { Button, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import RenderResult from 'next/dist/server/render-result';
import useDeleteAccount from '@/app/admin/_hooks/use-delete-account';
import useEditAccount from '@/app/admin/_hooks/use-edit-account';
import { useToggle } from '@/hooks/use-toggle';
import EditAccountModal from '../modal/edit-account';

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
    // {
    //   title: 'Age',
    //   dataIndex: 'age',
    //   key: 'age',
    // },
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
      render: (text, record, index) => {
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
    return data.map((account) => ({
      name: account.name, //name: dataIndex
      // age: 10,
      phoneNumber: account.phoneNumber,
      email: account.email,
      address: account.address,
    }));
  }, [data]);

  const editData = useMemo(() => {
    return data.find((account) => account.email === editId);
  }, [data, editId]);

  function deleteAccount(email) {
    return () => {
      mutateDeleteAccount(email);
    };
  }

  function editAccount(data) {
    mutateEditAccount(data, {
      onSuccess: () => {
        //hàm onSuccess khi ấn submit modal sẽ đóng
        setEditId('');
      },
    });
  }
  console.log(editData);
  return (
    <>
      <Table pagination={false} columns={columns} dataSource={normalData} />;
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
