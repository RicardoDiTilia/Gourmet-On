import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  padding: 50px 20px;
`;

const FeatureGrid = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: 20px;
`;

const FeatureBox = styled.div`
  width: 30%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Features = () => {
  return (
    <FeaturesContainer>
      <h2>Funcionalidades do App</h2>
      <FeatureGrid>
        <FeatureBox>
          <h3>Busca por tipo de comida</h3>
          <p>Encontre pratos por categorias como pizza, sushi, hambúrguer e muito mais!</p>
        </FeatureBox>
        <FeatureBox>
          <h3>Filtros avançados</h3>
          <p>Refine sua busca por preço, distância e avaliações.</p>
        </FeatureBox>
        <FeatureBox>
          <h3>Pagamento fácil</h3>
          <p>Pague com segurança via cartão de crédito, débito ou Pix.</p>
        </FeatureBox>
      </FeatureGrid>
    </FeaturesContainer>
  );
};

export default Features;
