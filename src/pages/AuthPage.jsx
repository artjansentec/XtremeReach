import React, { useState } from "react";
import {Container,Box,TextField,Link,CssBaseline,Grid,Typography,Button,} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import "../assets/css/AuthPage.css";

const theme = createTheme({
  palette: {
    primary: { main: "#6a0dad" }, // Roxo
    secondary: { main: "#ffcc00" }, // Amarelo
  },
});

function Login() {
  const [isCadastro, setIsCadastro] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Vídeo de fundo */}
      <Box className="background-video">
        <iframe
          src="https://www.youtube.com/embed/SSaGGG-L3DM?autoplay=1&loop=1&mute=1&controls=0&playlist=SSaGGG-L3DM&modestbranding=1&showinfo=0&rel=0"
          frameBorder="0"
          allow="autoplay; fullscreen"
          className="video-iframe"
        />
      </Box>

      <Navbar />

      {/* Container principal */}
      <Container component="main" maxWidth="xl" className="container">
        <Grid container justifyContent="center">
          <Grid item xl={5} sm={6} md={6} className="form-container">
            {/* Título */}
            <Typography variant="h3" fontWeight="bold" className="title">
              {isCadastro ? "Cadastro" : "Login"}
            </Typography>

            <Typography variant="h5" fontWeight="medium" mb={3} className="subtitle">
              {isCadastro ? "Crie sua conta agora!" : "Bem-vindo de volta!"}
            </Typography>

            {/* Formulário */}
            {isCadastro ? (
              <>
                <TextField label="Nome Completo" variant="standard" fullWidth margin="normal" required />
                <TextField label="E-mail" variant="standard" fullWidth margin="normal" required />
                <TextField label="Senha" variant="standard" fullWidth margin="normal" type="password" required />
                <TextField label="Confirmar Senha" variant="standard" fullWidth margin="normal" type="password" required sx={{ mb: 2 }} />

                <Button variant="contained" fullWidth className="btn">
                  Cadastrar
                </Button>

                <Button fullWidth className="switch-btn" onClick={() => setIsCadastro(false)}>
                  Já tenho uma conta
                </Button>
              </>
            ) : (
              <>
                <TextField label="E-mail" variant="standard" fullWidth margin="normal" required />
                <TextField label="Senha" variant="standard" fullWidth margin="normal" type="password" required sx={{ mb: 2 }} />

                <Button variant="contained" fullWidth className="btn">
                  Login
                </Button>

                <Typography variant="body1" textAlign="center" className="forgot-password">
                  <Link href="/esqueciSenha" className="link">
                    Esqueci minha senha
                  </Link>
                </Typography>

                <Button fullWidth className="switch-btn" onClick={() => setIsCadastro(true)}>
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