import { useEffect, useState } from 'react'

const Dashboard = () => {
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    // Fake API call
    setTimeout(() => {
      setWorkouts([
        { id: 1, title: 'Push Ups', category: 'Strength' },
        { id: 2, title: 'Running', category: 'Cardio' },
        { id: 3, title: 'Yoga', category: 'Flexibility' }
      ])
    }, 1000)
  }, [])

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Welcome to Your Workout Dashboard</h2>
      <ul className="space-y-4">
        {workouts.length === 0 ? (
          <p>Loading workouts...</p>
        ) : (
          workouts.map(w => (
            <li key={w.id} className="p-4 border rounded">
              <h3 className="font-semibold">{w.title}</h3>
              <p className="text-sm text-gray-500">{w.category}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default Dashboard
