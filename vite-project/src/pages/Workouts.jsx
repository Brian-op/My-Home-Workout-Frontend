import { useState, useEffect } from 'react'

// Dummy workout data
const workoutsData = [
  { id: 1, title: 'Push Ups', category: 'Upper Body', instructions: 'Do 3 sets of 15 reps' },
  { id: 2, title: 'Squats', category: 'Lower Body', instructions: 'Do 3 sets of 20 reps' },
  { id: 3, title: 'Plank', category: 'Core', instructions: 'Hold for 60 seconds' },
  { id: 4, title: 'Jumping Jacks', category: 'Cardio', instructions: 'Do 3 sets of 30 seconds' },
  { id: 5, title: 'Lunges', category: 'Lower Body', instructions: 'Do 3 sets of 10 reps each leg' },
]

const Workouts = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(null)
  const [completedWorkouts, setCompletedWorkouts] = useState([])
  const [filter, setFilter] = useState('All')

  const filteredWorkouts =
    filter === 'All'
      ? workoutsData
      : workoutsData.filter((w) => w.category === filter)

  const handleStart = (workout) => {
    setSelectedWorkout(workout)
  }

  const handleComplete = () => {
    if (selectedWorkout) {
      setCompletedWorkouts((prev) => [...prev, selectedWorkout.id])
      setSelectedWorkout(null)
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
      <h1 className="text-2xl font-bold mb-4">🏋️ Workouts</h1>

      {/* Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Filter by Category:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="All">All</option>
          <option value="Upper Body">Upper Body</option>
          <option value="Lower Body">Lower Body</option>
          <option value="Core">Core</option>
          <option value="Cardio">Cardio</option>
        </select>
      </div>

      {/* Workout list */}
      <div className="space-y-4">
        {filteredWorkouts.map((workout) => (
          <div
            key={workout.id}
            className={`p-4 rounded shadow ${
              completedWorkouts.includes(workout.id)
                ? 'bg-green-100'
                : 'bg-white'
            }`}
          >
            <h2 className="text-lg font-semibold">{workout.title}</h2>
            <p className="text-gray-600 text-sm">{workout.category}</p>

            {!completedWorkouts.includes(workout.id) && (
              <button
                onClick={() => handleStart(workout)}
                className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Start Workout
              </button>
            )}

            {completedWorkouts.includes(workout.id) && (
              <span className="text-green-600 font-semibold mt-2 block">
                ✅ Completed
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Selected workout details */}
      {selectedWorkout && (
        <div className="mt-8 p-4 bg-yellow-100 border border-yellow-400 rounded">
          <h3 className="text-xl font-bold mb-2">
            🏁 Currently Doing: {selectedWorkout.title}
          </h3>
          <p>{selectedWorkout.instructions}</p>
          <button
            onClick={handleComplete}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Complete Workout
          </button>
        </div>
      )}
    </div>
  )
}

export default Workouts
