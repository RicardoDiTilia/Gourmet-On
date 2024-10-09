import React, { useEffect, useState } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import HeroSection from './assets/HeroSection';
import Presentation from './assets/Presentation';
import Features from './assets/Features';
import Testimonials from './assets/Testimonial';
import ContactForm from './assets/ContactForm';
import Footer from './assets/Footer';

function App() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
      const response = await fetch(`https://api.spoonacular.com/recipes/random?number=3&apiKey=${apiKey}`);
      const data = await response.json();
      setDishes(data.recipes);
    };

    fetchDishes();
  }, []);

  return (
    <>
      <GlobalStyle />
      <HeroSection />
      <Presentation />
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
