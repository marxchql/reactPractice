import React from 'react';
import "./index.less";
import moment from 'moment';

const Welcome = () => {
  console.log(moment)
  return (
    <div className="welcome">
      欢迎来到2006后台管理系统
    </div>
  );
}

export default Welcome;