import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../App.css' 

function Profile() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fakeUser = {
      username: 'fit_user',
      email: 'fit@example.com',
      goal: 'Lose weight and gain muscle',
    }
    setUser(fakeUser)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('jwt')
    navigate('/login')
  }

  if (!user) {
    return <div className="profile-loading">Loading profile...</div>
  }

  return (
    <div className="profile-container">
      <h2 className="profile-title"> Your Profile</h2>
      <div className="profile-info">
        <div className="profile-section">
          <label>Username:</label>
          <p>{user.username}</p>
        </div>
        <div className="profile-section">
          <label>Email:</label>
          <p>{user.email}</p>
        </div>
        <div className="profile-section">
          <label>Fitness Goal:</label>
          <p>{user.goal}</p>
        </div>
        <button onClick={handleLogout} className="logout-button">
           Logout
        </button>
      </div>
    </div>
  )
}

export default Profile
