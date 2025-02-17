import React, { useState } from 'react';
import { Container, Box, TextField, Link, CssBaseline, Grid, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../components/Navbar';

const theme = createTheme({
  palette: {
    primary: { main: '#6a0dad' }, // Roxo
    secondary: { main: '#ffcc00' } // Amarelo
  },
});

function Login() {
  const [isCadastro, setIsCadastro] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Vídeo de fundo */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: '-1',
          overflow: 'hidden',
        }}
      >
        <iframe 
          src="https://www.youtube.com/embed/SSaGGG-L3DM?autoplay=1&loop=1&mute=1&controls=0&playlist=SSaGGG-L3DM&modestbranding=1&showinfo=0&rel=0" 
          frameBorder="0" 
          allow="autoplay; fullscreen"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '56.25vw',
            minHeight: '100vh',
            minWidth: '177.78vh',
            objectFit: 'cover',
            pointerEvents: 'none',
          }}
        />
      </Box>

      <Navbar />

      {/* Container principal */}
      <Container component="main" maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh'}}>
        <Grid container justifyContent="center">
          <Grid item xl={5} sm={6} md={6} sx={{
            borderRadius: '30px', padding: '40px',
            backdropFilter: 'blur(9px)', backgroundColor: 'rgba(245, 238, 238, 0.35)'
          }}>

            {/* Título */}
            <Typography variant="h3" fontWeight="bold" sx={{ color: '#6a0dad', textAlign: 'center' }}>
              {isCadastro ? "Cadastro" : "Login"}
            </Typography>

            <Typography variant="h5" fontWeight="medium" mb={3} sx={{ textAlign: 'center' }}>
              {isCadastro ? "Crie sua conta agora!" : "Bem-vindo de volta!"}
            </Typography>

            {/* Formulário */}
            {isCadastro ? (
              <>
                <TextField label="Nome Completo" variant="standard" fullWidth margin="normal" required />
                <TextField label="E-mail" variant="standard" fullWidth margin="normal" required />
                <TextField label="Senha" variant="standard" fullWidth margin="normal" type="password" required />
                <TextField label="Confirmar Senha" variant="standard" fullWidth margin="normal" type="password" required sx={{ mb: 2 }} />

                <Button variant="contained" fullWidth sx={{ backgroundColor: '#6a0dad', color: '#fff', fontSize: 15, py: 1.5 }}>
                  Cadastrar
                </Button>

                <Button fullWidth sx={{ mt: 2, textTransform: 'none' }} onClick={() => setIsCadastro(false)}>
                  Já tenho uma conta
                </Button>
              </>
            ) : (
              <>
                <TextField label="E-mail" variant="standard" fullWidth margin="normal" required />
                <TextField label="Senha" variant="standard" fullWidth margin="normal" type="password" required sx={{ mb: 2 }} />

                <Button variant="contained" fullWidth sx={{ backgroundColor: '#6a0dad', color: '#fff', fontSize: 15, py: 1.5 }}>
                  Login
                </Button>

                <Typography variant="body1" textAlign="center" sx={{ mt: 2 }}>
                  <Link href="/esqueciSenha" sx={{ color: '#6a0dad', textDecoration: 'none' }}>
                    Esqueci minha senha
                  </Link>
                </Typography>

                <Button fullWidth sx={{ mt: 2, textTransform: 'none' }} onClick={() => setIsCadastro(true)}>
                  Criar conta
                </Button>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
