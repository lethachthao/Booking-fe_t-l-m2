import { Modal } from 'antd';
import AddUserForm from '../form/add-user';

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
      <AddUserForm
        defaultData={data}
        isSubmitting={isSubmitting}
        onSubmit={onSubmit}
        destroyOnClose
      />
    </Modal>
  );
};
export default EditAccountModal;
