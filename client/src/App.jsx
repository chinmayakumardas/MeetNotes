import React from 'react';
import Button from '@mui/material/Button';
import LoginForm from './components/login/LoginForm';
function App() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">Hello Vite + Tailwind + MUI</h1>
      <Button variant="contained" color="primary" className="mt-4">
        Material UI Button
      </Button>
      {/* <LoginForm/> */}
    </div>
  );
}

export default App;
