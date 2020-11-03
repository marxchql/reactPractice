import React from 'react';
import { Menu } from 'antd';
import menuList from '@/resource/menuConfig';

const { SubMenu } = Menu;

const NavMenu = () => {

  function handleClick(e) {
    console.log('click', e);
  }

  return (
    <nav className="nav-menu">
      <h1>后台管理</h1>

      <Menu onClick={handleClick} mode="vertical" theme="dark">
        {
          menuList.map(item => {
            if (!!item.children) {
              return (
                <SubMenu key={item.key} title={item.title}>
                  {
                    item.children.map(value => {
                      return <Menu.Item key={value.key}>{value.title}</Menu.Item>
                    })
                  }
                </SubMenu>
              )
            } else {
              return <Menu.Item key={item.key}>{item.title}</Menu.Item>
            }
          })
        }
      </Menu>
    </nav>
  );
}

export default NavMenu;