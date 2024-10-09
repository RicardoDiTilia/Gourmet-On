import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  height: 100vh;
  background: url('/path-to-your-image.jpg') no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const Button = styled.a`
  background-color: #ff6347;
  padding: 15px 30px;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  transition: background-color 0.3s;
  &:hover {
    background-color: #e5533d;
  }
`;

const HeroSection = () => {
  return (
    <HeroWrapper>
      <Title>GourmetOn</Title>
      <Description>O melhor delivery de comida ao seu alcance!</Description>
      <Button href="#download">Baixe o App Agora</Button>
    </HeroWrapper>
  );
};

export default HeroSection;
