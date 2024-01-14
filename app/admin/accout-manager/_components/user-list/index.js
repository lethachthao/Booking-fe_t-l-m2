'use client';

import React, { useMemo, useState } from 'react';
import { Button, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import useDeleteAccount from '../../../_hooks/use-delete-account';
import useEditAccount from '../../../_hooks/use-edit-account';
import EditAccountModal from '../_modal/edit-account';

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
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
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
        console.log(text, record, index);
        return (
          <div className="flex items-center gap-2">
            <Button
              type="primary"
              danger
              size="small"
              icon={<DeleteOutlined />}
              onClick={deleteAccount(record.email)}
            >
              Xóa
            </Button>
            <Button
              type="primary"
              size="small"
              style={{ background: 'blue' }}
              icon={<EditOutlined />}
              onClick={() => setEditId(record.email)}
            >
              Sửa
            </Button>
          </div>
        );
      },
    },
  ];

  // sao em Cái phần quản lí bác sĩ này khi em chạy nó cứ báo lỗi ở chỗ data.map
  const normalData = useMemo(() => {
    return data.map((account) => ({
      name: account.name,
      email: account.email,
      address: account.address,
      phoneNumber: account.phoneNumber,
      age: account.age,
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
    mutateEditAccount(data);
  }

  return (
    <>
      <Table pagination={false} columns={columns} dataSource={normalData} />
      <EditAccountModal
        isOpen={Boolean(editId)}
        data={editData}
        isSubmitting={isSubmitting}
        onSubmit={editAccount}
        onCancel={() => setEditId('')}
      />
    </>
  );
};
export default UserList;
