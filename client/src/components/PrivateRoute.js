import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Private route component with role-based access
const PrivateRoute = ({ children, requiredRole = null }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Redirect if user role doesn't match requiredRole (for admin or specific roles)
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" />;
  }

  return children;  // Return protected route
};

export default PrivateRoute;
