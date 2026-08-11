import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './landing/Header';
import Hero from './landing/Hero';
import HowItWorks from './landing/HowItWorks';
import About from './landing/About';
import Contact from './landing/Contact';
import Footer from './landing/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#4caf50',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default function LandingPage() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const targetSection = sessionStorage.getItem('scrollTo');
    if (targetSection) {
      scrollToSection(targetSection);
      sessionStorage.removeItem('scrollTo');
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <HowItWorks />
      <About />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}
