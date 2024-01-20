import { Button, Checkbox, Form, Input, Radio, Spin } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const initialData = {
  name: '',
  email: '',
  phoneNumber: '',
  address: '',
  accountType: '',
  password: '',
  role: '',
};

const UserForm = ({ isSubmitting = false, defaultData, onSubmit }) => {
  const { name, phoneNumber, address, accountType, role, email, password } =
    defaultData || initialData;
  const [form] = Form.useForm();
  const onFinish = (values) => {
    onSubmit?.({ ...defaultData, ...values });
    form.resetFields(); //khi ấn tạo tài khoản xóa bỏ dữ liệu ở input
  };

  return (
    <div className="flex flex-col rounded-xl gap-4 bg-white p-8">
      <Spin spinning={isSubmitting}>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{
            name: name || '',
            phoneNumber: phoneNumber || '',
            address: address || '',
            accountType: accountType || '',
            role: role || '',
            email: email || '',
            password: password || '',
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="User name"
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
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="User name"
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              {!defaultData ? 'Tạo tài khoản' : 'Cập nhật tài khoản'}
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
};

export default UserForm;
