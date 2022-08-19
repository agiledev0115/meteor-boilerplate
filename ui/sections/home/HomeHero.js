import React from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Stack } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 700,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

const HeroOverlayStyle = styled('img')({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

const HeroImgStyle = styled('img')(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '75vh'
  }
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  return (
    <Box>
      <RootStyle>
        <HeroOverlayStyle alt="overlay" src="/static/home/overlay.svg" />

        <HeroImgStyle alt="hero" src="/static/home/hero.png" />

        <Container>
          <ContentStyle>
            <Typography variant="h1" sx={{ color: 'common.white' }}>
              Start a <br />
              new project <br /> with
              <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                &nbsp;Meteor Starter Kit
              </Typography>
            </Typography>

            <Typography sx={{ color: 'common.white' }}>
              The starting point for your next project based on easy-to-customize this template helps you build apps
              faster and better.
            </Typography>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </Box>
  );
}
