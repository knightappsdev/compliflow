import React from 'react'
import { useAuth } from '../context/AuthContext'
import { demoUsers, complianceFrameworks, alerts, auditReports, complianceStats } from '../data/demoData'

const AdminDashboard: React.FC = () => {
  const { currentUser } = useAuth()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant': return 'text-success-600 bg-success-100'
      case 'at-risk': return 'text-accent-600 bg-accent-100'
      case 'non-compliant': return 'text-danger-600 bg-danger-100'
      case 'completed': return 'text-success-600 bg-success-100'
      case 'in-progress': return 'text-primary-600 bg-primary-100'
      case 'scheduled': return 'text-secondary-600 bg-secondary-100'
      case 'active': return 'text-success-600 bg-success-100'
      case 'inactive': return 'text-secondary-600 bg-secondary-100'
      default: return 'text-secondary-600 bg-secondary-100'
    }
  }

  const activeUsers = demoUsers.filter(user => user.status === 'active')
  const recentAlerts = alerts.slice(0, 5)
  const recentReports = auditReports.slice(0, 3)

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
                Admin Dashboard
              </h1>
              <p className="text-secondary-600">System Overview & Management</p>
            </div>
          </div>
        </div>

        {/* Admin Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <i className="bi bi-people text-primary-600 text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-primary-600">{activeUsers.length}</span>
            </div>
            <h3 className="font-semibold text-secondary-900 mb-1">Active Users</h3>
            <p className="text-sm text-secondary-600">System users</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center">
                <i className="bi bi-shield-check text-success-600 text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-success-600">{complianceStats.totalFrameworks}</span>
            </div>
            <h3 className="font-semibold text-secondary-900 mb-1">Frameworks</h3>
            <p className="text-sm text-secondary-600">Total managed</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                <i className="bi bi-exclamation-triangle text-accent-600 text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-accent-600">{alerts.filter(a => !a.resolved).length}</span>
            </div>
            <h3 className="font-semibold text-secondary-900 mb-1">Open Alerts</h3>
            <p className="text-sm text-secondary-600">Require attention</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                <i className="bi bi-file-earmark-text text-secondary-600 text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-secondary-600">{auditReports.length}</span>
            </div>
            <h3 className="font-semibold text-secondary-900 mb-1">Audit Reports</h3>
            <p className="text-sm text-secondary-600">Total generated</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-danger-100 rounded-xl flex items-center justify-center">
                <i className="bi bi-clock text-danger-600 text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-danger-600">{complianceStats.overdueTasks}</span>
            </div>
            <h3 className="font-semibold text-secondary-900 mb-1">Overdue Tasks</h3>
            <p className="text-sm text-secondary-600">Need escalation</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* System Overview */}
          <div className="lg:col-span-2 space-y-6">
            {/* User Management */}
            <div className="bg-white rounded-2xl shadow-sm border border-secondary-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-secondary-900 font-display">User Management</h2>
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200">
                  Add User
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-secondary-200">
                      <th className="text-left py-3 px-4 font-semibold text-secondary-900">User</th>
                      <th className="text-left py-3 px-4 font-semibold text-secondary-900">Company</th>
                      <th className="text-left py-3 px-4 font-semibold text-secondary-900">Role</th>
                      <th className="text-left py-3 px-4 font-semibold text-secondary-900">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-secondary-900">Last Login</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demoUsers.map((user) => (
                      <tr key={user.id} className="border-b border-secondary-100 hover:bg-secondary-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-3">
                            <img
                              src={user.avatar}
                              alt={user.name}
                              className="w-8 h-8 rounded-full object-cover"
                              crossOrigin="anonymous"
                            />
                            <div>
                              <div className="font-medium text-secondary-900">{user.name}</div>
                              <div className="text-sm text-secondary-600">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-secondary-700">{user.company}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            user.role === 'admin' ? 'bg-accent-100 text-accent-700' : 'bg-primary-100 text-primary-700'
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-secondary-600 text-sm">
                          {new Date(user.lastLogin).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Compliance Overview */}
            <div className="bg-white rounded-2xl shadow-sm border border-secondary-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-secondary-900 font-display">Compliance Overview</h2>
                <button className="text-primary-600 hover:text-primary-700 font-medium">
                  Generate Report
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {complianceFrameworks.map((framework) => (
                  <div key={framework.id} className="border border-secondary-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-secondary-900">{framework.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(framework.status)}`}>
                        {framework.status.replace('-', ' ')}
                      </span>
                    </div>
                    
                    <div className="w-full bg-secondary-200 rounded-full h-2 mb-2">
                      <div 
                        className={`h-2 rounded-full ${
                          framework.status === 'compliant' ? 'bg-success-500' :
                          framework.status === 'at-risk' ? 'bg-accent-500' : 'bg-danger-500'
                        }`}
                        style={{ width: `${framework.progress}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-secondary-600">
                      <span>{framework.progress}% complete</span>
                      <span>{framework.completed}/{framework.requirements}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Alerts */}
            <div className="bg-white rounded-2xl shadow-sm border border-secondary-200 p-6">
              <h2 className="text-xl font-bold text-secondary-900 mb-4 font-display">Recent Alerts</h2>
              
              <div className="space-y-3">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className={`border-l-4 p-3 rounded-r-lg ${
                    alert.type === 'error' ? 'border-danger-500 bg-danger-50' :
                    alert.type === 'warning' ? 'border-accent-500 bg-accent-50' :
                    alert.type === 'success' ? 'border-success-500 bg-success-50' :
                    'border-primary-500 bg-primary-50'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        alert.priority === 'high' ? 'bg-danger-100 text-danger-700' :
                        alert.priority === 'medium' ? 'bg-accent-100 text-accent-700' :
                        'bg-success-100 text-success-700'
                      }`}>
                        {alert.priority}
                      </span>
                      <span className="text-xs text-secondary-500">
                        {new Date(alert.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    <h4 className="font-semibold text-secondary-900 text-sm mb-1">{alert.title}</h4>
                    <p className="text-xs text-secondary-600">{alert.framework}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Reports */}
            <div className="bg-white rounded-2xl shadow-sm border border-secondary-200 p-6">
              <h2 className="text-xl font-bold text-secondary-900 mb-4 font-display">Recent Reports</h2>
              
              <div className="space-y-3">
                {recentReports.map((report) => (
                  <div key={report.id} className="border border-secondary-200 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                        {report.status.replace('-', ' ')}
                      </span>
                      {report.score > 0 && (
                        <span className="text-lg font-bold text-secondary-900">{report.score}%</span>
                      )}
                    </div>
                    <h4 className="font-semibold text-secondary-900 text-sm mb-1">{report.title}</h4>
                    <p className="text-xs text-secondary-600 mb-2">{report.framework}</p>
                    <div className="flex items-center justify-between text-xs text-secondary-500">
                      <span>{new Date(report.date).toLocaleDateString()}</span>
                      <i className="bi bi-download"></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
