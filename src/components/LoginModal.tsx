import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { demoUsers } from '../data/demoData'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [selectedUser, setSelectedUser] = useState('')
  const { login } = useAuth()

  const handleLogin = () => {
    if (selectedUser) {
      const user = demoUsers.find(u => u.id === selectedUser)
      if (user && login(user.email)) {
        onClose()
      }
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 animate-scale-in">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i className="bi bi-person-check text-primary-600 text-2xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-secondary-900 mb-2 font-display">Demo Login</h2>
          <p className="text-secondary-600">Select a demo user to explore CompliFlow</p>
        </div>

        <div className="space-y-4 mb-6">
          {demoUsers.map((user) => (
            <div
              key={user.id}
              className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                selectedUser === user.id
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-secondary-200 hover:border-primary-300'
              }`}
              onClick={() => setSelectedUser(user.id)}
            >
              <div className="flex items-center space-x-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                  crossOrigin="anonymous"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-secondary-900">{user.name}</h3>
                    {user.role === 'admin' && (
                      <span className="bg-accent-100 text-accent-700 text-xs px-2 py-1 rounded-full font-medium">
                        Admin
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-secondary-600">{user.company}</p>
                  <p className="text-xs text-secondary-500">{user.department}</p>
                </div>
                {selectedUser === user.id && (
                  <i className="bi bi-check-circle-fill text-primary-500 text-xl"></i>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 border border-secondary-300 text-secondary-700 rounded-xl font-semibold hover:bg-secondary-50 transition-all duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleLogin}
            disabled={!selectedUser}
            className="flex-1 px-6 py-3 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            Login as Demo User
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
