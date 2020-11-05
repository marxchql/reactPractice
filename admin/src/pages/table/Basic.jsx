import React, {useState, useEffect} from 'react';
import {Card, Space, Table, Modal} from 'antd';
import { getTableList } from '../../utils/api';

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

const Basic = () => {
  const [data, setData] = useState({
    dataSource2: [],
    columns2: [
      // id	用户名	性别	状态
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '用户名',
        dataIndex: 'userName',
        key: 'userName',
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
      }
    ],
    keys: []
  });

  useEffect(() => {
    async function getList() {
      const res = await getTableList({page: 1})
      if (res.status === 0) {
        const list = res.result
        list.forEach((item) => {
          return item.key = item._id
        })
        setData((data) => {
          return {
            ...data,
            dataSource2: list
          }
        })
      }
    }
    getList()
  }, [])

  return (
    <Space direction="vertical" style={{width: '100%'}}>
      <Card title="基础表格">
        <Table 
          bordered
          dataSource={dataSource} 
          columns={columns} 
          pagination={false}
        />
      </Card>


      <Card title="动态数据">
        <Table 
          bordered
          dataSource={data.dataSource2} 
          columns={data.columns2} 
          pagination={false}
        />
      </Card>


      <Card title="单选">
        <Table 
          bordered
          dataSource={data.dataSource2} 
          columns={data.columns2} 
          pagination={false}
          rowSelection={{
            type: 'radio',
            selectedRowKeys: data.keys
          }}
          onRow={record => {
            return {
              onClick: () => {
                setData((data) => {
                  return {
                    ...data,
                    keys: [record.key]
                  }
                })
                Modal.info({
                  title: '信息',
                  content: (
                    <div>
                      <p>{record.userName}</p>
                    </div>
                  )
                })
              }
            };
          }}
        />
      </Card>
    </Space>
  );
}

export default Basic;