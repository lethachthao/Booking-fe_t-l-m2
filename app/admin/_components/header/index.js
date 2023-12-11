import { Avatar } from 'antd';
import Dropdown from 'antd/es/dropdown/dropdown';

const HeaderAdmin = () => {
  const items = [
    {
      label: 'Đăng xuất',
      key: '1',
      danger: true,
    },
  ];
  return (
    <div className="flex justify-between items-center px-6">
      <div style={{ color: 'white' }}>
        Hôm nay là {new Date().toLocaleDateString()}
      </div>
      <div className="flex items-center gap-3">
        <Dropdown
          menu={{
            items,
          }}
          trigger={['click']}
        >
          <Avatar
            size="default"
            src="https://i.pinimg.com/564x/0f/b9/f0/0fb9f0d29a9b43866cf7c2cc12b3fd3f.jpg"
          >
            Admin
          </Avatar>
        </Dropdown>
        <span style={{ color: 'white' }}>Xin chào Admin</span>
      </div>
    </div>
  );
};

export default HeaderAdmin;
