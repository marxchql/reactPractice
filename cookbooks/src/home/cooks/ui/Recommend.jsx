import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import memoize from 'memoize-one';

import {RecommendWrap} from './StyledComponent';

const Recommend = (props) => {
  let history = useHistory();

  const [data, setData] = useState({
    type: 1
  })

  const handleClick = (num) => {
    return () => {
      setData({
        type: num
      })
    }
  }

  const goToDetail = (id, title) => {
    return () => {
      history.push('/detail/' + id, {
        title: title
      })
    }
  }

  const filter = memoize(
    (list, type) => {
      return list.filter(item => item.type === type)
    }
  );

  const filteredList = filter(props.recommendList, data.type);

  return (
    <RecommendWrap>
      <nav>
        <li onClick={handleClick(1)}>推荐</li>
        <li onClick={handleClick(2)}>日常</li>
        <li onClick={handleClick(3)}>最热</li>
      </nav>
      <ul>
        {
          filteredList.map((item) => {
            return (
              <li 
                key={item.id}
                onClick={goToDetail(item.id, item.title)}
              >{item.title}</li>
            )
          })
        }
      </ul>
    </RecommendWrap>
  )
}

export default Recommend;