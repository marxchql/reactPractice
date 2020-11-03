import React, { useState, useEffect } from 'react';
import { Row, Col, Typography } from 'antd';
const { Text, Link } = Typography;

const Header = () => {
  const [data, setData] = useState({
    username: '强子',
    pageTitle: '首页',
    time: new Date().toLocaleString()
  })

  useEffect(() => {
    setTimeout(() => {
      setData({
        ...data,
        time: new Date().toLocaleString()
      })
    }, 1000);
  }, [data])

  return (
    <header>
      <Row className="header-top" justify="end">
        <Col>
          <Text style={{marginRight: '20px'}}>欢迎你，{data.username}</Text>
          <Link>退出</Link>
        </Col>
      </Row>
      <Row className="header-bottom">
        <Col span={5} className="breadcrumb">{data.pageTitle}</Col>
        <Col span={19} className="time">{data.time}</Col>
      </Row>
    </header>
  );
}

export default Header;