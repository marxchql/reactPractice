import React from 'react';

import {RecommendWrap} from './StyledComponent';

import useGetState from './useGetState';
import useGoToDetail from './useGoToDetail';

const Recommend = (props) => {
  const { handleClick, filteredList } = useGetState(props)
  const { goToDetail } = useGoToDetail()
  

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