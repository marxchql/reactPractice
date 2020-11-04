import React, {useState} from 'react';
import { Card, Space, Modal, Button } from 'antd';

const Modals = () => {
  const [data, setData] = useState({
    visible: false,
    visible2: false
  })

  const showModal = () => {
    setData({
      ...data,
      visible: true
    })
  }

  const showModal2 = () => {
    setData({
      ...data,
      visible2: true
    })
  }

  const handleOk = () => {
    setData({
      ...data,
      visible: false,
      visible2: false

    })
  }
  const handleCancel = () => {
    setData({
      ...data,
      visible: false,
      visible2: false
    })
  }

  const confirm = (type, content) => {
    Modal[type]({
      content: content,
    });
  }

  return (
    <Space direction="vertical" style={{width: '100%'}}>
      <Card title="基础模态框">
        <Space>
          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>
          <Modal
            title="Basic Modal"
            visible={data.visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>

          <Button type="primary" onClick={showModal2}>
            Open Modal
          </Button>
          <Modal
            title="Basic Modal"
            visible={data.visible2}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="确定"
            cancelText="取消"
          >
            <p>Some contents...</p>
          </Modal>
        </Space>
      </Card>

      <Card title="信息确认框">
        <Space>
          <Button onClick={() => confirm('success', '我学会了')}>Success</Button>
          <Button onClick={() => confirm('error', '我学废了')}>Error</Button>
        </Space>
      </Card>
    </Space>
  );
}

export default Modals;