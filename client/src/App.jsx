import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';
import NotePage from './pages/NotePage';
import MeetingPage from './pages/MeetingPage';
import LoginPage from './pages/LoginPage';
import UserManagementPage from './pages/AdminPannel';
import PrivateRoute from './components/PrivateRoute'; // The protected route component

function App() {
  return (
    <div className="App">
      <Routes>
       
          <Route path="/login" element={<LoginPage />} />

          {/* Protected routes */}
          <Route path="/" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
          <Route path="/notes" element={<PrivateRoute><NotesPage /></PrivateRoute>} />
          <Route path="/meetings" element={<PrivateRoute><MeetingPage /></PrivateRoute>} />

          {/* Admin-only protected route */}
          <Route path="/user-management" element={<PrivateRoute requiredRole="admin"><UserManagementPage /></PrivateRoute>} />
      </Routes>
</div>
);
}

export default App;
