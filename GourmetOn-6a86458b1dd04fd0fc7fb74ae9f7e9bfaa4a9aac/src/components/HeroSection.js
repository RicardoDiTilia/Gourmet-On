import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  background-image: url('../images/banner.png');
  background-size: cover;
  background-position: center;
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  padding: 100px 20px;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <h1>GourmetOn</h1>
      <p>Seu app de delivery favorito com entrega rápida e fácil.</p>
      <button><a href="#">Baixar Agora</a></button>
    </HeroContainer>
  );
};

export default HeroSection;
