import React from 'react';
import { Typography, Container, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterWrapper = styled('footer')({
  backgroundColor: 'purple',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
  marginTop: '50px',
});

const SocialLinks = styled('div')({
  marginTop: '10px',
});

const SocialIcon = styled('a')({
  color: 'white',
  marginLeft: '5px',
  marginRight: '5px',
  textDecoration: 'none',
  '&:hover': {
    color: '#CCCCCC',
  },
});

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Typography>&copy; 2024 XtremeReach. Todos os direitos reservados.</Typography>
        <SocialLinks>
          Siga-nos em 
          <IconButton href="#" className={SocialIcon}><FacebookIcon /></IconButton>
          <IconButton href="#" className={SocialIcon}><TwitterIcon /></IconButton>
          <IconButton href="#" className={SocialIcon}><InstagramIcon /></IconButton>
        </SocialLinks>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
