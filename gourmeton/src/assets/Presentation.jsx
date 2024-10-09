import React from 'react';
import styled from 'styled-components';

const PresentationWrapper = styled.section`
  padding: 50px;
  text-align: center;
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
`;

const Text = styled.p`
  font-size: 1.1rem;
  max-width: 800px;
  margin: 20px auto;
`;

const Presentation = () => {
  return (
    <PresentationWrapper>
      <Title>Descubra os Benefícios do GourmetOn</Title>
      <Text>Entrega rápida, uma grande variedade de restaurantes e um sistema de pagamento super fácil. Encomende já sua comida favorita sem complicações!</Text>
    </PresentationWrapper>
  );
};

export default Presentation;
