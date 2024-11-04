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

        backgroundImage: 'url(https://cdn.discordapp.com/attachments/894662134062018572/1303068569071915039/1303066019983527946remix-1730746148271.png?ex=672a68ac&is=6729172c&hm=21db219529f4cc2a6f9cd56b9a379a325241d61cccd950824b3137b5cb5408d0&)', // URL da imagem de fundo
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
