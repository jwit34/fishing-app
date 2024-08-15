import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import HeroImage from './Hero_Image.jpg'; // Ensure this path is correct

function Hero() {
  return (
    <Box
      sx={{
        height: '75vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        margin: 0,
        padding: 0,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          paddingX: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            marginBottom: 2,
            fontFamily: 'Poppins, sans-serif',
            color: '#fff',
          }}
        >
          The Most Trusted Online Fishing Tournament Platform
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            marginBottom: 4,
            fontFamily: 'Roboto, sans-serif',
            color: '#e0e0e0',
          }}
        >
          Join tournaments from anywhere, submit your catch, and win cash prizes.
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="/SignUp"
          sx={{
            backgroundColor: '#d6b98d',
            color: '#ffffff',
            paddingX: 4,
            paddingY: 1.5,
            borderRadius: '25px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            '&:hover': { backgroundColor: '#b3946d' },
          }}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
}

export default Hero;
