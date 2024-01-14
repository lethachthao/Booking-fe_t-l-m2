'use client';

import { Button } from 'antd';
import MedicalSpecialtyList from './_components/medical-specialty-list';
import { FileAddOutlined } from '@ant-design/icons';
import { useToggle } from '@/hooks/use-toggle';
import MedicalSpecialtyModal from './_components/modal/medical-specialty';

const MedicalSpecialty = () => {
  const {
    toggleState,
    on: openMedicalSpecialtyModal,
    off: cancleMedicalSpecialtyModal,
  } = useToggle(false);
  const addMedicalSpecialtyHandler = () => {};

  return (
    <div>
      <div className="mb-8">
        <Button
          type="primary"
          icon={<FileAddOutlined />}
          onClick={openMedicalSpecialtyModal}
        >
          Thêm chuyên khoa
        </Button>
      </div>
      <MedicalSpecialtyList />

      <MedicalSpecialtyModal
        isOpen={toggleState}
        defaultValue={{}}
        onSubmit={console.log}
        onCancel={cancleMedicalSpecialtyModal}
      />
    </div>
  );
};
export default MedicalSpecialty;
