const Profile = () => {
  const user = {
    username: 'johndoe',
    email: 'johndoe@example.com'
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
      <div className="space-y-2">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  )
}
export default Profile
