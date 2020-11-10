import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Row, Col, Typography } from 'antd';
import {getWea} from '../../utils/api';
const { Text, Link } = Typography;

let timer;

const Header = () => {
  const history = useHistory()
  const pageTitle = useSelector(state => state.pageTitle)

  const [data, setData] = useState({
    username: '',
    // pageTitle: '首页',
    time: new Date().toLocaleString(),
    city: '',
    wea: ''
  })

  useEffect(() => {
    timer = setInterval(() => {
      setData(data => {
        return {
          ...data,
          username: sessionStorage.getItem('username'),
          time: new Date().toLocaleString()
        }
      })
    }, 1000);
  }, [])

  useEffect(() => {
    return () => {
      clearInterval(timer)
    }
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

  const exit = () => {
    sessionStorage.clear()
    history.push('/login')
  }

  return (
    <header>
      <Row className="header-top" justify="end">
        <Col>
          <Text style={{marginRight: '20px'}}>欢迎你，{data.username}</Text>
          <Link onClick={exit}>退出</Link>
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