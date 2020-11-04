import React from 'react';
import { Card, Space, Tabs  } from 'antd';

const Tabs2 = () => {

  return (
    <Space direction="vertical" style={{width: '100%'}}>
      <Card title="通知提醒框">
        <Tabs defaultActiveKey="1" tabPosition="top" animated={true}>
          <Tabs.TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 2" disabled key="2">
            Content of Tab Pane 2
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </Space>
  );
}

export default Tabs2;