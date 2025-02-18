
import React from 'react';
import { Container, Grid, Typography, Button, CardMedia } from '@mui/material';
import logoAbout from '../assets/img/logoAbout.png'

function AboutSection() {
  return (
    <Container sx={{ marginTop: 5, backgroundColor: 'lightgrey', padding: 5 }}>
      <Grid container alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4"><i className="fas fa-users"></i> Sobre Nós</Typography>
          <Typography>Na XtremeReach, somos especializados em marketing para esportes radicais. Nossa equipe de especialistas é apaixonada por esportes de ação e dedicada a ajudar sua marca a alcançar novos patamares.</Typography>
          <Button variant="contained" color="secondary">Leia Mais</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardMedia component="img" image={logoAbout} alt="Sobre Nós" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutSection;
