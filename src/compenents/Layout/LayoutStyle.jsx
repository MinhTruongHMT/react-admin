import {
  MenuFoldOutlined,
  TagOutlined,
  UserOutlined,
  HomeOutlined,
  CrownOutlined,
  ShopOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';

import { Button, Layout, Menu, theme, Space } from 'antd';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
const { Header, Sider, Content } = Layout;
const LayoutStyle = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} >
          <div className="demo-logo-vertical" />
          <Menu style={{ height: '100vh' }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <HomeOutlined />,
                label: <NavLink to="/" style={({ isActive }) => ({
                  color: isActive ? 'white' : 'white'
                })}>
                  Home
                </NavLink>,
              },
              {
                key: '2',
                icon: <UserOutlined />,
                label: <NavLink to="/user" style={({ isActive }) => ({
                  color: isActive ? 'white' : 'white'
                })}>
                  User
                </NavLink>,
              },
              {
                key: '3',
                icon: <CrownOutlined />,
                label: <NavLink to="/user" style={({ isActive }) => ({
                  color: isActive ? 'white' : 'white'
                })}>
                  Customers
                </NavLink>,
              },
              {
                key: '4',
                icon: <ShopOutlined />,
                label: <NavLink to="/user" style={({ isActive }) => ({
                  color: isActive ? 'white' : 'white'
                })}>
                  Product
                </NavLink>,
              },
              {
                key: '5',
                icon: <ShoppingCartOutlined />,
                label: <NavLink to="/user" style={({ isActive }) => ({
                  color: isActive ? 'white' : 'white'
                })}>
                  Orders
                </NavLink> ,
              },
              {
                key: '6',
                icon: <TagOutlined />,
                label: <NavLink to="/user" style={({ isActive }) => ({
                  color: isActive ? 'white' : 'white'
                })}>
                  Coupon
                </NavLink>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuFoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Space>
  );
};
export default LayoutStyle;