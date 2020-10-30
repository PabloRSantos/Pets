import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import 'antd/dist/antd.css'

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
    margin: '15px 0',
    width: '50px',
    cursor: 'pointer'
  }

  return (
      <Layout>
          <Sider
          width={80}
          style={{
            backgroundColor: '#3E92CC',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'auto',
            position: 'sticky',
            top: '0',
            left: '0',
            height: '100vh'
          }}>
              <section className="Icons"
                style={{
                  height: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignSelf: 'center',
                  padding: '10vh 0'
                }}>
                    <Link to='dogs' smooth={true} duration={1000}>
                        <img src={Dog} alt="dog" style={iconsSideStyle}/>
                    </Link>

                    <Link to='cats' smooth={true} duration={1000}>
                        <img src={Cat} alt="cat" style={iconsSideStyle}/>
                    </Link>

                    <Link to='horses' smooth={true} duration={1000}>
                        <img src={Horse} alt="Horse" style={iconsSideStyle}/>
                    </Link>

                    <Link to='sheeps' smooth={true} duration={1000}>
                        <img src={Sheep} alt="Sheep" style={iconsSideStyle}/>
                    </Link>

                      <img onClick={() => logout()} src={Logout} alt="sair" style={iconsSideStyle}/>

              </section>

          </Sider>

          <Content style={{
            backgroundColor: '#FFFFFF',
            minHeight: '100vh',
            padding: '15px 5%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>

              <section
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
                  marginTop: '5px',
                  fontWeight: 500,
                  fontSize: '23px'
                }}>Olá, {user.name}, adote um pet!</h1>

              </section>

            <section id="dogs" >
                <Divider orientation='left'
                style={{
                  color: '#3E92CC',
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: '32px'
                }}>Cachorros</Divider>

                <Row gutter={[16, 16]} style={{ margin: '0 30px', display: 'flex' }}>
                    {datas.dogs.map((dog, index) => (
                        <Card
                        key={index}
                        img={dog.img}
                        title={dog.name}
                        description={dog.description}/>
                    ))}
                </Row>
            </section>

            <section id='cats'>
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
            </section>

            <section id="horses">
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
            </section>

             <section id="sheeps">
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
            </section>

          </Content>

      </Layout>
  )
}

export default Home
