import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import Logo from './Logo/index';
import Menu from './Menu/index';
const { Sider } = Layout;

function LayoutSider() {
    return (
        <Sider
            collapsible
            collapsed={false}
            trigger={null}
            style={{
                overflow: 'auto',
                height: '100vh',
            }}
            >
            <Logo />
            <Menu />
        </Sider>
    )
}

export default LayoutSider;