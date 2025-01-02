// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Typography, Link, Box, Container, FormControlLabel, Checkbox, InputAdornment, IconButton } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import CloseIcon from "@mui/icons-material/Close"; 
// import { useDispatch } from 'react-redux';
// import { login } from '../../features/authSlice';

// export default function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // For showing global error messages
//   const [showPassword, setShowPassword] = useState(false);
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]); // OTP as an array of 6 values
//   const [isOtpDialogOpen, setIsOtpDialogOpen] = useState(false);
//   const [otpError, setOtpError] = useState("");
//   const [otpSent, setOtpSent] = useState(false); // Track if OTP has been sent

//   const dispatch = useDispatch();

//   useEffect(() => {
//     // Check if the user is already logged in
//     const token = localStorage.getItem("token");
//     if (token) {
//       // Redirect user to dashboard (you can use React Router for this)
//       window.location.href = "/dashboard"; // Simple redirect in React
//     }
//   }, []);

//   const validateEmail = (email) => {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailRegex.test(email);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setError("Please enter a valid email address and password");
//       return;
//     }

//     const loginData = { email, password };

//     // Mock API response for login
//     const mockResponse = {
//       status: 200, // You can simulate success
//       data: {
//         message: "Login successful",
//       },
//     };

//     if (mockResponse.status === 200) {
//       setError(""); // Clear error
//       setOtpSent(true);
//       setIsOtpDialogOpen(true);
//     } else {
//       setError(mockResponse.data.message || "Invalid email or password");
//     }
//   };

//   // Mock POST API request to verify OTP
//   const handleOtpSubmit = async () => {
//     const otpValue = otp.join('');

//     // Mock OTP verification response
//     const mockOtpResponse = {
//       status: 200, // Simulate OTP verification success
//       data: {
//         token: "mockToken12345",
//         name: "John Doe",
//         role: "Admin",
//         email: email,
//       },
//     };

//     if (mockOtpResponse.status === 200) {
//       const { token, name, role, email } = mockOtpResponse.data;

//       // Store globally in Redux
//       dispatch(login({ token, username: name, role, email }));

//       localStorage.setItem("token", token);
//       localStorage.setItem("username", name);
//       localStorage.setItem("role", role);
//       localStorage.setItem("email", email);

