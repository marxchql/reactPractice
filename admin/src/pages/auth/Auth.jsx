import React, {useState, useEffect} from 'react';
import {Space, Card, Table,Button,Modal,Transfer} from 'antd'
import {userList} from '../../utils/api'

const mockData = [
  {
    title: '首页',
    key: '1'
  },
  {
    title: 'UI',
    key: '2',
  },
  {
    title: '按钮',
    key: '12',
  },
  {
    title: '弹框',
    key: '13',
  },
  {
    title: 'Loading',
    key: '14',
  },
  {
    title: '通知提醒',
    key: '15',
  },
  {
    title: '全局Message',
    key: '16',
  },
  {
    title: 'Tab页签',
    key: '17',
  },
  {
    title: '图片画廊',
    key: '18',
  },
  {
    title: '轮播图',
    key: '19',
  },
  {
    title: '表单',
    key: '3',
  },
  {
    title: '登录',
    key: '20',
  },
  {
    title: '注册',
    key: '21',
  },
  {
    title: '表格',
    key: '4',
  },
  {
    title: '基础表格',
    key: '22',
  },
  {
    title: '高级表格',
    key: '23',
  },
  {
    title: '富文本',
    key: '5',
  },
  {
    title: '城市管理',
    key: '6',
  },
  {
    title: '订单管理',
    key: '7',
  },
  {
    title: '员工管理',
    key: '8',
  },
  {
    title: '车辆地图',
    key: '9',
  },
  {
    title: '图标',
    key: '10',
  },
  {
    title: '权限设置',
    key: '11',
  },
];

const Auth = () => {
  const [data, setData] = useState({
    dataSource: [],
    visible: false,
    columns: [
      {
        title: 'id',
        dataIndex: '_id',
        key: '_id',
      },
      {
        title: '账号',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <Button onClick={() => openModal(record)}>设置权限</Button>
          </Space>
        ),
      }
    ],
    targetKeys: [],
    selectedKeys: []
  })

  useEffect(() => {
    getList()
  }, [])

  const getList = async() => {
    const res = await userList()
    if (res.status === 0) {
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
  }

  const handleOk = e => {
    console.log(data.targetKeys)
    setData(data => {
      return {
        ...data,
        visible: false,
      }
    })
  };

  const handleCancel = e => {
    setData(data => {
      return {
        ...data,
        visible: false,
      }
    })
  };

  const openModal = (record) => {
    setData(data => {
      return {
        ...data,
        visible: true,
        targetKeys: record.auth
      }
    })
  }

  const handleChange = (nextTargetKeys, direction, moveKeys) => {
    // this.setState({ targetKeys: nextTargetKeys });
    setData(data => {
      return {
        ...data,
        targetKeys: nextTargetKeys,
      }
    })

    console.log('targetKeys: ', nextTargetKeys);
    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
  };

  const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    // this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });
    setData(data => {
      return {
        ...data,
        selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys],
      }
    })

    console.log('sourceSelectedKeys: ', sourceSelectedKeys);
    console.log('targetSelectedKeys: ', targetSelectedKeys);
  };


  return (
    <Space direction="vertical" style={{width: '100%'}}>
      <Card title="基础表格">
        <Table 
          bordered
          dataSource={data.dataSource} 
          columns={data.columns} 
          pagination={false}
        />
        <Modal
          title="Basic Modal"
          visible={data.visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Transfer
            dataSource={mockData}
            titles={['Source', 'Target']}
            targetKeys={data.targetKeys}
            selectedKeys={data.selectedKeys}
            onChange={handleChange}
            onSelectChange={handleSelectChange}
            render={item => item.title}
          />
        </Modal>
      </Card>
    </Space>
  );
}

export default Auth;