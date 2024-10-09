import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  padding: 50px 20px;
  text-align: center;
`;

const Form = styled.form`
  display: inline-block;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
`;

const Button = styled.button`
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
`;

const ContactForm = () => {
  return (
    <ContactContainer>
      <h2>Cadastre-se para novidades</h2>
      <Form>
        <Input type="email" placeholder="Seu e-mail" required />
        <Button type="submit">Cadastrar</Button>
      </Form>
    </ContactContainer>
  );
};

export default ContactForm;
