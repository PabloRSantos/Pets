import React from 'react'

import { Col, Card } from 'antd'
import 'antd/dist/antd.css'

const { Meta } = Card

interface CardProps {
    img: string,
    title: string,
    description: string
}

const CardComponent: React.FC<CardProps> = ({ img, title, description }) => {
  return (
    <Col span={6}>
    <Card
            hoverable
            cover={<img src={img} />}
        >
            <Meta title={title} description={description} />
        </Card>,
    </Col>
  )
}

export default CardComponent
