// src/pages/Profile.jsx
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Profile() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Simulate fetching user data from localStorage (or backend eventually)
    const fakeUser = {
      username: 'fit_user',
      email: 'fit@example.com',
      goal: 'Lose weight and gain muscle',
    }

    setUser(fakeUser)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('jwt') // Clear token
    navigate('/login') // Send back to login page
  }

  if (!user) return <div className="p-8 text-center">Loading...</div>

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">👤 Profile</h2>
      <div className="space-y-4">
        <div>
          <p className="text-gray-600 font-semibold">Username:</p>
          <p className="text-gray-800">{user.username}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Email:</p>
          <p className="text-gray-800">{user.email}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Fitness Goal:</p>
          <p className="text-gray-800">{user.goal}</p>
        </div>
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Profile
