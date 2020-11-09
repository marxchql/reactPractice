import {useState, useEffect, useCallback} from 'react'
import {Form} from 'antd';
import {ordersList} from '../../utils/api';
import {format} from '../../utils/utils';

const useGetdata = () => {
  const [form] = Form.useForm();
  const [dataList, setDataList] = useState({
    dataSource: [],
    page: 1,
    pageSize: 10,
    columns: [
      {
        title: '订单编号',
        dataIndex: 'order_sn',
        key: 'order_sn',
      },
      {
        title: '车辆编号',
        dataIndex: 'bike_sn',
        key: 'bike_sn',
      },
      {
        title: '用户名',
        dataIndex: 'user_name',
        key: 'user_name',
      },
      {
        title: '手机号',
        dataIndex: 'mobile',
        key: 'mobile',
      },
      {
        title: '开始时间',
        dataIndex: 'start_time',
        key: 'start_time',
        render: (value) => format(value)
      },
      {
        title: '结束时间',
        dataIndex: 'end_time',
        key: 'end_time',
        render: (value) => format(value)
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (value) => value === 1 ? '进行中' : '已结束'
      },
    ],
    pagination: {}
  });

  // 获取列表数据
  const getList = useCallback(async (obj) => {
    const res = await ordersList({
      page: dataList.page,
      page_size: dataList.pageSize,
      ...obj
    })
    // console.log(res)
    if (res.status === 0) {
      const total = res.total
      const list = []
      res.result.forEach(item => {
        item.key = item._id
        list.push(item)
      })
      setDataList(dataList => {
        return {
          ...dataList,
          dataSource: list,
          pagination: {
            total: total,
            showSizeChanger: true,
            onShowSizeChange(current, pageSize) {
              console.log(current)
              setDataList(dataList => {
                return {
                  ...dataList,
                  page: current,
                  pageSize: pageSize
                }
              })
            },
            showTotal: (total) => `总共 ${total} 条`,
            showQuickJumper: true,
            onChange(page, pageSize) {
              setDataList(dataList => {
                return {
                  ...dataList,
                  page: page
                }
              })
            }
          }
        }
      })
    }
  }, [dataList.page, dataList.pageSize])

  const onFinish = () => {
    // console.log(form.getFieldsValue())
    const obj = form.getFieldsValue()
    obj.start_time = new Date(obj.start_time.format('YYYY/MM/DD')).getTime();
    obj.end_time = new Date(obj.end_time.format('YYYY/MM/DD')).getTime();
    getList(obj)
  }

  useEffect(() => {
    getList()
  }, [getList])


  return {
    getList, onFinish, dataList
  }
}

export default useGetdata;