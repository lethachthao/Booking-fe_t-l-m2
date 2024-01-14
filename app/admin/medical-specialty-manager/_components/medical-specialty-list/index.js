'use client';

import React from 'react';
import { Button, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import Avatar from 'antd/es/avatar/avatar';
const columns = [
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar',
    render: (text) => <Avatar src={text} size="default" shape="circle" />,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
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
            // onClick={deleteAccount(record.email)}
          >
            Xóa
          </Button>
          <Button
            type="primary"
            size="small"
            style={{ background: 'blue' }}
            icon={<EditOutlined />}
            // onClick={() => setEditId(record.email)}
          >
            Sửa
          </Button>
        </div>
      );
    },
  },
];
const data = [
  {
    key: 1,
    avarta:
      'https://i.pinimg.com/564x/0f/b9/f0/0fb9f0d29a9b43866cf7c2cc12b3fd3f.jpg',
    name: 'John Brown',

    description:
      'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    avarta:
      'https://i.pinimg.com/564x/0f/b9/f0/0fb9f0d29a9b43866cf7c2cc12b3fd3f.jpg',
    name: 'Jim Green',

    description:
      'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    avarta:
      'https://i.pinimg.com/564x/0f/b9/f0/0fb9f0d29a9b43866cf7c2cc12b3fd3f.jpg',
    name: 'Not Expandable',

    description: 'This not expandable',
  },
];
const MedicalSpecialtyList = () => (
  <Table columns={columns} dataSource={data} pagination={false} />
);
export default MedicalSpecialtyList;
