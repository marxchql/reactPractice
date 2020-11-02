import React, { useState } from 'react';

import { TabBar } from 'antd-mobile';

import {Cooks} from 'home/cooks';
import {Messages} from 'home/message'
import Mine from 'home/mine/Mine'

import cooksImg from 'img/img11.jpg'
import cooksActiveImg from 'img/img1.jpg'
import shareImg from 'img/img22.jpg'
import shareActiveImg from 'img/img2.jpg'
import messageImg from 'img/img33.jpg'
import messageActiveImg from 'img/im3.jpg'
import mineImg from 'img/img44.jpg'
import mineActiveImg from 'img/img4.jpg'

import { useDispatch, useSelector } from 'react-redux';
import { changeSelected } from './actionCreator';

const Home = (props) => {
  // 用于获取redux的数据
  // const store = useStore()
  // 用于获取redux的action的方法
  const dispatch = useDispatch()

  // 也是用于获取数据
  const store = useSelector(state => state)
  // const store = useStore().getState() 相当于 const store = useSelector(state => state)

  const [ tabs, setTabs ] = useState({
    hidden: false,
    fullScreen: true
  })

  return (
    <div>
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={tabs.hidden}
        >
          <TabBar.Item
            title=""
            key="cooks"
            icon={<div style={{
              width: '30px',
              height: '30px',
              background: `url(${cooksImg}) center center /  28px 28px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '30px',
              height: '30px',
              background: `url(${cooksActiveImg}) center center /  28px 28px no-repeat` }}
            />
            }
            // selected={homeState.selectedTab === 'cooks'}
            selected={store.homeReducer.selectedTab === 'cooks'}
            onPress={() => {
              setTabs({
                selectedTab: 'cooks'
              })
              dispatch(changeSelected('cooks'))
              sessionStorage.setItem('tabs', 'cooks')
            }}
            data-seed="logId"
          >
            <Cooks></Cooks>
          </TabBar.Item>
          <TabBar.Item
            icon={<div style={{
              width: '30px',
              height: '30px',
              background: `url(${shareImg}) center center /  28px 28px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '30px',
              height: '30px',
              background: `url(${shareActiveImg}) center center /  28px 28px no-repeat` }}
            />
            }
            title=""
            key="share"
            // selected={homeState.selectedTab === 'share'}
            selected={store.homeReducer.selectedTab === 'share'}
            onPress={() => {
              // props.change('share')
              setTabs({
                selectedTab: 'share'
              })
              dispatch(changeSelected('share'))
              sessionStorage.setItem('tabs', 'share')
            }}
            data-seed="logId1"
          >
            <div>share</div>
          </TabBar.Item>
          <TabBar.Item
            icon={<div style={{
              width: '30px',
              height: '30px',
              background: `url(${messageImg}) center center /  28px 28px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '30px',
              height: '30px',
              background: `url(${messageActiveImg}) center center /  28px 28px no-repeat` }}
            />
            }
            title=""
            key="message"
            // selected={homeState.selectedTab === 'message'}
            selected={store.homeReducer.selectedTab === 'message'}
            onPress={() => {
              // props.change('message')
              setTabs({
                selectedTab: 'message'
              })
              dispatch(changeSelected('message'))
              sessionStorage.setItem('tabs', 'message')
            }}
          >
            <Messages></Messages>
          </TabBar.Item>
          <TabBar.Item
            icon={<div style={{
              width: '30px',
              height: '30px',
              background: `url(${mineImg}) center center /  28px 28px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '30px',
              height: '30px',
              background: `url(${mineActiveImg}) center center /  28px 28px no-repeat` }}
            />}
            title=""
            key="mine"
            // selected={homeState.selectedTab === 'mine'}
            selected={store.homeReducer.selectedTab === 'mine'}
            onPress={() => {
              // props.change('mine')
              setTabs({
                selectedTab: 'mine'
              })
              dispatch(changeSelected('mine'))
              sessionStorage.setItem('tabs', 'mine')
            }}
          >
            <Mine></Mine>
          </TabBar.Item>
        </TabBar>
      </div>
    </div>
  )
}

export default Home;