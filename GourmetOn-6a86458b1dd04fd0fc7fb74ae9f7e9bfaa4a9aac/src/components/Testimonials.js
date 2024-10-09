import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 50px 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

const TestimonialBox = styled.div`
  margin-bottom: 20px;
`;

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <h2>O que nossos clientes dizem?</h2>
      <TestimonialBox>
        <p>"GourmetOn me salva sempre quando preciso de uma refeição rápida e saborosa!" - Ana</p>
      </TestimonialBox>
      <TestimonialBox>
        <p>"Variedade incrível e sempre entregam no horário. Recomendo!" - Pedro</p>
      </TestimonialBox>
      <TestimonialBox>
        <p>"Facilidade de pagamento e muitos restaurantes bons. Adoro o app!" - Carla</p>
      </TestimonialBox>
    </TestimonialsContainer>
  );
};

export default Testimonials;
