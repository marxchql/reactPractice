import React from 'react';
import { Card, Space, Spin, Alert  } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loading = () => {
  return (
    <Space direction="vertical" style={{width: '100%'}}>
      <Card title="Spin用法">
        <Space>
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
          <Spin indicator={antIcon} />
        </Space>
      </Card>

      <Card title="内容遮罩">
        <Space direction="vertical" style={{width: '100%'}}>
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
          <Spin spinning={true} delay={500} tip="Loading...">
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </Spin>
        </Space>
      </Card>
    </Space>
  );
}

export default Loading;