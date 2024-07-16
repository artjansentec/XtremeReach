import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroCarousel from './components/HeroCarousel.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <HeroCarousel />
        <Container>
          <ServicesSection />
          <AboutSection />
        </Container>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
