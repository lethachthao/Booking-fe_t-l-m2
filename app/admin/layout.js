'use client';
import React, { useState } from 'react';

import { Breadcrumb, Image, Layout, Menu, theme } from 'antd';
import HeaderAdmin from './_components/header';

import { MenuRoutes } from './_configs/menu-routes';
const { Header, Content, Footer, Sider } = Layout;

// const items = [
//   getItem('Quản lí User', 'account-manager', <UserOutlined />, [
//     getItem('Tạo tài khoản', '1', <BsPersonFillAdd />),
//     getItem('Quản lí bệnh nhân', '2', <FaUsers />),
//     getItem('Quản lí bác sĩ', '3', <FaUserDoctor />),
//   ]),
//   getItem(
//     'Quản lí chuyên khoa',
//     'medical-specialty-manager',
//     <FaClinicMedical />,
//   ),
//   getItem('Quản lí thời gian khám bệnh', 'scheduling-manager', <IoTime />),
//   getItem('Lịch sử khám bệnh', 'medical-examination-history', <FaHistory />),
// ];

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      className="min-h-screen"
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          className="py-[45px]"
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={MenuRoutes}
        />
      </Sider>
      <Layout>
        <Header className="p-0 bg-white">
          <HeaderAdmin />
        </Header>
        <Content className="my-[16px] container mx-auto max-w-5xl">
          {children}
        </Content>
        <Footer className="text-center">
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
