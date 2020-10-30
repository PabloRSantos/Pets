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
    <Col xl={6} xs={24}>
    <Card
            hoverable
            cover={<img src={img} />}
        >
            <Meta title={title} description={description} />
        </Card>
    </Col>
  )
}

export default CardComponent
