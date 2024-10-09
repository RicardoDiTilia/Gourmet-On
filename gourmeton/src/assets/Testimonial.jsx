import React from 'react';
import styled from 'styled-components';

const TestimonialsWrapper = styled.section`
  padding: 50px;
  background-color: #fff;
  text-align: center;
`;

const Testimonial = styled.div`
  margin-bottom: 30px;
  font-style: italic;
`;

const Name = styled.p`
  font-weight: bold;
  margin-top: 10px;
`;

const Testimonials = () => {
  return (
    <TestimonialsWrapper>
      <h2>O que nossos clientes dizem</h2>
      <Testimonial>
        "O GourmetOn mudou a forma como peço comida. Tudo é rápido e eficiente!"
        <Name>- João Silva</Name>
      </Testimonial>
      <Testimonial>
        "A variedade de restaurantes é impressionante. Adoro!"
        <Name>- Maria Oliveira</Name>
      </Testimonial>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
