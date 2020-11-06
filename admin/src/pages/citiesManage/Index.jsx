import React, { useState, useEffect } from 'react';
import {Card, Space, Table, Button, Form, Modal, Select, Input, DatePicker, message} from 'antd';
import {getCitiesList, getCities, addCities} from '../../utils/api';

function format (shijianchuo) {
  //shijianchuo是整数，否则要parseInt转换
  var time = new Date(+shijianchuo);
  var y = time.getFullYear();
  var m = time.getMonth()+1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return y+'-'+m+'-'+d+' '+h+':'+mm+':'+s;
}

const Index = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState({
    dataSource: [],
    columns: [
      {
        title: '城市',
        dataIndex: 'city',
        key: 'city',
      },
      {
        title: '用车模式',
        dataIndex: 'useCar',
        key: 'useCar',
        render: value => value === '1' ? '停车点' : '禁停区'
      },
      {
        title: '营运模式',
        dataIndex: 'operating',
        key: 'operating',
        render: value => value === '1' ? '自营' : '加盟'
      },
      {
        title: '城市管理员',
        dataIndex: 'admin',
        key: 'admin',
      },
      {
        title: '城市开通时间',
        dataIndex: 'openTime',
        key: 'openTime',
        render: value => format(value)
      },
      {
        title: '操作时间',
        dataIndex: 'handleTime',
        key: 'handleTime',
        render: value => format(value)
      }
    ],
    citiesList: [],
    visible: false
  })

  useEffect(() => {
    getList()
    getctList()
  }, [])

  // 获取列表数据
  const getList = async(obj = {}) => {
    const res = await getCitiesList(obj)
    if (res.status === 0) {
      const list = []
      res.result.forEach(item => {
        item.key = item._id
        list.push(item)
      })
      setData(data => {
        return {
          ...data,
          dataSource: list
        }
      })
    }
  }


  // 获取城市列表
  const getctList = async() => {
    const res = await getCities()
    setData(data => {
      return {
        ...data,
        citiesList: res.cts
      }
    })
  }

  // 新增城市管理
  const addctList = async(obj) => {
    const res = await addCities(obj)
    if (res.status === 0) {
      message.success(res.msg);
      form.resetFields();
      setData(data => {
        return {
          ...data,
          visible: false
        }
      })
    }
    getList()
  }

  // 提交查询
  const onFinish = (values) => {
    getList(values)
  }

  // 重置查询
  const onReset = () => {
    form.resetFields()
    getList()
  }

  // 打开模态框
  const openModal = () => {
    setData(data => {
      return {
        ...data,
        visible: true
      }
    })
  }

  // 确认的回调
  const handleOk = () => {
    // console.log(form.getFieldsValue())
    const obj = form.getFieldsValue()
    obj.openTime = new Date(obj.openTime.format('YYYY/MM/DD')).getTime();
    obj.handleTime = new Date().getTime()
    // console.log(obj)
    addctList(obj)
  };

  // 关闭模态框
  const handleCancel = e => {
    form.resetFields()
    setData(data => {
      return {
        ...data,
        visible: false
      }
    })
  };

  return (
    <Space direction="vertical" style={{width: '100%'}}>
      <Card>
        <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>

          {/* 选择城市 */}
          <Form.Item
            label="城市"
            name="city"
          >
            <Select style={{ width: 120 }} placeholder="全部" allowClear>
              {
                data.citiesList.map(item => <Select.Option key={item.id} value={item.nm}>{item.nm}</Select.Option>)
              }
            </Select>
          </Form.Item>

          {/* 用车模式 */}
          <Form.Item
            label="用车模式"
            name="useCar"
          >
            <Select style={{ width: 120 }} placeholder="全部" allowClear>
              <Select.Option value="1">停车点</Select.Option>
              <Select.Option value="2">禁停区</Select.Option>
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
              onClick={onReset}
            >重置</Button>
          </Form.Item>
        </Form>
      </Card>

      
      <Card>
        <Button type="primary" style={{marginBottom: '10px'}} onClick={openModal}>开通城市</Button>
        <Modal
          title="Basic Modal"
          visible={data.visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            name="normal_login"
            className="login-form"
            form={form}
            labelCol={{span: 5}}
            wrapperCol={{span: 12 }}
          >
            <Form.Item
              label="城市"
              name="city"
            >
              <Select style={{ width: 120 }} placeholder="全部" allowClear>
                {
                  data.citiesList.map(item => <Select.Option key={item.id} value={item.nm}>{item.nm}</Select.Option>)
                }
              </Select>
            </Form.Item>

            {/* 用车模式 */}
            <Form.Item
              label="用车模式"
              name="useCar"
            >
              <Select style={{ width: 120 }} placeholder="全部" allowClear>
                <Select.Option value="1">停车点</Select.Option>
                <Select.Option value="2">禁停区</Select.Option>
              </Select>
            </Form.Item>

            {/* 营运模式 */}
            <Form.Item
              label="营运模式"
              name="operating"
            >
              <Select style={{ width: 120 }} placeholder="全部" allowClear>
                <Select.Option value="1">自营</Select.Option>
                <Select.Option value="2">加盟</Select.Option>
              </Select>
            </Form.Item>

            {/* 管理员 */}
            <Form.Item
              label="城市管理员"
              name="admin"
            >
              <Input placeholder="城市管理员"></Input>
            </Form.Item>


            <Form.Item
              label="城市管理员"
              name="openTime"
            >
              <DatePicker/>
            </Form.Item>
          </Form>
        </Modal>

        
        <Table 
          bordered
          dataSource={data.dataSource} 
          columns={data.columns} 
          pagination={false}
        />
      </Card>
    </Space>
  );
}

export default Index;