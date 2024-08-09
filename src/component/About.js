import React from 'react';
import { Container, Typography, Box, Link, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { grey } from '@mui/material/colors';
import Layout from '../shop/Layout';

const AboutPage = () => {
  return (
    <div>
    <Container sx={{ mt: 4, textAlign:'center',bgcolor: '#F5F5F5', p: 3, borderRadius: 2, boxShadow: 3,mb: 4 }}>
      <Box sx={{ bgcolor: '#F5F5F5', p: 5, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h3" component="h1" gutterBottom >
          Our Story
        </Typography>
        <Typography variant="body1" component="p" gutterBottom >
          We are third-year students of Information Technology. For our projects, we chose to develop this fitness website. We researched the drawbacks of some other fitness websites and are striving to rectify them with our platform.
        </Typography>
        <Typography variant="body1" component="p" gutterBottom >
          Our goal is to provide a comprehensive and user-friendly fitness website that addresses common issues faced by users,
          ensuring a better experience for everyone.
        </Typography>

        <Divider sx={{ my: 4, bgcolor: 'lightgray' }} />

        <Box sx={{ mt: 5 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Reach Us
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body1">+123-456-7890</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body1">123 Fitness St, Health City, HC 45678</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookIcon sx={{ fontSize: 40 }} />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={{ fontSize: 40 }} />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
    </div>
  );
};

export default AboutPage;
