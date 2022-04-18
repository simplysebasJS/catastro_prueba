import { Layout, Menu, Typography } from 'antd'
import Link from 'next/link';
import { useState } from 'react';

const { Header } = Layout;
const { Title } = Typography;

export default function AppLayout() {

  return (
    <Layout>
      <Header>
        <Menu theme='dark' mode="horizontal">
          <Menu.Item key="1"><Link href='/'>Inicio</Link></Menu.Item>
          <Menu.Item key="2"><Link href='/propietarios'>Propietarios</Link></Menu.Item>
          <Menu.Item key="3"><Link href='/construcciones'>Construcciones</Link></Menu.Item>
          <Menu.Item key="4"><Link href='/terrenos'>Terrenos</Link></Menu.Item>
          <Menu.Item key="5"><Link href='/predios'>Predios</Link></Menu.Item>
        </Menu>
      </Header>
    </Layout>
  )
}