import React, { useState } from 'react';
import { TextField, Button, Typography, Link, Box, Container, FormControlLabel, Checkbox, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Example() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          py: 8,
        }}
      >
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          style={{ height: 40, width: 'auto', marginBottom: '20px' }}
        />
        <Typography
          variant="h5"
          component="h1"
          align="center"
          gutterBottom
          sx={{ color: '#0F0F0F' }} // Adjusted text color to #0F0F0F (dark)
        >
          Sign in to your account
        </Typography>

        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '100%',
          }}
          noValidate
        >
          <TextField
            label="Email address"
            id="email"
            name="email"
            type="email"
            required
            fullWidth
            autoComplete="email"
            variant="outlined"
            size="small"
            sx={{
              input: {
                color: '#0F0F0F', // Text color for input fields
              },
              label: {
                color: '#0F0F0F', // Label color for input fields
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E4E4E7', // Border color
                },
                '&:hover fieldset': {
                  borderColor: '#4F39F6', // Border color on hover (updated to #4F39F6)
                },
              },
            }}
          />

          <TextField
            label="Password"
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            required
            fullWidth
            autoComplete="current-password"
            variant="outlined"
            size="small"
            sx={{
              input: {
                color: '#0F0F0F',
              },
              label: {
                color: '#0F0F0F',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E4E4E7',
                },
                '&:hover fieldset': {
                  borderColor: '#4F39F6', // Border color on hover (updated to #4F39F6)
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                    sx={{
                      color: '#4F39F6', // Eye icon color
                    }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Remember Me Checkbox and Reset Password Link */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  sx={{
                    '&.Mui-checked': {
                      color: '#4F39F6', // Color for checked state of the checkbox (updated to #4F39F6)
                    },
                  }}
                />
              }
              label="Remember me"
            />
            <Link
              href="#"
              variant="body2"
              sx={{
                fontSize: '0.875rem',
                color: '#4F39F6', // Indigo color for the link (updated to #4F39F6)
                textDecoration: 'none', // Removed highlight on hover
                fontWeight: 'bold', // Made link text bold
                '&:hover': {
                  color: '#3A28D3', // Darker shade of indigo on hover
                },
              }}
            >
              Reset password
            </Link>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              py: 0.8,
              fontSize: '0.875rem',
              fontWeight: 'bold',
              borderRadius: '4px',
              backgroundColor: '#4F39F6', // Background color for the button (updated to #4F39F6)
              textTransform: 'none', // Made "Sign in" text lowercase
              '&:hover': {
                backgroundColor: '#3A28D3', // Darker shade of indigo on hover
              },
            }}
          >
            Sign in
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
