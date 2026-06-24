import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import './Dashboard.css'

function Dashboard() {
  const { user } = useContext(AuthContext)

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h1>Welcome to Dashboard</h1>
        <div className="user-info">
          <p><strong>Username:</strong> {user?.username}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Role:</strong> {user?.role}</p>
          <p><strong>Member Since:</strong> {new Date(user?.created_at).toLocaleDateString()}</p>
        </div>
        <div className="dashboard-content">
          <h2>Your Dashboard</h2>
          <p>This is a protected page. Only authenticated users can see this.</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
