import React from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Container, Box, TextField, Link, CssBaseline, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../components/Footer';
import logo from '../img/logoAbout.png';
import background from '../img/Background_Login.jpg';

//<img src={logo} alt="Logo" style={{ maxHeight: '30vh', width: 'auto' }} />

const theme = createTheme({
  palette: {
    primary: {
      main: '#6a0dad', // Cor roxa
    },
    secondary: {
      main: '#ffcc00', // Cor amarela
    },
  },
});

function Login() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            XtremeReach
          </Typography>
          <Button color="inherit">Início</Button>
          <Button color="inherit" onClick={handleMenuOpen}>Serviços</Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
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

      <Container component="main" maxWidth="xs" sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100%' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: '-1',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 4,
          }}
        >
          
        </Box>

        <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '60vh', minWidth:'100vh' }}>
          <Grid item xs={12} sm={10} md={8} sx={{ border: '1px solid transparent', borderRadius: '30px', padding: '40px', backdropFilter: 'blur(9px)', backgroundColor: 'rgba(245, 238, 238, 0.35)' }}>
            <Typography variant="h3" fontWeight="fontWeightMedium" sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '900', color: '#87432D', textAlign: 'center' }}>
              Login
            </Typography>

            <Typography variant="h5" fontWeight="fontWeightMedium" mb={3} sx={{ fontFamily: 'Inter, sans-serif', color: '#000000', textAlign: 'center' }}>
              Bem vindo de volta!
            </Typography>

            <TextField
              required
              size="medium"
              label="E-mail"
              name="username"
              variant="standard"
              fullWidth
              margin="normal"
              sx={{ '& .MuiInputBase-input': { fontSize: '25px' } }}
            />
            <TextField
              required
              size="medium"
              name="password"
              label="Senha"
              variant="standard"
              fullWidth
              margin="normal"
              InputProps={{
                type: 'password',
                style: { fontSize: '25px' },
              }}
              sx={{ marginBottom: '40px' }}
            />
            <Grid container direction="column" alignItems="center" sx={{ justifyContent: 'center', textAlign: 'center' }}>
              <Grid item xs={12} sx={{ maxWidth: '300px', width: '100%', padding: '0 16px' }}>
                <Button variant="contained" type="submit" style={{ backgroundColor: '#F43734', color: '#FFFFFF', fontSize: 15, width: '100%', padding: '10px 0' }}>
                  Login
                </Button>
              </Grid>

              <Grid item xs={12} sx={{ textAlign: 'center', marginTop: '15px' }}>
                <Link
                  style={{ color: '#BA4300', textDecoration: 'none', borderBottom: '0.1vh solid #BA4300', display: 'flex', justifyContent: 'center', width: '100%' }}
                  sx={{ fontSize: 15 }}
                  href="/esqueciSenha"
                  variant="body2"
                >
                  Esqueci minha senha
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    

    </ThemeProvider>
  );
}

export default Login;
