import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EventIcon from '@mui/icons-material/Event';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

function HowItWorks() {
  return (
    <Box sx={{ backgroundColor: '#ffffff', paddingY: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ color: '#2a5e4f', fontWeight: 'bold', marginBottom: 6 }}>
          How It Works
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <AccountCircleIcon fontSize="large" sx={{ color: '#2a5e4f', marginBottom: 2 }} />
              <Typography variant="h6" sx={{ color: '#2a5e4f', fontWeight: 'bold' }}>
                Create Your Account
              </Typography>
              <Typography variant="body2" sx={{ color: '#6c757d' }}>
                Sign up and complete your profile to start participating in tournaments.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <EventIcon fontSize="large" sx={{ color: '#2a5e4f', marginBottom: 2 }} />
              <Typography variant="h6" sx={{ color: '#2a5e4f', fontWeight: 'bold' }}>
                Join a Tournament
              </Typography>
              <Typography variant="body2" sx={{ color: '#6c757d' }}>
                Browse and register for a tournament that suits your fishing style.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <CameraAltIcon fontSize="large" sx={{ color: '#2a5e4f', marginBottom: 2 }} />
              <Typography variant="h6" sx={{ color: '#2a5e4f', fontWeight: 'bold' }}>
                Submit Your Catch
              </Typography>
              <Typography variant="body2" sx={{ color: '#6c757d' }}>
                Capture and submit a photo of your catch using our secure measuring board.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <LeaderboardIcon fontSize="large" sx={{ color: '#2a5e4f', marginBottom: 2 }} />
              <Typography variant="h6" sx={{ color: '#2a5e4f', fontWeight: 'bold' }}>
                Track Your Score
              </Typography>
              <Typography variant="body2" sx={{ color: '#6c757d' }}>
                Watch as your score updates on the leaderboard in real-time.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <MonetizationOnIcon fontSize="large" sx={{ color: '#2a5e4f', marginBottom: 2 }} />
              <Typography variant="h6" sx={{ color: '#2a5e4f', fontWeight: 'bold' }}>
                Win Prizes
              </Typography>
              <Typography variant="body2" sx={{ color: '#6c757d' }}>
                If you have the winning catch, claim your cash prize and climb the leaderboard!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HowItWorks;
