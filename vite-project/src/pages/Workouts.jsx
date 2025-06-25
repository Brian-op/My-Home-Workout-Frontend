// src/pages/Workouts.jsx
import { useState } from 'react'

const dummyWorkouts = [
  {
    id: 1,
    name: 'Full Body Burn',
    description: 'A 30-minute workout targeting your entire body.',
    duration: '30 mins',
    category: 'Strength',
  },
  {
    id: 2,
    name: 'Cardio Blast',
    description: 'Get your heart pumping with high-intensity cardio.',
    duration: '20 mins',
    category: 'Cardio',
  },
  {
    id: 3,
    name: 'Core Crusher',
    description: 'Focused ab workout for a strong core.',
    duration: '15 mins',
    category: 'Core',
  },
]

const categories = ['All', 'Strength', 'Cardio', 'Core']

const Workouts = () => {
  const [completedWorkouts, setCompletedWorkouts] = useState([])
  const [activeWorkout, setActiveWorkout] = useState(null)
  const [filter, setFilter] = useState('All')

  const handleStart = (id) => {
    setActiveWorkout(id)
  }

  const handleComplete = (id) => {
    setCompletedWorkouts((prev) => [...prev, id])
    setActiveWorkout(null)
  }

  const filteredWorkouts =
    filter === 'All'
      ? dummyWorkouts
      : dummyWorkouts.filter((w) => w.category === filter)

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        🏋️ My Workouts
      </h2>

      {/* Filter */}
      <div className="mb-6">
        <label className="mr-2 font-medium text-gray-700">Filter by Category:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Workouts Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredWorkouts.map((workout) => (
          <div
            key={workout.id}
            className={`border p-4 rounded-lg shadow transition relative ${
              completedWorkouts.includes(workout.id) ? 'bg-green-50' : ''
            }`}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {workout.name}
            </h3>
            <p className="text-gray-600 mb-1">{workout.description}</p>
            <p className="text-sm text-gray-500 mb-3">
              ⏱ {workout.duration} | 💪 {workout.category}
            </p>

            {/* Buttons */}
            {completedWorkouts.includes(workout.id) ? (
              <span className="text-green-600 font-medium">✅ Completed</span>
            ) : activeWorkout === workout.id ? (
              <button
                onClick={() => handleComplete(workout.id)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Complete Workout
              </button>
            ) : (
              <button
                onClick={() => handleStart(workout.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Start Workout
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Workouts
