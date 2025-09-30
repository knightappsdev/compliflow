import React from 'react'

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: 'Financial Services',
      description: 'Comprehensive compliance for banking, fintech, and financial institutions with SOX, PCI DSS, and regulatory reporting.',
      icon: 'bi-bank',
      features: ['SOX Compliance', 'PCI DSS', 'Basel III', 'MiFID II'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Healthcare & Life Sciences',
      description: 'HIPAA, FDA, and medical device compliance with automated patient data protection and audit trails.',
      icon: 'bi-heart-pulse',
      features: ['HIPAA', 'FDA 21 CFR Part 11', 'GxP', 'Medical Device'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Technology & SaaS',
      description: 'Data privacy, security frameworks, and international compliance for tech companies and SaaS providers.',
      icon: 'bi-code-slash',
      features: ['GDPR', 'ISO 27001', 'SOC 2', 'Privacy Shield'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <section id="solutions" className="py-16 sm:py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-6">
            <i className="bi bi-building mr-2"></i>
            Industry Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6 font-display">
            Tailored for Your
            <span className="text-primary-600 block">Industry Needs</span>
          </h2>
          <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto">
            Industry-specific compliance solutions designed by experts who understand your unique regulatory challenges.
          </p>
        </div>

        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center animate-slide-up ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-64 object-cover"
                    crossOrigin="anonymous"
                  />
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                        <i className={`${solution.icon} text-primary-600 text-xl`}></i>
                      </div>
                      <h3 className="text-2xl font-bold text-secondary-900 font-display">{solution.title}</h3>
                    </div>
                    
                    <p className="text-secondary-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <i className="bi bi-check-circle text-success-500 mr-2"></i>
                          <span className="text-secondary-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                      Learn More
                      <i className="bi bi-arrow-right ml-2"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h4 className="text-xl font-bold text-secondary-900 mb-6">Key Benefits</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-success-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <i className="bi bi-lightning text-success-600"></i>
                      </div>
                      <div>
                        <h5 className="font-semibold text-secondary-900 mb-1">Rapid Implementation</h5>
                        <p className="text-secondary-600 text-sm">Get compliant in weeks, not months, with pre-configured templates.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <i className="bi bi-shield-check text-primary-600"></i>
                      </div>
                      <div>
                        <h5 className="font-semibold text-secondary-900 mb-1">Continuous Monitoring</h5>
                        <p className="text-secondary-600 text-sm">24/7 compliance monitoring with real-time risk assessment.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <i className="bi bi-graph-up text-accent-600"></i>
                      </div>
                      <div>
                        <h5 className="font-semibold text-secondary-900 mb-1">Cost Reduction</h5>
                        <p className="text-secondary-600 text-sm">Reduce compliance costs by up to 70% through automation.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <i className="bi bi-people text-secondary-600"></i>
                      </div>
                      <div>
                        <h5 className="font-semibold text-secondary-900 mb-1">Expert Support</h5>
                        <p className="text-secondary-600 text-sm">Dedicated compliance experts and 24/7 technical support.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
