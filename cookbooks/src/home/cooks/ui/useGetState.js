import {useState} from 'react';
import memoize from 'memoize-one';

const useGetState = (props) => {
  // 获取数据
  const [data, setData] = useState({
    type: 1
  })

  // 获取数据
  const handleClick = (num) => {
    return () => {
      setData({
        type: num
      })
    }
  }

  // 获取数据
  const filter = memoize(
    (list, type) => {
      return list.filter(item => item.type === type)
    }
  );

  // 获取数据
  const filteredList = filter(props.recommendList, data.type);


  return {
    handleClick,
    filteredList
  }
}

export default useGetState;