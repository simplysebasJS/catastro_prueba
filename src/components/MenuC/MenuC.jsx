import {  Menu } from 'antd';
import {
    PieChartOutlined,
} from '@ant-design/icons';
import Link from 'next/link';


export default function MenuC() {
    return (
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link href='/'>Inicio</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<PieChartOutlined />}>
                <Link href='/propietarios'>Propietarios</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<PieChartOutlined />}>
                <Link href='/construcciones'>Construcciones</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<PieChartOutlined />} >
                <Link href='/terrenos'>Terrenos</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<PieChartOutlined />}>
                <Link href='/predios'>Predios</Link>
            </Menu.Item>
        </Menu>
    )
}
