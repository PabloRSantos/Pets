import React from 'react'

import { Layout, Divider, Row, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import Card from '../Components/card'

const { Sider, Content } = Layout

const Home: React.FC = () => {
  return (
      <Layout>
          <Sider
          width={100}
          style={{
            backgroundColor: '#3E92CC',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '15px 0'
          }}>
               <Avatar icon={<UserOutlined />} size={50}/>

          </Sider>

          <Content style={{
            backgroundColor: '#FFFFFF',
            height: '100vh'
          }}>
            <Divider orientation='left'
             style={{
               color: '#3E92CC',
               fontFamily: 'Poppins',
               fontWeight: 700,
               fontSize: '32px'
             }}>Cachorros</Divider>

            <Row gutter={[16, 16]} style={{ margin: '0 30px' }}>
                <Card
                    img='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    title='Max'
                    description='Cachorro com 1 ano'/>

                <Card
                    img='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    title='Max'
                    description='Cachorro com 1 ano'/>

                <Card
                    img='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    title='Max'
                    description='Cachorro com 1 ano'/>

                <Card
                    img='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    title='Max'
                    description='Cachorro com 1 ano'/>
            </Row>

            <Row gutter={[16, 16]} style={{ margin: '0 30px' }}>
                <Card
                    img='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    title='Max'
                    description='Cachorro com 1 ano'/>

                <Card
                    img='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    title='Max'
                    description='Cachorro com 1 ano'/>

                <Card
                    img='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    title='Max'
                    description='Cachorro com 1 ano'/>

                <Card
                    img='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    title='Max'
                    description='Cachorro com 1 ano'/>
            </Row>

            <Divider orientation='left'
             style={{
               color: '#3E92CC',
               fontFamily: 'Poppins',
               fontWeight: 700,
               fontSize: '32px'
             }}>Gatos</Divider>

            <Row gutter={[16, 16]} style={{ margin: '0 30px' }}>
                <Card
                    img='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    title='Max'
                    description='Cachorro com 1 ano'/>

                <Card
                    img='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    title='Max'
                    description='Cachorro com 1 ano'/>

                <Card
                    img='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    title='Max'
                    description='Cachorro com 1 ano'/>

                <Card
                    img='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    title='Max'
                    description='Cachorro com 1 ano'/>
            </Row>

            <Row gutter={[16, 16]} style={{ margin: '0 30px' }}>
                <Card
                    img='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    title='Max'
                    description='Cachorro com 1 ano'/>

                <Card
                    img='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    title='Max'
                    description='Cachorro com 1 ano'/>

                <Card
                    img='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    title='Max'
                    description='Cachorro com 1 ano'/>

                <Card
                    img='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    title='Max'
                    description='Cachorro com 1 ano'/>
            </Row>

          </Content>

      </Layout>
  )
}

export default Home
