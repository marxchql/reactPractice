import React from 'react';

const Child1 = (props) => {
  return (
    // 不能加括号
    <div onClick={ props.onHandlerArrive.bind(this, 999) }>child1</div>
  );
}

export default Child1;