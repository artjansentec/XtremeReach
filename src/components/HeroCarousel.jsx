import React from 'react';
import { Typography, Button, Box, Container } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Carousel1 from '../assets/img/carrosel1.jpg';
import Carousel2 from '../assets/img/carrosel2.jpg';
import Carousel3 from '../assets/img/carrosel3.jpg';

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
        <Carousel 
            indicators={true}
            animation="slide"
            navButtonsAlwaysVisible={true}
            autoPlay
            interval={5000}
        >
            {items.map((item, i) => (
                <Box key={i} position="relative" height="80vh" width="100vw" overflow="hidden">
                    <img 
                        src={item.src} 
                        alt={item.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    <Container>
                        <Box 
                            position="absolute" 
                            top="50%" 
                            left="50%" 
                            sx={{ transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}
                        >
                            <Typography variant="h3" fontWeight="bold" gutterBottom>
                                {item.title}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                {item.description}
                            </Typography>
                            <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                                {item.buttonText}
                            </Button>
                        </Box>
                    </Container>
                </Box>
            ))}
        </Carousel>
    );
}

export default HeroCarousel;
