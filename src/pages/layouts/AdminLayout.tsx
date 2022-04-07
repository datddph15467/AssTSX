import React from 'react'
import { Link, Outlet } from 'react-router-dom';

import { Input, Space } from 'antd';
import { Image } from 'antd';
const { Search } = Input;
// const onSearch = value => console.log(value);
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  HomeOutlined ,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

}
type Props = {}
const AdminLayout = (props: Props) => {
  return (
    <Layout style={{ minHeight: '100vh' }} >
    <Sider collapsible >
    <Image className='logo'
      width={200}
      src="https://res.cloudinary.com/assignment22/image/upload/v1649129955/Ass-reactjs/logo_uy0yrn.png"
    />
      <Menu theme="light"  defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to={"/admin"}>Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to={"/admin/products"}>Producst</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<DesktopOutlined />}>
          <Link to={"/admin/categorys"}>Category</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout">
      {/* <Header className="site-layout-background " style={{ padding: 0 }} /> */}
      <Content style={{ margin: '0 16px' }}>
        <div className="site-layout-background bg-white" style={{ padding: 24, minHeight: 360 }}>
          <Outlet/>
        </div>
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>
  </Layout>
  )
}

export default AdminLayout