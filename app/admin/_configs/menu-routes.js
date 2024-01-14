import Link from 'next/link';
import {
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const MenuRoutes = [
  //Quản lí tài khoản
  {
    key: 'accout-manager',
    icon: <UserOutlined />,
    label: <Link href="/admin/accout-manager">Quản lí tài khoản</Link>,
    children: [
      {
        key: 'add-accout',
        label: (
          <Link href="/admin/accout-manager/add-accout">thêm tài khoản</Link>
        ),
      },
      {
        key: 'patient',
        label: (
          <Link href="/admin/accout-manager/patients">Quản lí bệnh nhân</Link>
        ),
      },
      {
        key: 'doctor',
        label: <Link href="/admin/accout-manager/doctors">Quản lí bác sĩ</Link>,
      },
    ],
  },
  //Quản lí chuyên khoa
  {
    key: 'medical-specialty-manager',
    icon: <UserOutlined />,
    label: (
      <Link href="/admin/medical-specialty-manager">Quản lí chuyên khoa</Link>
    ),
  },
  //Quản lí Lịch trình
  {
    key: 'scheduling-manager',
    icon: <TeamOutlined />,
    label: <Link href="/admin/scheduling-manager">Quản lí lịch trình</Link>,
  },

  {
    key: 'medical-examination-history',
    icon: <FileOutlined />,
    label: (
      <Link href="/admin/medical-examination-history">
        Quản lí lịch sử khám bệnh
      </Link>
    ),
  },
];
