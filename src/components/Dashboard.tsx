import React from 'react'
import { useAuth } from '../context/AuthContext'
import UserDashboard from './UserDashboard'
import AdminDashboard from './AdminDashboard'

const Dashboard: React.FC = () => {
  const { currentUser, isAdmin } = useAuth()

  if (!currentUser) {
    return null
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      {isAdmin ? <AdminDashboard /> : <UserDashboard />}
    </div>
  )
}

export default Dashboard
