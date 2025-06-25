import { useEffect, useState } from 'react'

const fakeWorkouts = [
  { id: 1, name: 'Push Ups', category: 'Strength', description: 'Do 3 sets of 15 push ups.' },
  { id: 2, name: 'Jumping Jacks', category: 'Cardio', description: 'Do jumping jacks for 1 minute.' },
  { id: 3, name: 'Plank', category: 'Core', description: 'Hold a plank for 45 seconds.' },
]

function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeWorkout, setActiveWorkout] = useState(null)

  useEffect(() => {
    // Normally you'd fetch from an API here
    setWorkouts(fakeWorkouts)
  }, [])

  const filteredWorkouts = selectedCategory === 'All'
    ? workouts
    : workouts.filter((w) => w.category === selectedCategory)

  const startWorkout = (workout) => {
    setActiveWorkout(workout)
  }

  const completeWorkout = () => {
    alert(`Workout "${activeWorkout.name}" completed! 💪`)
    setActiveWorkout(null)
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Your Workouts</h2>

      <div className="mb-4">
        <label className="mr-2">Filter by category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="All">All</option>
          <option value="Strength">Strength</option>
          <option value="Cardio">Cardio</option>
          <option value="Core">Core</option>
        </select>
      </div>

      <div className="grid gap-4">
        {filteredWorkouts.map((workout) => (
          <div key={workout.id} className="p-4 border rounded shadow">
            <h3 className="text-xl font-bold">{workout.name}</h3>
            <p className="text-gray-600">{workout.category}</p>
            <button
              onClick={() => startWorkout(workout)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Start Workout
            </button>
          </div>
        ))}
      </div>

      {activeWorkout && (
        <div className="mt-8 p-6 border-t pt-6">
          <h2 className="text-2xl font-bold mb-2">Currently Active: {activeWorkout.name}</h2>
          <p className="mb-4">{activeWorkout.description}</p>
          <button
            onClick={completeWorkout}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Complete Workout
          </button>
        </div>
      )}
    </div>
  )
}

export default Workouts
