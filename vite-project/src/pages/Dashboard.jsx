import { useEffect, useState } from 'react'
import '../App.css';


const Dashboard = () => {
  const [workouts, setWorkouts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setWorkouts([
        { id: 1, title: 'Push Ups', category: 'Strength' },
        { id: 2, title: 'Running', category: 'Cardio' },
        { id: 3, title: 'Yoga', category: 'Flexibility' }
      ])
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title"> Welcome to Your Workout Dashboard</h2>

      {loading ? (
        <p className="dashboard-loading">Loading workouts...</p>
      ) : workouts.length === 0 ? (
        <p className="dashboard-empty">No workouts yet. Time to get moving!</p>
      ) : (
        <ul className="workout-list">
          {workouts.map(w => (
            <li key={w.id} className="workout-card">
              <h3 className="workout-title">{w.title}</h3>
              <p className="workout-category">{w.category}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dashboard

