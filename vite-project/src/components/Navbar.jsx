import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold text-blue-600">🏠 My Home Workout</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-500 transition">Dashboard</Link>
        <Link to="/workouts" className="text-gray-700 hover:text-blue-500 transition">Workouts</Link>
        <Link to="/profile" className="text-gray-700 hover:text-blue-500 transition">Profile</Link>
        <Link to="/login" className="text-gray-700 hover:text-blue-500 transition">Login</Link>
        <Link to="/register" className="text-gray-700 hover:text-blue-500 transition">Register</Link>
      </div>
    </nav>
  )
}

export default Navbar
