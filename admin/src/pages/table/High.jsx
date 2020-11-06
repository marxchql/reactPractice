import React, { useState, useEffect } from 'react';
import {Card, Space, Table, Modal, Button} from 'antd';
import {getHighList} from '../../utils/api';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const High = () => {
  const [data, setData] = useState({
    dataSource: [],
    columns: [
      // id	用户名	性别	状态
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        render: value => value === 1 ? '男' : '女'
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
        render: value => {
          let obj = {
            1: '咸鱼一条',	
            2: '风华浪子',	 
            3: '北大才子', 
            4: '百度FE', 
            5: '创业者'
          }
          return obj[value]
        }
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <Button onClick={() => deleteItem(record)}>删除</Button>
          </Space>
        ),
      }
    ],
    columns2: [
      // id	用户名	性别	状态
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        width: 70,
        fixed: 'left',
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        width: 100,
        fixed: 'left',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        width: 100,
        sorter: (a, b) => a.age - b.age
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        width: 100
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        width: 100
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        width: 100
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        width: 100
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        width: 100
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        width: 100
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        width: 100
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        width: 100
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        width: 100
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        width: 100
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        width: 100
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        render: value => value === 1 ? '男' : '女',
        width: 150,
        sorter: (a, b) => a.sex - b.sex,
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
        render: value => {
          let obj = {
            1: '咸鱼一条',	
            2: '风华浪子',	 
            3: '北大才子', 
            4: '百度FE', 
            5: '创业者'
          }
          return obj[value]
        },
        width: 150,
        fixed: 'right',
      }
    ]
  })


  const deleteItem = (record) => {
    Modal.confirm({
      title: '确定吗',
      icon: <ExclamationCircleOutlined />,
      content: `你确定要删除${record.username}吗`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
        // deleteList()
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const getList = async () => {
    const res = await getHighList()
    const list = res.result
    list.map(item => {
      return item.key = item._id
    })
    setData(data => {
      return {
        ...data,
        dataSource: list
      }
    })
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <Space direction="vertical" style={{width: '100%'}}>
      <Card title="头部固定">
        <Table 
          bordered
          dataSource={data.dataSource} 
          columns={data.columns} 
          pagination={false}
          scroll={{ y: 240 }}
        />
      </Card>

      <Card title="左右固定">
        <Table 
          bordered
          dataSource={data.dataSource} 
          columns={data.columns2} 
          pagination={false}
          scroll={{ y: 240 }}
        />
      </Card>
    </Space>
  );
}

export default High;