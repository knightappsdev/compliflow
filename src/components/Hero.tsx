import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-subtle"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-subtle" style={{animationDelay: '1s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <i className="bi bi-lightning-charge mr-2"></i>
              Automated Compliance Made Simple
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight mb-6 font-display">
              Streamline Your
              <span className="text-primary-600 block">Compliance Journey</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-secondary-600 mb-8 leading-relaxed">
              CompliFlow automates compliance management for SMEs, reducing manual work by 80% while ensuring 100% regulatory adherence across all frameworks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Free Trial
                <i className="bi bi-arrow-right ml-2"></i>
              </button>
              <button className="border-2 border-secondary-300 hover:border-primary-500 text-secondary-700 hover:text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105">
                <i className="bi bi-play-circle mr-2"></i>
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-secondary-200">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">500+</div>
                <div className="text-sm text-secondary-600">Companies Trust Us</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">80%</div>
                <div className="text-sm text-secondary-600">Time Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">99.9%</div>
                <div className="text-sm text-secondary-600">Compliance Rate</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-scale-in">
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
              {/* Dashboard Preview */}
              <div className="bg-secondary-50 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-secondary-900">Compliance Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-danger-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Progress Bars */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-secondary-700">GDPR Compliance</span>
                      <span className="text-success-600 font-medium">95%</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div className="bg-success-500 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-secondary-700">ISO 27001</span>
                      <span className="text-accent-600 font-medium">78%</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div className="bg-accent-500 h-2 rounded-full" style={{width: '78%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-secondary-700">SOX Compliance</span>
                      <span className="text-primary-600 font-medium">88%</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-primary-50 p-3 rounded-lg text-center">
                  <i className="bi bi-file-earmark-check text-primary-600 text-xl mb-2"></i>
                  <div className="text-xs font-medium text-primary-700">Auto Audit</div>
                </div>
                <div className="bg-success-50 p-3 rounded-lg text-center">
                  <i className="bi bi-shield-check text-success-600 text-xl mb-2"></i>
                  <div className="text-xs font-medium text-success-700">Risk Monitor</div>
                </div>
                <div className="bg-accent-50 p-3 rounded-lg text-center">
                  <i className="bi bi-graph-up text-accent-600 text-xl mb-2"></i>
                  <div className="text-xs font-medium text-accent-700">Reports</div>
                </div>
                <div className="bg-secondary-100 p-3 rounded-lg text-center">
                  <i className="bi bi-bell text-secondary-600 text-xl mb-2"></i>
                  <div className="text-xs font-medium text-secondary-700">Alerts</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-success-500 text-white p-3 rounded-xl shadow-lg animate-bounce-subtle">
              <i className="bi bi-check-circle text-xl"></i>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary-500 text-white p-3 rounded-xl shadow-lg animate-bounce-subtle" style={{animationDelay: '0.5s'}}>
              <i className="bi bi-shield-lock text-xl"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
