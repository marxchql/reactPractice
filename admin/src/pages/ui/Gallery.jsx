import React, { useState, useEffect } from 'react';
import {Row, Col, Card, Modal, Image } from 'antd';
import { getPicList } from '../../utils/api';

const Gallery = () => {
  const [data, setData] = useState({
    list: [],
    visible: false,
    currentUrl: ''
  })

  useEffect(() => {
    async function getList() {
      const res = await getPicList()
      if (res.status === 0) {
        setData((data) => {
          return {
            ...data,
            list: res.list
          }
        })
      }
    }
    getList()
  }, [])

  const handleClick = (v) => {
    setData((data) => {
      return {
        ...data,
        visible: true,
        currentUrl: v
      }
    })
  }

  const handleCancel = () => {
    setData((data) => {
      return {
        ...data,
        visible: false
      }
    })
  };


  return (
    <div>
      <Row gutter={10}>
        {
          data.list.map((item, index) => {
            return (
              <Col key={index} span={ index === 2 ? 4 : 5 }>
                {
                  item.map((v, i) => {
                    return (
                      <Card
                        key={i}
                        hoverable
                        style={{ width: '100%', marginBottom: '10px' }}
                        cover={<img alt="example" src={v} />}
                        onClick={() => handleClick(v)}
                      >
                        <Card.Meta title="Europe Street beat" description="www.instagram.com" />
                      </Card>
                    )
                  })
                }
              </Col>
            )
          })
        }
      </Row>

      <Modal
        title="Basic Modal"
        visible={data.visible}
        footer={null}
        onCancel={handleCancel}
        width={350}
      >
        <Image
          width={300}
          src={data.currentUrl}
        />
      </Modal>
    </div>
  );
}

export default Gallery;