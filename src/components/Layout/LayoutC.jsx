import { Layout, Menu, Breadcrumb } from 'antd';
import MenuC from '../MenuC/MenuC';

const { Header, Content, Footer, Sider } = Layout;

export default function LayoutC({ children }) {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible >
                <div className="logo" />
                <MenuC />
            </Sider>
            <Layout className="site-layout">
                {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
                <Content style={{ backgroundColor: 'white', margin: '24px 16px 0' }} >
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Sebastían Ramirez</Footer>
            </Layout>
        </Layout>
    )
}
