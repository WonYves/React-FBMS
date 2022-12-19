import React, { useEffect, useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, theme } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom'

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
    getItem('框架', '/page3', <UserOutlined />, [
        getItem('REACT', '/page3/page301'),
        getItem('VUE', '4'),
        getItem('ANGULAR', '5'),
    ]),
    getItem('数据结构', '/page4', <TeamOutlined />, [
        getItem('栈', '6'),
        getItem('队列', '8')
    ]),
    getItem('AJAX', '9', <FileOutlined />),
];

const rootSubmenuKeys = ['page3', 'page4'];


const MainMenu: React.FC = () => {
    const currentRoute = useLocation()   // 获取当前路径
    const navigateTo = useNavigate()
    const meauClick = (e: { key: string }) => {
        // 点击跳转的路由 编程式导航  利用hook
        navigateTo(e.key)
    }

    // 处理当前需要展开的项目
    let firstOpenKeys: string = ""
    function findKey(obj: { key: string }) {
        return obj.key === currentRoute.pathname;
    }
    for (let i = 0; i < items.length; i++) {
        if (items[i]!['children'] && items[i]!['children'].length > 1 && items[i]!
        ['children'].find(findKey)) {
            console.log(items[i]!.key);
            firstOpenKeys = items[i]!.key as string;
            break;
        }
    }

    const [openKeys, setOpenKeys] = useState([firstOpenKeys])



    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[currentRoute.pathname]}   // 路由路径地址
            mode="inline"
            items={items}
            onClick={meauClick}
            onOpenChange={onOpenChange}
            openKeys={openKeys}
        />
    )
}

export default MainMenu