import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
  padding: 50px 20px;
  color: ${({ theme }) => theme.colors.text};
`;

const About = () => {
  return (
    <AboutContainer>
      <h2>Por que usar o GourmetOn?</h2>
      <p>Entrega rápida na porta da sua casa.</p>
      <p>Variedade de restaurantes e pratos deliciosos.</p>
      <p>Pagamento fácil e seguro direto no app.</p>
    </AboutContainer>
  );
};

export default About;
