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













'use client';  // Ensure it's treated as a Client Component

import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box, Container, FormControlLabel, Checkbox, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useRouter } from 'next/navigation'; // Next.js navigation
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isOtpDialogOpen, setIsOtpDialogOpen] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  
  const router = useRouter();
  const dispatch = useDispatch();

  // Dummy users with roles and tokens
  const users = [
    { email: 'admin@company.com', password: '123', role: 'admin', name: 'Admin User', token: 'adminToken123' },
    { email: 'hr@company.com', password: 'hr123', role: 'hr', name: 'HR User', token: 'hrToken123' },
    { email: 'cpc@company.com', password: 'cpc123', role: 'cpc', name: 'CPC User', token: 'cpcToken123' },
    { email: 'md@company.com', password: 'md123', role: 'md', name: 'MD User', token: 'mdToken123' },
    { email: 'chairman@company.com', password: 'chairman123', role: 'chairman', name: 'Chairman User', token: 'chairmanToken123' }
  ];

  // Check if the user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/dashboard');
    }
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Find the user in the dummy users list
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      setError('');
      setOtpSent(true);
      setIsOtpDialogOpen(true);
    } else {
      setError('Invalid email or password');
    }
  };

  const handleOtpSubmit = () => {
    const otpValue = otp.join('');

    // Simulate OTP verification (hardcoded as '123456' for this example)
    if (otpValue === '123456') {
      const user = users.find((user) => user.email === email);

      if (user) {
        // Store token and user data in Redux and localStorage
        dispatch(login({ token: user.token, username: user.name, role: user.role, email: user.email }));
        localStorage.setItem('token', user.token);
        localStorage.setItem('username', user.name);
        localStorage.setItem('role', user.role);
        localStorage.setItem('email', user.email);

        setOpenSnackbar(true);
        // Redirect based on role
        if (user.role === 'admin') {
          router.push('/admin-panel');
        } else {
          router.push('/dashboard');
        }
      } else {
        setOtpError('User not found.');
      }
    } else {
      setOtpError('Invalid OTP. Please try again.');
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (/^\d$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);

      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  const handleOtpDialogClose = () => {
    setOtpError('');
    setOtp(['', '', '', '', '', '']);
    setIsOtpDialogOpen(false);
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
        <Typography variant="h5" component="h1" align="center" gutterBottom sx={{ color: '#0F0F0F' }}>
          Sign in to your account
        </Typography>

        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }} noValidate>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              input: { color: '#0F0F0F' },
              label: { color: '#0F0F0F' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#E4E4E7' },
                '&:hover fieldset': { borderColor: '#4F39F6' },
              },
            }}
          />

          <TextField
            label="Password"
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
            autoComplete="current-password"
            variant="outlined"
            size="small"
            sx={{
              input: { color: '#0F0F0F' },
              label: { color: '#0F0F0F' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#E4E4E7' },
                '&:hover fieldset': { borderColor: '#4F39F6' },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                    sx={{ color: '#4F39F6' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

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
              backgroundColor: '#4F39F6',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#3A28D3' },
            }}
            onClick={handleSubmit}
          >
            Sign in
          </Button>
        </Box>
      </Box>

      {/* OTP Dialog */}
      {isOtpDialogOpen && (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6">Enter OTP</Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {otp.map((digit, index) => (
              <TextField
                key={index}
                id={`otp-input-${index}`}
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                variant="outlined"
                size="small"
                sx={{ width: 40 }}
                inputProps={{ maxLength: 1 }}
              />
            ))}
          </Box>
          {otpError && <Typography color="error">{otpError}</Typography>}
          <Button variant="contained" color="primary" onClick={handleOtpSubmit}>
            Verify OTP
          </Button>
        </Box>
      )}
    </Container>
  );
}
