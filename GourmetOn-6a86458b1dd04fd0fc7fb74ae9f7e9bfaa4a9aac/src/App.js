import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HeroSection />
      <About />
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
