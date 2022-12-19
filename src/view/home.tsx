import React, { useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet} from 'react-router-dom'
import MainMenu from '../components/MainMenu'
const { Header, Content, Footer, Sider } = Layout;


const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {token: { colorBgContainer },} = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
        {/* 侧边栏 */}
      <Sider 
      collapsible
      collapsed={collapsed} 
      onCollapse={(value) => setCollapsed(value)}
      >
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        {/* 导航菜单 */}
        <MainMenu/>
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