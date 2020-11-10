import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Menu } from 'antd';
import menuList from '@/resource/menuConfig';
import { useHistory } from 'react-router-dom';

const { SubMenu } = Menu;

const NavMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    auth: []
  })

  function handleClick(e) {
    dispatch({
      type: 'changeTitle',
      title: e.item.props.title
    })
    history.push(e.key)
  }

  useEffect(() => {
    setData(data => {
      return {
        ...data,
        auth: JSON.parse(sessionStorage.getItem('auth'))
      }
    })
  }, [])

  return (
    <nav className="nav-menu">
      <h1>后台管理</h1>

      <Menu onClick={handleClick} mode="vertical" theme="dark">
        {
          menuList.map(item => {
            if (data.auth.includes(item.auth)) {
              if (!!item.children) {
                return (
                  <SubMenu key={item.key} title={item.title}>
                    {
                      item.children.map(value => {
                        // return <Menu.Item key={value.key} title={value.title}>{value.title}</Menu.Item>
                        if (data.auth.includes(value.auth)) {
                          return <Menu.Item key={value.key} title={value.title}>{value.title}</Menu.Item>
                        } else {
                          return null
                        }
                      })
                    }
                  </SubMenu>
                )
              } else {
                return <Menu.Item key={item.key} title={item.title}>{item.title}</Menu.Item>
              }
            } else {
              return null;
            }
          })
        }
      </Menu>
    </nav>
  );
}

export default NavMenu;