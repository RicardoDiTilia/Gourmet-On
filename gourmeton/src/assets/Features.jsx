import React from 'react';
import styled from 'styled-components';

const FeaturesWrapper = styled.section`
  padding: 50px;
  display: flex;
  justify-content: space-around;
  background-color: #f9f9f9;
`;

const FeatureBox = styled.div`
  width: 30%;
  text-align: center;
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
`;

const Features = () => {
  return (
    <FeaturesWrapper>
      <FeatureBox>
        <Icon>🍔</Icon>
        <FeatureTitle>Variedade de Comidas</FeatureTitle>
        <FeatureDescription>Encontre todos os tipos de comida na nossa plataforma.</FeatureDescription>
      </FeatureBox>
      <FeatureBox>
        <Icon>⚡</Icon>
        <FeatureTitle>Entrega Rápida</FeatureTitle>
        <FeatureDescription>Receba seus pratos favoritos no menor tempo possível.</FeatureDescription>
      </FeatureBox>
      <FeatureBox>
        <Icon>💳</Icon>
        <FeatureTitle>Pagamento Fácil</FeatureTitle>
        <FeatureDescription>Pague com cartões de crédito, débito ou carteiras digitais.</FeatureDescription>
      </FeatureBox>
    </FeaturesWrapper>
  );
};

export default Features;
