import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { Layout, Button } from 'antd'
import 'antd/dist/antd.css'

const { Content } = Layout

const Login: React.FC = () => {
  const { loginWithRedirect } = useAuth0()

  return (
   <Layout style={{
     backgroundColor: '#3E92CC',
     height: '100vh',
     width: '100vw'
   }}>

     <Content style={{
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center'
     }}>

        <div
         style={{
           backgroundColor: '#FFFFFF',
           width: '730px',
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           padding: '60px 40px',
           borderRadius: '32px'
         }}
         >

          <h1 style={{
            color: '#3E92CC',
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: '52px'
          }}>
              Pets</h1>

          <span style={{
            color: '#8A898B',
            textAlign: 'center',
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontSize: '23px',
            margin: '-20px 0 20px 0'
          }}>
          Faça login para procurar pets!</span>

            <Button
              onClick={() => loginWithRedirect()}
              type="primary"
              style={{
                backgroundColor: '#81D197',
                width: '60%',
                height: '60px',
                borderRadius: '8px',
                border: 'none',
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: '18px'
              }}>
                Entrar
              </Button>

        </div>

     </Content>
   </Layout>

  )
}

export default Login
