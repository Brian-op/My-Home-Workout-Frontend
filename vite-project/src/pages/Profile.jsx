import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Simulate fetching user from token/localStorage
    const token = localStorage.getItem('jwt')

    if (!token) {
      navigate('/login')
    } else {
      // Fake user for now
      setUser({
        name: 'Roddy the Frontend Slayer',
        email: 'test@example.com',
        joined: '2025-01-01',
      })
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('jwt')
    navigate('/login')
  }

  if (!user) return <p className="text-center mt-10">Loading profile...</p>

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">👤 My Profile</h2>

      <div className="mb-4">
        <p className="font-semibold">Name:</p>
        <p className="text-gray-700">{user.name}</p>
      </div>

      <div className="mb-4">
        <p className="font-semibold">Email:</p>
        <p className="text-gray-700">{user.email}</p>
      </div>

      <div className="mb-6">
        <p className="font-semibold">Member Since:</p>
        <p className="text-gray-700">{user.joined}</p>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  )
}

export default Profile
