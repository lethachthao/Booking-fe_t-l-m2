import { Modal } from 'antd';
import UserForm from '../form/add-user';

const EditAccountModal = ({
  isOpen,
  isSubmitting,
  data,
  onSubmit,
  onCancel,
}) => {
  return (
    <Modal
      open={isOpen}
      title="Edit account"
      footer={null}
      onCancel={onCancel}
      destroyOnClose
    >
      <UserForm
        defaultData={data}
        isSubmitting={isSubmitting}
        onSubmit={onSubmit}
      />
    </Modal>
  );
};

export default EditAccountModal;
