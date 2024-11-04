import React from 'react';
import { ConfigProvider, Input, Button, Form } from 'antd';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
  const onFinish = (values: any) => {
    console.log('Received values from form: ', values);
  };

//   const navigate = useNavigate();
  return (
    <ConfigProvider>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        // backgroundColor: '#f0f2f5'

        backgroundImage: 'url(https://avatars.githubusercontent.com/u/947801?v=4)', // URL da imagem de fundo
        backgroundSize: 'cover', // Faz a imagem cobrir todo o fundo
        backgroundPosition: 'center', // Centraliza a imagem
      }}>
        <Form
          name="login"
          onFinish={onFinish}
          style={{ width: '300px', backgroundColor: '#f2eeff', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}
        >
          <h2 style={{ textAlign: 'center' }}>Login</h2> {/* Título adicionado aqui */}
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Por favor, insira seu e-mail!' }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
          >
            <Input.Password placeholder="Senha" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }} >  {/* onClick={() => navigate('/signup')} */}
              Login
            </Button>
          </Form.Item>

          <a href="/signup">Fazer cadastro</a>
        </Form>
      </div>
    </ConfigProvider>
  );
};

export default Login;