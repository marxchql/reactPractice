import React, { Component } from 'react';

import { TabBar } from 'antd-mobile';

import cooksImg from 'img/img11.jpg'
import cooksActiveImg from 'img/img1.jpg'
import shareImg from 'img/img22.jpg'
import shareActiveImg from 'img/img2.jpg'
import messageImg from 'img/img33.jpg'
import messageActiveImg from 'img/im3.jpg'
import mineImg from 'img/img44.jpg'
import mineActiveImg from 'img/img4.jpg'

class Home extends Component {
  state = {
    selectedTab: 'cooks',
    hidden: false,
    fullScreen: true
  }
  render() {
    return (
      <div>
        <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
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
              selected={this.state.selectedTab === 'cooks'}
              onPress={() => {
                this.setState({
                  selectedTab: 'cooks',
                });
              }}
              data-seed="logId"
            >
              <div>cooks</div>
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
              selected={this.state.selectedTab === 'share'}
              onPress={() => {
                this.setState({
                  selectedTab: 'share',
                });
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
              selected={this.state.selectedTab === 'message'}
              onPress={() => {
                this.setState({
                  selectedTab: 'message',
                });
              }}
            >
              <div>message</div>
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
              selected={this.state.selectedTab === 'mine'}
              onPress={() => {
                this.setState({
                  selectedTab: 'mine',
                });
              }}
            >
              <div>mine</div>
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    );
  }
}

export default Home;