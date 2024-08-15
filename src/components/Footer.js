import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', paddingY: 4, borderTop: '1px solid #f2f4f8' }}>
      <Container maxWidth="md">
        <Typography variant="body2" sx={{ color: '#6c757d', textAlign: 'center', marginBottom: 2 }}>
          © 2024 Fishing App. All rights reserved.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Link href="#" sx={{ color: '#2a5e4f', marginRight: 2, '&:hover': { color: '#20473b' } }}>
            Privacy Policy
          </Link>
          <Link href="#" sx={{ color: '#2a5e4f', marginRight: 2, '&:hover': { color: '#20473b' } }}>
            Terms of Service
          </Link>
          <Link href="#" sx={{ color: '#2a5e4f', '&:hover': { color: '#20473b' } }}>
            Contact Us
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
