import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
  Box,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: '#ffffff',
        padding: 4,
        borderRadius: 3,
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        marginTop: 0,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ color: '#2a5e4f', fontWeight: 'bold', marginBottom: 4 }}
      >
        Create Account
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Full Name *"
            variant="outlined"
            autoComplete="name"
            sx={{ borderRadius: '5px' }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Username *"
            variant="outlined"
            autoComplete="username"
            sx={{ borderRadius: '5px' }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email *"
            variant="outlined"
            type="email"
            autoComplete="email"
            sx={{ borderRadius: '5px' }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password *"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            autoComplete="new-password"
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
          <TextField
            fullWidth
            label="Confirm Password *"
            variant="outlined"
            type={showConfirmPassword ? 'text' : 'password'}
            autoComplete="new-password"
            sx={{ borderRadius: '5px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={handleClickShowConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Country *"
            variant="outlined"
            autoComplete="country"
            sx={{ borderRadius: '5px' }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            fullWidth
            label="State *"
            variant="outlined"
            autoComplete="state"
            sx={{ borderRadius: '5px' }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            fullWidth
            label="Zip Code *"
            variant="outlined"
            autoComplete="postal-code"
            sx={{ borderRadius: '5px' }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="success" />}
            label={
              <Typography variant="body2" sx={{ color: '#2a5e4f' }}>
                I agree to the Terms of Service *
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox color="success" />}
            label={
              <Typography variant="body2" sx={{ color: '#2a5e4f' }}>
                I agree to the Privacy Policy *
              </Typography>
            }
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
            Create Account
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SignUp;
