import React from 'react';

import { Form, Layout, Input, Button } from 'antd';
import 'antd/dist/antd.css';

import Logo from '../assets/pata.svg'

const {Header, Content} = Layout


const Login: React.FC = () => {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
   <Layout style={{backgroundColor: '#3E92CC', height: '100vh', width: '100vw'}}>
     <Header  style={{backgroundColor: '#FFFFFF', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img src={Logo} alt=""/>
     </Header>

     <Content style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Form
         style={{
          backgroundColor: '#FFFFFF',
          width: '730px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '60px 40px',
          borderRadius: '32px'}}
         name="login"
         initialValues={{
           isInit: false,
         }}
         onFinish={onFinish}
         onFinishFailed={onFinishFailed}
         >

          <h1 style={{
            color: '#3E92CC',
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: '52px'
            }}>
              Login</h1>

          <span style={{
            color: '#8A898B',
            textAlign: 'center',
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontSize: '23px',
            margin: '-20px 0 20px 0'}}>
          Preencha os dados abaixo
          para entrar.</span>
        

                  <Form.Item
              style={{width: '100%'}}
              rules={[
                {
                  required: true,
                  message: 'O email é obrigatório',
                },
              ]}
            >
              <Input placeholder='Email' style={{width: '100%', borderRadius: '8px', backgroundColor: '#FCFCFC', borderColor: '#E6E6F0', height: '60px'}}/>
            </Form.Item>

            <Form.Item
              style={{width: '100%', marginBottom: '20px'}}
              rules={[
                {
                  required: true,
                  message: 'A senha é obrigatório',
                },
              ]}
            >
              <Input placeholder='Senha' style={{width: '100%', borderRadius: '8px', backgroundColor: '#FCFCFC', borderColor: '#E6E6F0', height: '60px'}}/>
            </Form.Item>

            <Button type="primary" htmlType="submit"
            style={{
              backgroundColor: '#81D197',
              width: '100%',
              height: '60px',
              borderRadius: '8px',
              border: 'none',
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize: '18px'}}>
                Entrar
              </Button>
       
        </Form>


     </Content>
   </Layout>

  )
}

export default Login;