import { Modal } from 'antd';
import MedicalSpecialtyForm from '../form/medical-specialty-form';

const MedicalSpecialtyModal = ({ isOpen, onSubmit, onCancel }) => {
  return (
    <Modal
      open={isOpen}
      onCancel={onCancel}
      title="Tạo chuyên khoa"
      footer={null}
      centered
    >
      <MedicalSpecialtyForm onSubmit={onSubmit} />
    </Modal>
  );
};

export default MedicalSpecialtyModal;
