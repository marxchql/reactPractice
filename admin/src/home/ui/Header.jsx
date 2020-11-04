import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Typography } from 'antd';
import {getWea} from '../../utils/api';
const { Text, Link } = Typography;


const Header = () => {
  const pageTitle = useSelector(state => state.pageTitle)

  const [data, setData] = useState({
    username: '强子',
    // pageTitle: '首页',
    time: new Date().toLocaleString(),
    city: '',
    wea: ''
  })

  useEffect(() => {
    setInterval(() => {
      setData(data => {
        return {
          ...data,
          time: new Date().toLocaleString()
        }
      })
    }, 1000);
  }, [])

  useEffect(() => {
    async function getAsync() {
      const res = await getWea()
        setData(data => {
          return {
            ...data,
            city: res.city,
            wea: res.wea
          }}
        )
    }
    getAsync()
  }, [])

  return (
    <header>
      <Row className="header-top" justify="end">
        <Col>
          <Text style={{marginRight: '20px'}}>欢迎你，{data.username}</Text>
          <Link>退出</Link>
        </Col>
      </Row>
      <Row className="header-bottom">
        <Col span={5} className="breadcrumb">{pageTitle}</Col>
        <Col span={19} className="time">{data.city} - {data.wea} - {data.time}</Col>
      </Row>
    </header>
  );
}

export default Header;