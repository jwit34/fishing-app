import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: '#ffffff',
        padding: 4,
        borderRadius: 3,
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        marginTop: 4,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ color: '#2a5e4f', fontWeight: 'bold', marginBottom: 4 }}
      >
        Welcome Back!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Username or Email *"
            variant="outlined"
            autoComplete="username"
            sx={{ borderRadius: '5px' }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password *"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            sx={{ borderRadius: '5px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#2a5e4f',
              color: '#ffffff',
              borderRadius: '25px',
              paddingY: 1.5,
              fontWeight: 'bold',
              fontSize: '1rem',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              '&:hover': { backgroundColor: '#204c3d' },
            }}
          >
            Log In
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
