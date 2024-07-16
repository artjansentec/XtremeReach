import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Carousel1 from '../img/carrosel1.jpg';
import Carousel2 from '../img/carrosel2.jpg';
import Carousel3 from '../img/carrosel3.jpg';

const items = [
    {
      src: Carousel1,
      title: "Bem-vindo à XtremeReach",
      description: "Seu Parceiro Definitivo de Marketing para Esportes Radicais",
      buttonText: "Saiba Mais"
    },
    {
      src: Carousel2,
      title: "Maximize seu Alcance",
      description: "Engaje com seu público como nunca antes",
      buttonText: "Descubra Mais"
    },
    {
      src: Carousel3,
      title: "Impulsione suas Campanhas",
      description: "Deixe-nos levar sua marca a novos patamares",
      buttonText: "Comece Agora"
    }
  ];
  
  function HeroCarousel() {
    return (
      <Carousel>
          {items.map((item, i) => (
          <Box key={i} position="relative" height="80vh" width="100vw" overflow="hidden">
              <img src={item.src} alt={item.title} style={{ width: '100%', height: 'auto' }} />
              <Box position="absolute" top="50%" left="35%" textAlign="center" color="white">
              <Typography variant="h4" gutterBottom>{item.title}</Typography>
              <Typography variant="h6" gutterBottom>{item.description}</Typography>
              <Button variant="contained" color="secondary">{item.buttonText}</Button>
              </Box>
          </Box>
          ))}
      </Carousel>
    );
  }
  
  export default HeroCarousel;