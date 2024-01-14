import { Button, Form, Input, Radio, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useUploadManual } from '../../_hooks/use-upload-manual';

const MedicalSpecialtyForm = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const { getUPloadProps } = useUploadManual({ maxCount: 1 });

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <Form
      name="medical_specialty"
      form={form}
      layout="vertical"
      onFinish={onSubmit}
    >
      <Form.Item name="id" hidden noStyle>
        <Input placeholder="Id " readOnly />
      </Form.Item>
      <Form.Item
        name="name"
        label="Tên chuyên khoa"
        rules={[
          {
            required: true,
            message: 'Vui lòng điền tên chuyên khoa!',
          },
        ]}
      >
        <Input placeholder="Tên chuyên khoa" />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập mô tả chuyên khoa',
          },
        ]}
      >
        <Input.TextArea placeholder="Mô tả chuyên khoa" />
      </Form.Item>
      <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Chọn ảnh chuyên khoa"
      >
        <Upload {...getUPloadProps}>
          <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Tạo chuyên khoa
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MedicalSpecialtyForm;
