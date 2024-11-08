import React from 'react';
import { ConfigProvider, Input, Button, Form } from 'antd';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const onFinish = (values: any) => {
    console.log('Received values from form: ', values);
  };

  const navigate = useNavigate();
  return (
    <ConfigProvider>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        //backgroundColor: '#f0f2f5'

        backgroundImage: 'url(https://raw.githubusercontent.com/Igor-jair/2024-react-ui-libs/refs/heads/main/antd-demo/public/IMG-20241108-WA0011.jpg)', // URL da imagem de fundo
        backgroundSize: 'cover', // Faz a imagem cobrir todo o fundo
        backgroundPosition: 'top', // Centraliza a imagem
      }}>
        <Form
          name="signup"
          onFinish={onFinish}
          style={{ width: '300px', backgroundColor: '#f2eeff', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}
        >
          <h2 style={{ textAlign: 'center' }}>Cadastro</h2> {/* Título adicionado aqui */}
          
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
          >
            <Input placeholder="Nome" />
          </Form.Item>

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

          <Form.Item
            name="confirm"
            rules={[
              { required: true, message: 'Por favor, confirme sua senha!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('As senhas não correspondem!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirmar Senha" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }} onClick={() => navigate('/')}>
              Cadastrar
            </Button>
          </Form.Item>
          <a href="/">Fazer login</a>
        </Form>
      </div>
    </ConfigProvider>
  );
};

export default SignUp;
