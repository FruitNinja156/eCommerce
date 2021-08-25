import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item>
      <SubMenu title={<span>Coming Soon...</span>}>
        <MenuItemGroup title="Abouts Menu">
          <Menu.Item key="setting:1">About Ethiopia</Menu.Item>
          <Menu.Item key="setting:2">About TinishuaEthiopia</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Discovery Menu">
          <Menu.Item key="setting:3">Discover Places</Menu.Item>
          <Menu.Item key="setting:4">Developer Contacts</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
    </Menu>
  )
}

export default LeftMenu