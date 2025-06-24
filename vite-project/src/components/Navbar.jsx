import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">🏠 My Home Workout</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-500">Dashboard</Link>
        <Link to="/workouts" className="text-gray-700 hover:text-blue-500">Workouts</Link>
        <Link to="/profile" className="text-gray-700 hover:text-blue-500">Profile</Link>
        <Link to="/login" className="text-gray-700 hover:text-blue-500">Login</Link>
        <Link to="/register" className="text-gray-700 hover:text-blue-500">Register</Link>
      </div>
    </nav>
  )
}

export default Navbar
