import React from 'react';
import { withRouter } from 'react-router-dom';

import { Item } from './StyledComponent';

import { WingBlank, WhiteSpace } from 'antd-mobile';

const Messages = withRouter((props) => {
  const goToDetail = () => {
    const {history} = props
    history.push('/detail/111111', {title: '哈哈哈哈'})
  }

  return (
    <div>
      {
        props.list.map((item, index) => {
          return (
            <div key={index}>
              <WhiteSpace size="lg" />
              <WingBlank  size="lg">
                <Item 
                  radius="30" 
                  color="red" 
                  className="item"
                  onClick={goToDetail}
                >
                  {item.author}
                </Item>
              </WingBlank>
            </div>
          )
        })
      }
    </div>
  );
})

export default Messages;