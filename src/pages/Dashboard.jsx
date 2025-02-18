import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import CardInfo from '../components/CardInfo';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div>
      <Navbar />

      {/* Conteúdo da Dashboard */}
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4" sx={{ marginBottom: 4, textAlign: 'center' }}>
          Bem-vindo à Dashboard
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <CardInfo title="Usuários Ativos" value="1,240" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardInfo title="Visitas Hoje" value="587" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardInfo title="Vendas no Mês" value="320" />
          </Grid>
        </Grid>

        {/* Gráficos ou outras informações */}
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Gráfico de Desempenho
          </Typography>
          {/* Aqui podemos inserir um gráfico ou outros elementos */}
          <Box sx={{ width: '100%', height: 300, backgroundColor: '#f4f4f4' }}>
          </Box>
        </Box>
      </Container>

      <Footer />
    </div>
  );
};

export default Dashboard;
