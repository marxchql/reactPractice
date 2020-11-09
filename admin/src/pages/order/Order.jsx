import React from 'react';
import {Card, Space, Table, Button, Form, Select, DatePicker,Typography} from 'antd';
import UseGetData from './UseGetData';
import useOverOrder from './UseOverOrder';
const { Link } = Typography;

const Order = () => {
  const {onFinish, dataList} = UseGetData();
  const {data, rowClick, overOrder} = useOverOrder();
  const [form] = Form.useForm();

  return (
    <Space direction="vertical" style={{width: '100%'}}>
      <Card>
        <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
          <Form.Item
            label="开始时间"
            name="start_time"
          >
            <DatePicker showTime onChange={() => {console.log('change')}} onOk={() => {console.log('ok')}} />
          </Form.Item>
          <Form.Item
            label="结束时间"
            name="end_time"
          >
            <DatePicker showTime onChange={() => {console.log('change')}} onOk={() => {console.log('ok')}} />
          </Form.Item>
          {/* 用车模式 */}
          <Form.Item
            label="订单状态"
            name="status"
          >
            <Select style={{ width: 120 }} placeholder="全部" allowClear>
              <Select.Option value="1">进行中</Select.Option>
              <Select.Option value="2">已结束</Select.Option>
            </Select>
          </Form.Item>

          {/* 查询按钮 */}
          <Form.Item>
            <Button 
              type="primary" 
              style={{marginRight: '20px'}} 
              htmlType="submit"
            >查询</Button>
            <Button
              htmlType="reset"
            >重置</Button>
          </Form.Item>
        </Form>
      </Card>
    
      <Card>
        <Button type="primary" style={{marginBottom: '10px', marginRight: '20px'}}><Link href="/admin/ui/buttons" target="_blank">订单详情</Link></Button>
        <Button type="primary" style={{marginBottom: '10px'}} onClick={overOrder}>结束订单</Button>

        <Table 
          bordered
          dataSource={dataList.dataSource} 
          columns={dataList.columns} 
          pagination={dataList.pagination}
          rowSelection={{
            type: 'radio',
            selectedRowKeys: data.keys
          }}
          onRow={record => {
            return {
              onClick: rowClick(record)
            };
          }}
        />
      </Card>
    </Space>
  );
}

export default Order;