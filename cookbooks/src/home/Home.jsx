import React, { Component } from 'react';

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

import { connect } from 'react-redux';
import { changeSelected } from './actionCreator';

const mapStateToProps = state => {
  return {
    selectedTab: state.homeReducer.selectedTab
  }
}

const mapDispatchToProps = dispatch => {
  return {
    change(data) {
      dispatch(changeSelected(data))
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component {
  state = {
    // selectedTab: 'cooks',
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
              selected={this.props.selectedTab === 'cooks'}
              onPress={() => {
                // this.setState({
                //   selectedTab: 'cooks',
                // });
                this.props.change('cooks')
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
              selected={this.props.selectedTab === 'share'}
              onPress={() => {
                // this.setState({
                //   selectedTab: 'share',
                // });
                this.props.change('share')
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
              selected={this.props.selectedTab === 'message'}
              onPress={() => {
                // this.setState({
                //   selectedTab: 'message',
                // });
                this.props.change('message')
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
              selected={this.props.selectedTab === 'mine'}
              onPress={() => {
                // this.setState({
                //   selectedTab: 'mine',
                // });
                this.props.change('mine')
                sessionStorage.setItem('tabs', 'mine')
              }}
            >
              <Mine></Mine>
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    );
  }
}

export default Home;