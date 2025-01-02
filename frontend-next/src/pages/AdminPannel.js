'use client'
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import LogoutButton from '../components/LogoutButton';

export default function AdminPanel() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 5 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Admin Panel
        </Typography>

        {/* Logout Button */}
        <LogoutButton />
        
        {/* You can add your admin panel content here */}
      </Box>
    </Container>
  );
}
