import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box component="footer" sx={{ bgcolor: '#FFF3F4', py: 6 }}>
    <Container maxWidth="lg">
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="text.primary" gutterBottom align="center">
            Contact Us
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Shooters Bypass, Utawala
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Email: info@utawalagym.com
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Phone: +254 11 590 7844
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="text.primary" gutterBottom align="center">
            Follow Us
          </Typography>
          <Box display="flex" justifyContent="center">
            <IconButton color="primary" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton color="primary" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton color="primary" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Box mt={5}>
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Utawala Gym. All rights reserved.
        </Typography>
        </Box>
    </Container>
  </Box>
);

export default Footer;