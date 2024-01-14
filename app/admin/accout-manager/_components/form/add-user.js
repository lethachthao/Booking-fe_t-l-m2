'use client';

import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Checkbox, Form, Input, Radio, Spin } from 'antd';

const initialData = {
  name: '',
  email: '',
  phoneNumber: '',
  address: '',
  accountType: '',
  password: '',
  role: '',
};

const UserForm = ({
  isSubmitting = false,
  defaultData = initialData,
  onSubmit,
}) => {
  const { name, email, phoneNumber, address, password, accountType, role } =
    defaultData;
  const [form] = Form.useForm();
  const nameValue = Form.useWatch('name', form);

  console.log(defaultData);

  const onFinish = (values) => {
    onSubmit?.({ ...defaultData, ...values });
  };
  return (
    <div className="flex flex-col rounded-xl gap-4 bg-white p-8">
      <Spin spinning={isSubmitting}>
        <Form
          name="signup_form "
          form={form}
          layout="vertical"
          initialValues={{
            name: name || '',
            email: email || '',
            phoneNumber: phoneNumber || '',
            address: address || '',
            accountType: accountType || '',
            role: role || '',
            password: password || '',
          }}
          onFinish={onFinish}
        >
          <div className="flex flex-col items-center text-center gap-2">
            <Avatar size={80} icon={<UserOutlined />} />
            <span className="font-bold text-lg"> {nameValue || ''}</span>
          </div>
          <Form.Item name="id" hidden noStyle>
            <Input placeholder="Id " readOnly />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please input Name!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Name"
            />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: 'Please input Phone Number!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Phone Number"
            />
          </Form.Item>

          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
                message: 'Please input Address!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Address"
            />
          </Form.Item>

          <Form.Item
            name="accountType"
            label="accountType"
            rules={[
              {
                required: true,
                message: 'Please input Account Type!',
              },
            ]}
          >
            <Radio.Group>
              <Radio value="user">Bệnh nhân</Radio>
              <Radio value="doctor">Bác sĩ</Radio>
              <Radio value="admin">Quản trị viên</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="role"
            label="role"
            rules={[
              {
                required: true,
                message: 'Please select role!',
              },
            ]}
          >
            <Radio.Group>
              <Radio value="user">Bệnh nhân</Radio>
              <Radio value="doctor">Bác sĩ</Radio>
              <Radio value="admin">Quản trị viên</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: 'Please input Email!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {!defaultData ? 'Tạo tài khoản' : 'cập nhật tài khoản'}
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
};
export default UserForm;
