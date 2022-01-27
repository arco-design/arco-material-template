import React from 'react';
import { Menu } from '@arco-design/web-react';

import './style/index.less';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

function SidebarDemo() {
  return (
    <div style={{ width: '200px', height: '100%', backgroundColor: '#fafbfc' }}>
      <Menu
        theme="dark"
        defaultOpenKeys={['nav', 'layout']}
        defaultSelectedKeys={['7']}
        onClickSubMenu={(key, newKey) => console.warn(key, newKey)}
        onClickMenuItem={(key) => console.warn(`你选择了key值：${key}`)}
      >
        <MenuItem key="1">设计指南</MenuItem>
        <MenuItem key="2">区块</MenuItem>
        <MenuItem key="3">模块</MenuItem>
        <SubMenu key="component" title={<span>组件</span>}>
          <MenuItem key="4">通用组件</MenuItem>
          <MenuItem key="5">布局组件</MenuItem>
          <SubMenu key="nav" title={<span>导航组件</span>}>
            <MenuItem key="6">面包屑</MenuItem>
            <MenuItem key="7">垂直菜单</MenuItem>
          </SubMenu>
          <SubMenu key="dataInput" title={<span>数据输入</span>}>
            <MenuItem key="8">单选框</MenuItem>
            <MenuItem key="9">复选框</MenuItem>
            <MenuItem key="10">输入框</MenuItem>
          </SubMenu>
        </SubMenu>
        <SubMenu key="layout" title={<span>布局组件</span>}>
          <MenuItem key="11">栅格</MenuItem>
          <MenuItem key="12">分隔符</MenuItem>
          <MenuItem key="13">布局</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default SidebarDemo;
