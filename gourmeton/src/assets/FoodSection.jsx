// src/components/FoodSection.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchFoodItems } from '../APIService';

// Estilos usando Styled Components
const SectionWrapper = styled.section`
  padding: 50px;
  background-color: #f8f9fa;
  text-align: center;
`;

// Adiciona o FoodGrid aqui
const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); // Se adapta ao tamanho da tela
  gap: 20px;
  margin-top: 20px;
`;

const FoodCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const FoodImage = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  height: 200px;
`;

const FoodTitle = styled.h3`
  margin: 15px 0 10px;
  font-size: 1.5rem;
  color: #333;
`;

const FoodDescription = styled.p`
  color: #666;
`;

// Componente principal para a seção de comidas
const FoodSection = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const getFoodItems = async () => {
      const items = await fetchFoodItems();
      setFoods(items);
    };
    getFoodItems();
  }, []);

  return (
    <SectionWrapper>
      <h2>Explore Nossos Pratos</h2>
      <FoodGrid> {/* Usa o FoodGrid para organizar as comidas */}
        {foods.map((food) => (
          <FoodCard key={food.id}>
            <FoodImage src={food.image} alt={food.title} />
            <FoodTitle>{food.title}</FoodTitle>
            <FoodDescription>{food.description || 'Delicioso prato disponível!'}</FoodDescription>
          </FoodCard>
        ))}
      </FoodGrid>
    </SectionWrapper>
  );
};

export default FoodSection;
