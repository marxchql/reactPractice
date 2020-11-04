import React from 'react';
import { Card, Space, notification, Button } from 'antd';

const Modals = () => {

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  }

  return (
    <Space direction="vertical" style={{width: '100%'}}>
      <Card title="通知提醒框">
        <Space>
          <Button type="primary" onClick={() => openNotificationWithIcon('success')}>Success</Button>
          <Button type="primary" onClick={() => openNotificationWithIcon('info')}>Info</Button>
          <Button type="primary" onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
          <Button type="primary" onClick={() => openNotificationWithIcon('error')}>Error</Button>
        </Space>
      </Card>
    </Space>
  );
}

export default Modals;