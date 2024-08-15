import React from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import EventIcon from '@mui/icons-material/Event'; // For frequency and variety of tournaments
import ScoreIcon from '@mui/icons-material/Leaderboard'; // For real-time scoring
import SecurityIcon from '@mui/icons-material/Security'; // For cheat detection
import LockIcon from '@mui/icons-material/Lock'; // For encryption

function HighlightsSection() {
  return (
    <Box sx={{ backgroundColor: '#f4f4f4', paddingY: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <EventIcon fontSize="large" sx={{ color: '#2a5e4f', marginBottom: 2 }} />
              <Typography variant="h6" sx={{ color: '#2a5e4f', fontWeight: 'bold' }}>
                Tournament Options
              </Typography>
              <Typography variant="body2" sx={{ color: '#6c757d' }}>
                Choose from a wide range of tournaments, 
                varying in target species, location, and waterbodies.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <ScoreIcon fontSize="large" sx={{ color: '#2a5e4f', marginBottom: 2 }} />
              <Typography variant="h6" sx={{ color: '#2a5e4f', fontWeight: 'bold' }}>
                Real-Time Scoring
              </Typography>
              <Typography variant="body2" sx={{ color: '#6c757d' }}>
                Track your progress with real-time leaderboards that update as catches are submitted.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <SecurityIcon fontSize="large" sx={{ color: '#2a5e4f', marginBottom: 2 }} />
              <Typography variant="h6" sx={{ color: '#2a5e4f', fontWeight: 'bold' }}>
                Cheat Detection
              </Typography>
              <Typography variant="body2" sx={{ color: '#6c757d' }}>
                Our advanced algorithms verify geolocation, detect image alterations, and ensure 
                the authenticity of catches using our secure measuring boards.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <LockIcon fontSize="large" sx={{ color: '#2a5e4f', marginBottom: 2 }} />
              <Typography variant="h6" sx={{ color: '#2a5e4f', fontWeight: 'bold' }}>
                Secure Transactions
              </Typography>
              <Typography variant="body2" sx={{ color: '#6c757d' }}>
                We use bank-grade encryption to ensure your transactions and personal information 
                are always safe.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" sx={{ paddingY: 6 }}>
          <Button
            variant="contained"
            size="large"
            href="/SignUp"
            sx={{
              backgroundColor: '#2a5e4f',
              color: '#ffffff',
              paddingX: 5,
              paddingY: 1.5,
              borderRadius: '25px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              '&:hover': { backgroundColor: '#204c3d' },
            }}
          >
            Join the Competition
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default HighlightsSection;
