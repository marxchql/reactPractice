import React from 'react';

import { Item } from './StyledComponent';

import { WingBlank, WhiteSpace } from 'antd-mobile';

const Messages = (props) => {
  return (
    <div>
      {
        props.list.map((item, index) => {
          return (
            <div key={index}>
              <WhiteSpace size="lg" />
              <WingBlank  size="lg"><Item radius="30" color="red" className="item">{item.author}</Item></WingBlank>
            </div>
          )
        })
      }
    </div>
  );
}

export default Messages;