import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-purple-600 p-4 text-white flex justify-between">
      <h1 className="font-bold">My Home Workout</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/register" className="hover:underline">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
