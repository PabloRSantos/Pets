import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { Layout, Divider, Row } from 'antd'

import Card from '../Components/card'

import Cat from '../assets/cat.svg'
import Dog from '../assets/dog.svg'
import Horse from '../assets/horse.svg'
import Sheep from '../assets/sheep.svg'
import Logout from '../assets/logout.svg'
import { Link } from 'react-scroll'

import datas from '../fakeDatas'

const { Sider, Content } = Layout

const Home: React.FC = () => {
  const { logout, user } = useAuth0()

  const iconsSideStyle = {
    margin: '10px 0',
    width: '50px',
    cursor: 'pointer'
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

              <img onClick={() => logout()} src={Logout} alt="sair" style={iconsSideStyle}/>

              </div>

          </Sider>

          <Content style={{
            backgroundColor: '#FFFFFF',
            height: '100vh',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
              <div
                id='user'
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>

                <img src={user.picture}
                    alt={user.name}
                    style={{
                      borderRadius: '50%',
                      width: '75px'
                    }}/>

                <h1 style={{
                  color: '#8A898B',
                  textAlign: 'center',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  fontSize: '23px'
                }}>Olá, {user.name}, adote um pet!</h1>
              </div>

            <div id="Dogs">
                <Divider orientation='left'
                style={{
                  color: '#3E92CC',
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: '32px'
                }}>Cachorros</Divider>

                <Row gutter={[16, 16]} style={{ margin: '0 30px' }}>
                    {datas.dogs.map((dog, index) => (
                        <Card
                        key={index}
                        img={dog.img}
                        title={dog.name}
                        description={dog.description}/>
                    ))}
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
                     {datas.cats.map((cat, index) => (
                        <Card
                        key={index}
                        img={cat.img}
                        title={cat.name}
                        description={cat.description}/>
                     ))}

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
                    {datas.horses.map((horse, index) => (
                            <Card
                            key={index}
                            img={horse.img}
                            title={horse.name}
                            description={horse.description}/>
                    ))}
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
                    {datas.sheeps.map((sheep, index) => (
                            <Card
                            key={index}
                            img={sheep.img}
                            title={sheep.name}
                            description={sheep.description}/>
                    ))}
                </Row>
            </div>

          </Content>

      </Layout>
  )
}

export default Home
