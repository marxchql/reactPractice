import React, {useState} from 'react';
import { Card, Button, Space, Tooltip } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';

const Buttons = () => {
  const [loading, setLoading] = useState(true)

  const handleChange = () => {
    setLoading(loading => {
      return !loading
    })
  }

  return (
    <Space direction="vertical" style={{width: '100%'}}>
      <Card title="基础按钮">
        <Space>
          <Button type="primary" shape="round">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="primary" danger>Primary</Button>
          <Button type="primary" disabled>Primary Button</Button>
        </Space>
      </Card>

      <Card title="图形按钮">
        <Space>
          <Button icon={<PlusOutlined />}>Search</Button>
          <Button icon={<EditOutlined />}>Edit</Button>
          <Button icon={<DeleteOutlined />}>Delete</Button>
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="primary" icon={<SearchOutlined />}>Search</Button>
        </Space>
      </Card>

      <Card title="Loading">
        <Space>
          <Button loading={loading} disabled={loading}>Loading</Button>
          <Tooltip title="search">
            <Button type="primary" shape="circle" loading={loading} />
          </Tooltip>
          <Button type="primary" onClick={handleChange}>close</Button>
        </Space>
      </Card>

      <Card title="基础按钮">
        <Space>
          <Button type="primary" shape="round">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="primary" danger>Primary</Button>
          <Button type="primary" disabled>Primary Button</Button>
        </Space>
      </Card>

      <Card title="基础按钮">
        <Space>
          <Button type="primary" shape="round">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="primary" danger>Primary</Button>
          <Button type="primary" disabled>Primary Button</Button>
        </Space>
      </Card>
    </Space>
  );
}

export default Buttons;