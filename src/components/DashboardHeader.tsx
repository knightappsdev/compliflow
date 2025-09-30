import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { demoUsers } from '../data/demoData'

const DashboardHeader: React.FC = () => {
  const { currentUser, logout, switchUser, isAdmin } = useAuth()
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isSwitchMenuOpen, setIsSwitchMenuOpen] = useState(false)

  if (!currentUser) return null

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-secondary-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center">
              <i className="bi bi-shield-check text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-secondary-900 font-display">CompliFlow</h1>
              <p className="text-xs text-secondary-600 hidden sm:block">
                {isAdmin ? 'Admin Dashboard' : 'User Dashboard'}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200">
              Dashboard
            </a>
            <a href="#" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200">
              Frameworks
            </a>
            <a href="#" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200">
              Reports
            </a>
            <a href="#" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200">
              Tasks
            </a>
            {isAdmin && (
              <a href="#" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200">
                Admin
              </a>
            )}
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {/* Demo User Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsSwitchMenuOpen(!isSwitchMenuOpen)}
                className="hidden sm:flex items-center space-x-2 px-3 py-2 bg-secondary-100 hover:bg-secondary-200 rounded-lg transition-colors duration-200"
              >
                <i className="bi bi-people text-secondary-600"></i>
                <span className="text-sm font-medium text-secondary-700">Switch User</span>
              </button>

              {isSwitchMenuOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-secondary-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-secondary-200">
                    <p className="text-sm font-semibold text-secondary-900">Demo Users</p>
                    <p className="text-xs text-secondary-600">Switch between different user types</p>
                  </div>
                  {demoUsers.map((user) => (
                    <button
                      key={user.id}
                      onClick={() => {
                        switchUser(user.id)
                        setIsSwitchMenuOpen(false)
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-secondary-50 transition-colors duration-200 ${
                        currentUser.id === user.id ? 'bg-primary-50' : ''
                      }`}
                    >
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full object-cover"
                        crossOrigin="anonymous"
                      />
                      <div className="flex-1 text-left">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-secondary-900 text-sm">{user.name}</span>
                          {user.role === 'admin' && (
                            <span className="bg-accent-100 text-accent-700 text-xs px-2 py-1 rounded-full font-medium">
                              Admin
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-secondary-600">{user.company}</p>
                      </div>
                      {currentUser.id === user.id && (
                        <i className="bi bi-check-circle-fill text-primary-500"></i>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* User Profile */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-3 p-2 hover:bg-secondary-100 rounded-xl transition-colors duration-200"
              >
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-10 h-10 rounded-xl object-cover"
                  crossOrigin="anonymous"
                />
                <div className="hidden sm:block text-left">
                  <div className="flex items-center space-x-2">
                    <p className="font-semibold text-secondary-900 text-sm">{currentUser.name}</p>
                    {isAdmin && (
                      <span className="bg-accent-100 text-accent-700 text-xs px-2 py-1 rounded-full font-medium">
                        Admin
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-secondary-600">{currentUser.company}</p>
                </div>
                <i className="bi bi-chevron-down text-secondary-600"></i>
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-secondary-200 py-2 z-50">
                  <div className="px-4 py-3 border-b border-secondary-200">
                    <p className="font-semibold text-secondary-900">{currentUser.name}</p>
                    <p className="text-sm text-secondary-600">{currentUser.email}</p>
                    <p className="text-xs text-secondary-500">{currentUser.department}</p>
                  </div>
                  
                  <div className="py-2">
                    <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-secondary-50 transition-colors duration-200">
                      <i className="bi bi-person text-secondary-600"></i>
                      <span className="text-secondary-700">Profile Settings</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-secondary-50 transition-colors duration-200">
                      <i className="bi bi-bell text-secondary-600"></i>
                      <span className="text-secondary-700">Notifications</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-secondary-50 transition-colors duration-200">
                      <i className="bi bi-gear text-secondary-600"></i>
                      <span className="text-secondary-700">Settings</span>
                    </a>
                  </div>

                  <div className="border-t border-secondary-200 py-2">
                    <button
                      onClick={() => {
                        logout()
                        setIsUserMenuOpen(false)
                      }}
                      className="flex items-center space-x-3 px-4 py-2 hover:bg-secondary-50 transition-colors duration-200 w-full text-left"
                    >
                      <i className="bi bi-box-arrow-right text-secondary-600"></i>
                      <span className="text-secondary-700">Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader
