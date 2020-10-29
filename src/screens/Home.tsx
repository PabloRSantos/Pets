import React from 'react'

import { Layout, Divider, Row } from 'antd'

import Card from '../Components/card'

import Cat from '../assets/cat.svg'
import Dog from '../assets/dog.svg'
import Horse from '../assets/horse.svg'
import Sheep from '../assets/sheep.svg'
import Logout from '../assets/logout.svg'
import { Link } from 'react-scroll'

const { Sider, Content } = Layout

const Home: React.FC = () => {
  const iconsSideStyle = {
    margin: '10px 0',
    width: '50px'
  }

  return (
      <Layout>
          <Sider
          width={100}
          style={{
            backgroundColor: '#3E92CC',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
              <div className="Icons"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100vh',
                  padding: '30px 0'

                }}>
            <Link to='Dogs' smooth={true} duration={1000}>
                <img src={Dog} alt="dog" style={iconsSideStyle}/>
            </Link>
            <Link to='cats' smooth={true} duration={1000}>
                <img src={Cat} alt="Cat" style={iconsSideStyle}/>
            </Link>
            <Link to='horses' smooth={true} duration={1000}>
                <img src={Horse} alt="Horse" style={iconsSideStyle}/>
            </Link>
            <Link to='ovelhas' smooth={true} duration={1000}>
                <img src={Sheep} alt="Sheep" style={iconsSideStyle}/>
            </Link>

                <img src={Logout} alt="sair" style={iconsSideStyle}/>

              </div>

          </Sider>

          <Content style={{
            backgroundColor: '#FFFFFF',
            height: '100vh'
          }}>
            <div id="Dogs">
                <Divider orientation='left'
                style={{
                  color: '#3E92CC',
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: '32px'
                }}>Cachorros</Divider>
                <Row gutter={[16, 16]} style={{ margin: '0 30px' }}>
                    <Card
                        img='https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                        title='Max'
                        description='Cachorro com 1 ano'/>

                    <Card
                        img='https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                        title='Max'
                        description='Cachorro com 1 ano'/>

                    <Card
                        img='https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                        title='Max'
                        description='Cachorro com 1 ano'/>

                    <Card
                        img='https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                        title='Max'
                        description='Cachorro com 1 ano'/>
                </Row>
            </div>

            <div id='cat'>
                <Divider orientation='left'
                style={{
                  color: '#3E92CC',
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: '32px'
                }}>Gatos</Divider>

                <Row gutter={[16, 16]} style={{ margin: '0 30px' }}>
                    <Card
                        img='https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1401&q=80'
                        title='Max'
                        description='Cachorro com 1 ano'/>

                    <Card
                        img='https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1401&q=80'
                        title='Max'
                        description='Cachorro com 1 ano'/>

                    <Card
                        img='https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1401&q=80'
                        title='Max'
                        description='Cachorro com 1 ano'/>

                    <Card
                        img='https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1401&q=80'
                        title='Max'
                        description='Cachorro com 1 ano'/>
                </Row>
            </div>

            <div id="horses">
                <Divider orientation='left'
                style={{
                  color: '#3E92CC',
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: '32px'
                }}>Cavalos</Divider>

                <Row gutter={[16, 16]} style={{ margin: '0 30px' }}>
                    <Card
                        img='https://images.unsplash.com/flagged/photo-1557296126-ae91316e5746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                        title='Max'
                        description='Cachorro com 1 ano'/>

                    <Card
                        img='https://images.unsplash.com/flagged/photo-1557296126-ae91316e5746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                        title='Max'
                        description='Cachorro com 1 ano'/>

                    <Card
                        img='https://images.unsplash.com/flagged/photo-1557296126-ae91316e5746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                        title='Max'
                        description='Cachorro com 1 ano'/>

                    <Card
                        img='https://images.unsplash.com/flagged/photo-1557296126-ae91316e5746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                        title='Max'
                        description='Cachorro com 1 ano'/>
                </Row>
            </div>

             <div id="ovelhas">
                <Divider orientation='left'
                    style={{
                      color: '#3E92CC',
                      fontFamily: 'Poppins',
                      fontWeight: 700,
                      fontSize: '32px'
                    }}>Ovelhas</Divider>

                <Row gutter={[16, 16]} style={{ margin: '0 30px' }}>
                    <Card
                        img='https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                        title='Max'
                        description='Cachorro com 1 ano'/>

                    <Card
                        img='https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                        title='Max'
                        description='Cachorro com 1 ano'/>

                    <Card
                        img='https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                        title='Max'
                        description='Cachorro com 1 ano'/>

                    <Card
                        img='https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                        title='Max'
                        description='Cachorro com 1 ano'/>
                </Row>
            </div>

          </Content>

      </Layout>
  )
}

export default Home
