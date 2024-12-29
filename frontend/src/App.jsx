// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute"; // Import ProtectedRoute
import Dashboard from "./Pages/Dashboard"; // Protected page
import Login from "./Pages/Login"; // Public page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Protected route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* You can add more protected routes like this */}
      </Routes>
    </Router>
  );
}

export default App;
