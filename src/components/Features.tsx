import React from 'react'

const Features: React.FC = () => {
  const features = [
    {
      icon: 'bi-robot',
      title: 'AI-Powered Automation',
      description: 'Intelligent automation that learns from your compliance patterns and adapts to regulatory changes in real-time.',
      color: 'primary'
    },
    {
      icon: 'bi-shield-check',
      title: 'Multi-Framework Support',
      description: 'Comprehensive coverage for GDPR, ISO 27001, SOX, HIPAA, and 50+ other compliance frameworks.',
      color: 'success'
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Real-Time Monitoring',
      description: 'Continuous monitoring with instant alerts for compliance gaps and regulatory updates.',
      color: 'accent'
    },
    {
      icon: 'bi-file-earmark-text',
      title: 'Automated Documentation',
      description: 'Generate compliance reports, audit trails, and documentation automatically with zero manual effort.',
      color: 'primary'
    },
    {
      icon: 'bi-people',
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools with role-based access and workflow management for compliance teams.',
      color: 'secondary'
    },
    {
      icon: 'bi-cloud-check',
      title: 'Cloud-Native Security',
      description: 'Enterprise-grade security with SOC 2 Type II certification and end-to-end encryption.',
      color: 'success'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'bg-primary-100 text-primary-600 group-hover:bg-primary-500 group-hover:text-white',
      success: 'bg-success-100 text-success-600 group-hover:bg-success-500 group-hover:text-white',
      accent: 'bg-accent-100 text-accent-600 group-hover:bg-accent-500 group-hover:text-white',
      secondary: 'bg-secondary-100 text-secondary-600 group-hover:bg-secondary-500 group-hover:text-white'
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.primary
  }

  return (
    <section id="features" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <i className="bi bi-stars mr-2"></i>
            Powerful Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6 font-display">
            Everything You Need for
            <span className="text-primary-600 block">Seamless Compliance</span>
          </h2>
          <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge AI with industry expertise to deliver unparalleled compliance automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white border border-secondary-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${getColorClasses(feature.color)}`}>
                <i className={`${feature.icon} text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-secondary-600 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-6 flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-300">
                Learn more
                <i className="bi bi-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Section */}
        <div className="mt-20 bg-secondary-50 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4 font-display">
              Seamless Integrations
            </h3>
            <p className="text-lg text-secondary-600">
              Connect with your existing tools and workflows effortlessly
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: 'Slack', icon: 'bi-slack' },
              { name: 'Microsoft', icon: 'bi-microsoft' },
              { name: 'Google', icon: 'bi-google' },
              { name: 'Salesforce', icon: 'bi-cloud' },
              { name: 'Jira', icon: 'bi-kanban' },
              { name: 'AWS', icon: 'bi-cloud-arrow-up' }
            ].map((integration, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
              >
                <i className={`${integration.icon} text-3xl text-secondary-600 mb-2`}></i>
                <span className="text-sm font-medium text-secondary-700">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
