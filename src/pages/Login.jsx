import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Container, Box, TextField, Link, CssBaseline, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../components/Footer';
import logo from '../img/logoAbout.png';
import background from '../img/Background_Login.jpg';

const theme = createTheme({
  palette: {
    primary: { main: '#6a0dad' }, // Roxo
    secondary: { main: '#ffcc00' } // Amarelo
  },
});

function Login() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isCadastro, setIsCadastro] = useState(false);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Imagem de fundo */}
      <Box
        sx={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100vw', height: '100vh',
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: '-1',
        }}
      />

      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>XtremeReach</Typography>
          <Button color="inherit">Início</Button>
          <Button color="inherit" onClick={handleMenuOpen}>Serviços</Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Marketing Digital</MenuItem>
            <MenuItem onClick={handleMenuClose}>Campanhas de Mídia Social</MenuItem>
            <MenuItem onClick={handleMenuClose}>Promoção de Eventos</MenuItem>
          </Menu>
          <Button color="inherit">Sobre</Button>
          <Button color="inherit">Contato</Button>
          <Button variant="outlined" color="secondary" sx={{ marginRight: 2 }}>Logar</Button>
          <Button variant="contained" color="secondary">Cadastrar</Button>
        </Toolbar>
      </AppBar>

      {/* Container principal */}
      <Container component="main" maxWidth="xs" sx={{
        marginTop: 8, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', minHeight: '100vh'
      }}>
        
        <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '60vh', minWidth: '100vh' }}>
          <Grid item xs={12} sm={10} md={8} sx={{
            border: '1px solid transparent', borderRadius: '30px', padding: '40px',
            backdropFilter: 'blur(9px)', backgroundColor: 'rgba(245, 238, 238, 0.35)'
          }}>

            {/* Alternando entre Login e Cadastro */}
            <Typography variant="h3" fontWeight="900" sx={{
              fontFamily: 'Inter, sans-serif', color: '#87432D', textAlign: 'center'
            }}>
              {isCadastro ? "Cadastro" : "Login"}
            </Typography>

            <Typography variant="h5" fontWeight="fontWeightMedium" mb={3} sx={{
              fontFamily: 'Inter, sans-serif', color: '#000000', textAlign: 'center'
            }}>
              {isCadastro ? "Crie sua conta agora!" : "Bem-vindo de volta!"}
            </Typography>

            {/* Campos de Login */}
            {!isCadastro ? (
              <>
                <TextField required label="E-mail" variant="standard" fullWidth margin="normal"
                  sx={{ '& .MuiInputBase-input': { fontSize: '25px' } }} />
                <TextField required label="Senha" variant="standard" fullWidth margin="normal"
                  InputProps={{ type: 'password', style: { fontSize: '25px' } }}
                  sx={{ marginBottom: '20px' }} />

                <Button variant="contained" fullWidth sx={{
                  backgroundColor: '#F43734', color: '#FFFFFF', fontSize: 15, padding: '10px 0'
                }}>
                  Login
                </Button>

                <Link href="/esqueciSenha" sx={{
                  color: '#BA4300', textDecoration: 'none', borderBottom: '0.1vh solid #BA4300',
                  display: 'block', textAlign: 'center', marginTop: '15px'
                }}>
                  Esqueci minha senha
                </Link>

                {/* Botão para trocar para cadastro */}
                <Button fullWidth sx={{ mt: 2, textTransform: 'none' }}
                  onClick={() => setIsCadastro(true)}>
                  Criar conta
                </Button>
              </>
            ) : (
              /* Campos de Cadastro */
              <>
                <TextField required label="Nome Completo" variant="standard" fullWidth margin="normal"
                  sx={{ '& .MuiInputBase-input': { fontSize: '20px' } }} />
                <TextField required label="E-mail" variant="standard" fullWidth margin="normal"
                  sx={{ '& .MuiInputBase-input': { fontSize: '20px' } }} />
                <TextField required label="Senha" variant="standard" fullWidth margin="normal"
                  InputProps={{ type: 'password', style: { fontSize: '20px' } }} />
                <TextField required label="Confirmar Senha" variant="standard" fullWidth margin="normal"
                  InputProps={{ type: 'password', style: { fontSize: '20px' } }}
                  sx={{ marginBottom: '20px' }} />

                <Button variant="contained" fullWidth sx={{
                  backgroundColor: '#F43734', color: '#FFFFFF', fontSize: 15, padding: '10px 0'
                }}>
                  Cadastrar
                </Button>

                {/* 🔹 Botão para voltar para Login */}
                <Button fullWidth sx={{ mt: 2, textTransform: 'none' }}
                  onClick={() => setIsCadastro(false)}>
                  Já tenho uma conta
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
