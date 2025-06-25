import { useState, useEffect, useRef } from 'react'

const workoutsData = [
  { id: 1, title: 'Push Ups', category: 'Upper Body', instructions: 'Do 3 sets of 15 reps', duration: 30 },
  { id: 2, title: 'Squats', category: 'Lower Body', instructions: 'Do 3 sets of 20 reps', duration: 45 },
  { id: 3, title: 'Plank', category: 'Core', instructions: 'Hold for 60 seconds', duration: 60 },
  { id: 4, title: 'Jumping Jacks', category: 'Cardio', instructions: 'Do 3 sets of 30 seconds', duration: 40 },
  { id: 5, title: 'Lunges', category: 'Lower Body', instructions: 'Do 3 sets of 10 reps each leg', duration: 50 },
]

const Workouts = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(null)
  const [timeLeft, setTimeLeft] = useState(0)
  const [isTiming, setIsTiming] = useState(false)
  const [filter, setFilter] = useState('All')

  const detailRef = useRef()

  useEffect(() => {
    if (isTiming && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    }
    if (isTiming && timeLeft === 0) {
      handleComplete()
    }
  }, [timeLeft, isTiming])

  const handleStart = (workout) => {
    setSelectedWorkout(workout)
    setTimeLeft(workout.duration)
    setIsTiming(true)

    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const handleComplete = () => {
    setSelectedWorkout(null)
    setIsTiming(false)
  }

  const filteredWorkouts =
    filter === 'All'
      ? workoutsData
      : workoutsData.filter((w) => w.category === filter)

  return (
    <div className="workout-container">
      <h1 className="workout-title">🏋️ Workouts</h1>

      {/* Filter dropdown */}
      <div className="workout-filter">
        <label className="filter-label">Filter by Category:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="All">All</option>
          <option value="Upper Body">Upper Body</option>
          <option value="Lower Body">Lower Body</option>
          <option value="Core">Core</option>
          <option value="Cardio">Cardio</option>
        </select>
      </div>

      {/* Workout list */}
      <div className="workout-list">
        {filteredWorkouts.map((workout) => (
          <div
            key={workout.id}
            className="workout-card"
            onClick={() => handleStart(workout)}
          >
            <h2 className="workout-card-title">{workout.title}</h2>
            <p className="workout-card-category">{workout.category}</p>
            <span className="start-instruction">Click to Start</span>
          </div>
        ))}
      </div>

      {/* Active workout */}
      {selectedWorkout && (
        <div ref={detailRef} className="workout-detail">
          <h3 className="detail-title">Currently Doing: {selectedWorkout.title}</h3>
          <p>{selectedWorkout.instructions}</p>
          <p className="timer-text">Time Remaining: {timeLeft}s</p>
          <button
            onClick={handleComplete}
            className="complete-button"
          >
            Complete Now
          </button>
        </div>
      )}
    </div>
  )
}

export default Workouts
