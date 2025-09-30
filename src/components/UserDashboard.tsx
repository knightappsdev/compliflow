import React from 'react'
import { useAuth } from '../context/AuthContext'
import { complianceFrameworks, alerts, tasks, complianceStats } from '../data/demoData'

const UserDashboard: React.FC = () => {
  const { currentUser } = useAuth()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant': return 'text-success-600 bg-success-100'
      case 'at-risk': return 'text-accent-600 bg-accent-100'
      case 'non-compliant': return 'text-danger-600 bg-danger-100'
      default: return 'text-secondary-600 bg-secondary-100'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-danger-600 bg-danger-100'
      case 'medium': return 'text-accent-600 bg-accent-100'
      case 'low': return 'text-success-600 bg-success-100'
      default: return 'text-secondary-600 bg-secondary-100'
    }
  }

  const getTaskStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-success-600 bg-success-100'
      case 'in-progress': return 'text-primary-600 bg-primary-100'
      case 'overdue': return 'text-danger-600 bg-danger-100'
      default: return 'text-secondary-600 bg-secondary-100'
    }
  }

  const userTasks = tasks.filter(task => task.assignee === currentUser?.name)
  const activeAlerts = alerts.filter(alert => !alert.resolved)

  return (
    <div className="pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={currentUser?.avatar}
              alt={currentUser?.name}
              className="w-16 h-16 rounded-2xl object-cover"
              crossOrigin="anonymous"
            />
            <div>
              <h1 className="text-3xl font-bold text-secondary-900 font-display">
                Welcome back, {currentUser?.name?.split(' ')[0]}!
              </h1>
              <p className="text-secondary-600">{currentUser?.company} • {currentUser?.department}</p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <i className="bi bi-shield-check text-primary-600 text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-primary-600">{complianceStats.overallScore}%</span>
            </div>
            <h3 className="font-semibold text-secondary-900 mb-1">Overall Compliance</h3>
            <p className="text-sm text-secondary-600">Across all frameworks</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center">
                <i className="bi bi-check-circle text-success-600 text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-success-600">{complianceStats.compliantFrameworks}</span>
            </div>
            <h3 className="font-semibold text-secondary-900 mb-1">Compliant</h3>
            <p className="text-sm text-secondary-600">Frameworks in good standing</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                <i className="bi bi-exclamation-triangle text-accent-600 text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-accent-600">{complianceStats.atRiskFrameworks}</span>
            </div>
            <h3 className="font-semibold text-secondary-900 mb-1">At Risk</h3>
            <p className="text-sm text-secondary-600">Require attention</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-danger-100 rounded-xl flex items-center justify-center">
                <i className="bi bi-x-circle text-danger-600 text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-danger-600">{activeAlerts.length}</span>
            </div>
            <h3 className="font-semibold text-secondary-900 mb-1">Active Alerts</h3>
            <p className="text-sm text-secondary-600">Need immediate action</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Compliance Frameworks */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-secondary-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-secondary-900 font-display">Compliance Frameworks</h2>
                <button className="text-primary-600 hover:text-primary-700 font-medium">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {complianceFrameworks.map((framework) => (
                  <div key={framework.id} className="border border-secondary-200 rounded-xl p-4 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-semibold text-secondary-900">{framework.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(framework.status)}`}>
                          {framework.status.replace('-', ' ')}
                        </span>
                      </div>
                      <span className="text-lg font-bold text-secondary-900">{framework.progress}%</span>
                    </div>
                    
                    <p className="text-sm text-secondary-600 mb-3">{framework.description}</p>
                    
                    <div className="w-full bg-secondary-200 rounded-full h-2 mb-3">
                      <div 
                        className={`h-2 rounded-full ${
                          framework.status === 'compliant' ? 'bg-success-500' :
                          framework.status === 'at-risk' ? 'bg-accent-500' : 'bg-danger-500'
                        }`}
                        style={{ width: `${framework.progress}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-secondary-600">
                      <span>{framework.completed}/{framework.requirements} requirements</span>
                      <span>Next audit: {new Date(framework.nextAudit).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Alerts */}
            <div className="bg-white rounded-2xl shadow-sm border border-secondary-200 p-6">
              <h2 className="text-xl font-bold text-secondary-900 mb-4 font-display">Active Alerts</h2>
              
              <div className="space-y-3">
                {activeAlerts.slice(0, 3).map((alert) => (
                  <div key={alert.id} className="border-l-4 border-danger-500 bg-danger-50 p-3 rounded-r-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(alert.priority)}`}>
                        {alert.priority}
                      </span>
                      <span className="text-xs text-secondary-500">
                        {new Date(alert.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    <h4 className="font-semibold text-secondary-900 text-sm mb-1">{alert.title}</h4>
                    <p className="text-xs text-secondary-600">{alert.message}</p>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 text-primary-600 hover:text-primary-700 font-medium text-sm">
                View All Alerts
              </button>
            </div>

            {/* My Tasks */}
            <div className="bg-white rounded-2xl shadow-sm border border-secondary-200 p-6">
              <h2 className="text-xl font-bold text-secondary-900 mb-4 font-display">My Tasks</h2>
              
              <div className="space-y-3">
                {userTasks.slice(0, 4).map((task) => (
                  <div key={task.id} className="border border-secondary-200 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTaskStatusColor(task.status)}`}>
                        {task.status.replace('-', ' ')}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </div>
                    <h4 className="font-semibold text-secondary-900 text-sm mb-1">{task.title}</h4>
                    <p className="text-xs text-secondary-600 mb-2">{task.framework}</p>
                    <div className="flex items-center justify-between text-xs text-secondary-500">
                      <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                      <i className="bi bi-arrow-right"></i>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 text-primary-600 hover:text-primary-700 font-medium text-sm">
                View All Tasks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard
