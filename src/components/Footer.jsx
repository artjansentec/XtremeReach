import React from 'react';
import { Typography, Container, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterWrapper = styled('footer')({
  backgroundColor: '#6a0dad',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
  marginTop: '116px',
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
        <Typography>&copy; 2025 XtremeReach. Todos os direitos reservados.</Typography>
        <SocialLinks>
          Siga-nos em 
          <IconButton href="#" component={SocialIcon}> <FacebookIcon /></IconButton>
          <IconButton href="#" component={SocialIcon}> <TwitterIcon /></IconButton>
          <IconButton href="#" component={SocialIcon}> <InstagramIcon /></IconButton>
        </SocialLinks>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
