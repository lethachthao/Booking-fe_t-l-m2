import { Modal } from 'antd';
import UserForm from '../form/form-user';

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
      title="Edit Account"
      footer={null}
      onCancel={onCancel}
      destroyOnClose
    >
      <UserForm
        defaultData={data}
        isSubmitting={isSubmitting}
        onSubmit={onSubmit}
        destroyOnClose
      />
    </Modal>
  );
};
export default EditAccountModal;
