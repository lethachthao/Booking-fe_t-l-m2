'use client';

import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Checkbox, Form, Input, Radio } from 'antd';
const AddUserForm = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const nameValue = Form.useWatch('name', form);

  const onFinish = (values) => {
    onSubmit?.(values);
  };
  return (
    <div className="flex flex-col rounded-xl gap-4 bg-white p-8">
      <Form
        name="signup_form "
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <div className="flex flex-col items-center text-center gap-2">
          <Avatar size={80} icon={<UserOutlined />} />
          <span className="font-bold text-lg"> {nameValue || ''}</span>
        </div>

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
          name="accout_Type"
          label="Vai trò"
          rules={[
            {
              required: true,
              message: 'Please input Accout Type !',
            },
          ]}
        >
          <Radio.Group>
            <Radio value="Patient">Bệnh nhân</Radio>
            <Radio value="doctor">Bác sĩ</Radio>
            <Radio value="admin">Admin</Radio>
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
          <Button
            type="primary"
            htmlType="submit"
            block
            // style={{ background: 'rgb(22,119,255)' }}
          >
            Tạo tài khoản
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddUserForm;
