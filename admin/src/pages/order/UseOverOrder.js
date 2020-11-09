import { Modal } from 'antd';
import {useState} from 'react';
const useOverOrder = () => {
  const [data, setData] = useState({
    keys: [],
    record: {}
  });

  const rowClick = (record) => {
    return () => {
      setData((data) => {
        return {
          ...data,
          keys: [record.key],
          record: record
        }
      })
    }
  }

  const overOrder = () => {
    if (data.record.user_name) {
      Modal.info({
        title: '信息',
        content: (
          <div>
            <p>你确定要结束{data.record.user_name}吗</p>
          </div>
        )
      })
    } else {
      Modal.info({
        title: '信息',
        content: (
          <div>
            <p>请先选择一条订单进行结束</p>
          </div>
        )
      })
    }
  }

  return {data, rowClick, overOrder}
}

export default useOverOrder