import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
  const token = localStorage.getItem('jwt')

  if (!token) {
    // Not logged in, redirect to login page
    return <Navigate to="/login" replace />
  }

  // If logged in, show the requested route
  return children
}

export default PrivateRoute
