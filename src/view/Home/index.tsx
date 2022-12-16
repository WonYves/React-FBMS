import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Js', '/page1', <PieChartOutlined />),
  getItem('Ts', '/page2', <DesktopOutlined />),
  getItem('框架', 'sub1', <UserOutlined />, [
    getItem('REACT', '3'),
    getItem('VUE', '4'),
    getItem('ANGULAR', '5'),
  ]),
  getItem('数据结构', 'sub2', <TeamOutlined />, [
    getItem('栈', '6'), getItem('队列', '8')
  ]),
  getItem('AJAX', '9', <FileOutlined />),
];

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigateTo = useNavigate()

  const meauClick = (e:{key:string}) => {
    // 点击跳转的路由 编程式导航
    navigateTo(e.key)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
        {/* 侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" defaultSelectedKeys={['/page1']} mode="inline" items={items} onClick={meauClick} />
      </Sider>
        {/* 右边内容 */}
      <Layout className="site-layout">
        {/* 右边头部 */}
        <Header style={{ padding: 0, background: colorBgContainer }} />
        {/* 右边内容 */}
        <Content style={{ margin: '0 16px' }}>
            {/* 面包屑 */}
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            <Outlet />
          </div>
        </Content>
        {/* 右边底部 */}
        <Footer style={{ textAlign: 'center' }}>React-Ts 通用后台管理系统</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;