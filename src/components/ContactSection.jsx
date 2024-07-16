import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function ContactSection() {
  return (
    <Container sx={{ marginTop: 5, textAlign: 'center' }}>
      <Typography variant="h4"><i className="fas fa-envelope"></i> Contate-Nos</Typography>
      <Typography>Tem alguma dúvida? Adoraríamos ouvir de você.</Typography>
      <Button variant="contained" color="secondary">Entre em Contato</Button>
    </Container>
  );
}

export default ContactSection;
