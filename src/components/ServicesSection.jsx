import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

const services = [
  {
    icon: "fas fa-chart-line",
    title: "Marketing Digital",
    description: "Alcance seu público com precisão e eficiência."
  },
  {
    icon: "fas fa-thumbs-up",
    title: "Campanhas de Mídia Social",
    description: "Engaje com seus fãs em todas as principais plataformas."
  },
  {
    icon: "fas fa-bullhorn",
    title: "Promoção de Eventos",
    description: "Faça seus eventos um sucesso massivo com nossa expertise."
  }
];

function ServicesSection() {
  return (
    <Container sx={{ marginTop: 5 }}>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ 
              '&:hover': {
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
              }
            }}>
              <CardContent>
                <Typography variant="h5"><i className={service.icon}></i> {service.title}</Typography>
                <Typography>{service.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ServicesSection;