//       setOpenSnackbar(true);
//       window.location.href = "/dashboard"; // Simple redirect to dashboard in React
//     } else {
//       setOtpError(mockOtpResponse.data.message || "Invalid OTP. Please try again.");
//     }
//   };

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleForgotPassword = () => {
//     window.location.href = "/forgot-password"; // Simple redirect in React
//   };

//   // Handle OTP input focus and navigation
//   const handleOtpChange = (e, index) => {
//     const value = e.target.value;

//     if (/^\d$/.test(value) || value === '') { // Accept only digits or empty value
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       // Move to next field if input is valid
//       if (value && index < otp.length - 1) {
//         document.getElementById(`otp-input-${index + 1}`).focus();
//       }
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === 'Backspace') {
//       const newOtp = [...otp];
//       newOtp[index] = '';
//       setOtp(newOtp);

//       // Move to previous field if empty
//       if (index > 0) {
//         document.getElementById(`otp-input-${index - 1}`).focus();
//       }
//     }
//   };

//   const handleOtpDialogClose = () => {
//     setOtpError("");
//     setOtp(["", "", "", "", "", ""]); // Reset OTP values when dialog is closed
//     setIsOtpDialogOpen(false);
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           minHeight: '100vh',
//           py: 8,
//         }}
//       >
//         <img
//           alt="Your Company"
//           src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
//           style={{ height: 40, width: 'auto', marginBottom: '20px' }}
//         />
//         <Typography
//           variant="h5"
//           component="h1"
//           align="center"
//           gutterBottom
//           sx={{ color: '#0F0F0F' }} // Adjusted text color to #0F0F0F (dark)
//         >
//           Sign in to your account
//         </Typography>

//         <Box
//           component="form"
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: 2,
//             width: '100%',
//           }}
//           noValidate
//         >
//           <TextField
//             label="Email address"
//             id="email"
//             name="email"
//             type="email"
//             required
//             fullWidth
//             autoComplete="email"
//             variant="outlined"
//             size="small"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             sx={{
//               input: {
//                 color: '#0F0F0F', // Text color for input fields
//               },
//               label: {
//                 color: '#0F0F0F', // Label color for input fields
//               },
//               '& .MuiOutlinedInput-root': {
//                 '& fieldset': {
//                   borderColor: '#E4E4E7', // Border color
//                 },
//                 '&:hover fieldset': {
//                   borderColor: '#4F39F6', // Border color on hover (updated to #4F39F6)
//                 },
//               },
//             }}
//           />

//           <TextField
//             label="Password"
//             id="password"
//             name="password"
//             type={showPassword ? 'text' : 'password'}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             fullWidth
//             autoComplete="current-password"
//             variant="outlined"
//             size="small"
//             sx={{
//               input: {
//                 color: '#0F0F0F',
//               },
//               label: {
//                 color: '#0F0F0F',
//               },
//               '& .MuiOutlinedInput-root': {
//                 '& fieldset': {
//                   borderColor: '#E4E4E7',
//                 },
//                 '&:hover fieldset': {
//                   borderColor: '#4F39F6', // Border color on hover (updated to #4F39F6)
//                 },
//               },
//             }}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={() => setShowPassword(!showPassword)}
//                     edge="end"
//                     sx={{
//                       color: '#4F39F6', // Eye icon color
//                     }}
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />

//           {/* Remember Me Checkbox and Reset Password Link */}
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   value="remember"
//                   color="primary"
//                   sx={{
//                     '&.Mui-checked': {
//                       color: '#4F39F6', // Color for checked state of the checkbox (updated to #4F39F6)
//                     },
//                   }}
//                 />
//               }
//               label="Remember me"
//             />
//             <Typography
//               onClick={handleForgotPassword}
//               variant="body2"
//               sx={{
//                 fontSize: "0.875rem",
//                 color: "#4F39F6", // Indigo color for the link (updated to #4F39F6)
//                 textDecoration: "none", // Removed highlight on hover
//                 fontWeight: "bold", // Made link text bold
//                 cursor: "pointer", // Ensures it looks clickable
//                 "&:hover": {
//                   color: "#3A28D3", // Darker shade of indigo on hover
//                 },
//               }}
//             >
//               Reset password
//             </Typography>
//           </Box>

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             sx={{
//               py: 0.8,
//               fontSize: '0.875rem',
//               fontWeight: 'bold',
//               borderRadius: '4px',
//               backgroundColor: '#4F39F6', // Background color for the button (updated to #4F39F6)
//               textTransform: 'none', // Made "Sign in" text lowercase
//               '&:hover': {
//                 backgroundColor: '#3A28D3', // Darker shade of indigo on hover
//               },
//             }}
//             onClick={handleSubmit}
//           >
//             Sign in
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// }
import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box, Container, FormControlLabel, Checkbox, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // For React Router navigation
import { useDispatch } from 'react-redux';
import { login } from '../../features/authSlice';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  // For showing global error messages
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);  // OTP as an array of 6 values
  const [isOtpDialogOpen, setIsOtpDialogOpen] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [otpSent, setOtpSent] = useState(false);  // Track if OTP has been sent

  const navigate = useNavigate(); // React Router's navigate function
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard"); // Redirect to dashboard if logged in
    }
  }, [navigate]);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address and password");
      return;
    }

    const loginData = { email, password };

    // Mock API response for login
    const mockResponse = {
      status: 200, // Simulate success
      data: {
        message: "Login successful",
      },
    };

    if (mockResponse.status === 200) {
      setError("");  // Clear error
      setOtpSent(true);
      setIsOtpDialogOpen(true);
    } else {
      setError(mockResponse.data.message || "Invalid email or password");
    }
  };

  // Mock POST API request to verify OTP
  const handleOtpSubmit = async () => {
    const otpValue = otp.join('');

    // Mock OTP verification response
    const mockOtpResponse = {
      status: 200, // Simulate OTP verification success
      data: {
        token: "mockToken12345",
        name: "John Doe",
        role: "Admin",
        email: email,
      },
    };

    if (mockOtpResponse.status === 200) {
      const { token, name, role, email } = mockOtpResponse.data;

      // Store globally in Redux
      dispatch(login({ token, username: name, role, email }));

      localStorage.setItem("token", token);
      localStorage.setItem("username", name);
      localStorage.setItem("role", role);
      localStorage.setItem("email", email);

      navigate("/dashboard"); // Redirect to dashboard on success
    } else {
      setOtpError(mockOtpResponse.data.message || "Invalid OTP. Please try again.");
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password"); // Use React Router's navigate
  };

  // Handle OTP input focus and navigation
  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (/^\d$/.test(value) || value === '') { // Accept only digits or empty value
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next field if input is valid
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

      // Move to previous field if empty
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  const handleOtpDialogClose = () => {
    setOtpError("");
    setOtp(["", "", "", "", "", ""]);  // Reset OTP values when dialog is closed
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
                  borderColor: '#4F39F6',
                },
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
                  borderColor: '#4F39F6',
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    sx={{
                      color: '#4F39F6',
                    }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  sx={{
                    '&.Mui-checked': {
                      color: '#4F39F6',
                    },
                  }}
                />
              }
              label="Remember me"
            />
            <Typography
              onClick={handleForgotPassword}
              variant="body2"
              sx={{
                fontSize: "0.875rem",
                color: "#4F39F6",
                textDecoration: "none",
                fontWeight: "bold",
                cursor: "pointer",
                "&:hover": {
                  color: "#3A28D3",
                },
                           }}
            >
              Reset password
            </Typography>
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
              backgroundColor: '#4F39F6', // Background color for the button
              textTransform: 'none', // Made "Sign in" text lowercase
              '&:hover': {
                backgroundColor: '#3A28D3', // Darker shade of indigo on hover
              },
            }}
            onClick={handleSubmit}
          >
            Sign in
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

