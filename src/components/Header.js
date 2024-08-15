import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function Header() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#ffffff', boxShadow: 'none', borderBottom: '1px solid #f2f4f8' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#333333', fontWeight: 'bold' }}>
          Fishing App
        </Typography>
        <Box>
          <Button color="inherit" href="/login" sx={{ marginRight: 2, color: '#2a5e4f', borderRadius: '12px' }}>
            Log In
          </Button>
          <Button variant="contained" href="/signup" sx={{ backgroundColor: '#2a5e4f', color: '#ffffff', borderRadius: '12px', '&:hover': { backgroundColor: '#20473b' } }}>
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
