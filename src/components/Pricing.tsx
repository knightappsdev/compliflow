import React, { useState } from 'react'

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with compliance',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'Up to 3 compliance frameworks',
        'Basic automation tools',
        'Monthly compliance reports',
        'Email support',
        '5 team members',
        'Standard integrations'
      ],
      popular: false,
      color: 'secondary'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing companies with complex compliance needs',
      monthlyPrice: 299,
      annualPrice: 239,
      features: [
        'Up to 10 compliance frameworks',
        'Advanced AI automation',
        'Real-time monitoring & alerts',
        'Priority support',
        '25 team members',
        'Advanced integrations',
        'Custom workflows',
        'Audit trail management'
      ],
      popular: true,
      color: 'primary'
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solution for large organizations',
      monthlyPrice: 799,
      annualPrice: 639,
      features: [
        'Unlimited compliance frameworks',
        'Full AI-powered automation',
        'Dedicated compliance manager',
        '24/7 phone & chat support',
        'Unlimited team members',
        'Custom integrations',
        'White-label options',
        'Advanced analytics',
        'SLA guarantees'
      ],
      popular: false,
      color: 'accent'
    }
  ]

  const getColorClasses = (color: string, popular: boolean) => {
    if (popular) {
      return {
        border: 'border-primary-500 ring-2 ring-primary-200',
        header: 'bg-primary-500',
        button: 'bg-primary-500 hover:bg-primary-600 text-white',
        badge: 'bg-primary-500 text-white'
      }
    }
    
    const colorMap = {
      secondary: {
        border: 'border-secondary-200',
        header: 'bg-secondary-500',
        button: 'bg-secondary-500 hover:bg-secondary-600 text-white',
        badge: 'bg-secondary-500 text-white'
      },
      primary: {
        border: 'border-primary-200',
        header: 'bg-primary-500',
        button: 'bg-primary-500 hover:bg-primary-600 text-white',
        badge: 'bg-primary-500 text-white'
      },
      accent: {
        border: 'border-accent-200',
        header: 'bg-accent-500',
        button: 'bg-accent-500 hover:bg-accent-600 text-white',
        badge: 'bg-accent-500 text-white'
      }
    }
    
    return colorMap[color as keyof typeof colorMap] || colorMap.primary
  }

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-success-100 text-success-700 rounded-full text-sm font-medium mb-6">
            <i className="bi bi-currency-dollar mr-2"></i>
            Simple Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6 font-display">
            Choose Your
            <span className="text-primary-600 block">Compliance Plan</span>
          </h2>
          <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
            Transparent pricing with no hidden fees. Start your compliance journey today with a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-secondary-100 rounded-xl p-1">
            <button
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                !isAnnual ? 'bg-white text-secondary-900 shadow-sm' : 'text-secondary-600'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                isAnnual ? 'bg-white text-secondary-900 shadow-sm' : 'text-secondary-600'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual
              <span className="ml-2 bg-success-500 text-white text-xs px-2 py-1 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color, plan.popular)
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
            
            return (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg ${colors.border} p-8 transform hover:scale-105 transition-all duration-300 animate-slide-up`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {plan.popular && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${colors.badge} px-4 py-2 rounded-full text-sm font-semibold`}>
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2 font-display">{plan.name}</h3>
                  <p className="text-secondary-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-secondary-900">${price}</span>
                    <span className="text-secondary-600 ml-2">/{isAnnual ? 'month' : 'month'}</span>
                    {isAnnual && (
                      <div className="text-sm text-success-600 font-medium mt-1">
                        Billed annually (${price * 12}/year)
                      </div>
                    )}
                  </div>

                  <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 ${colors.button}`}>
                    Start Free Trial
                  </button>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <i className="bi bi-check-circle text-success-500 mr-3"></i>
                      <span className="text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-display">
            Need a Custom Solution?
          </h3>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            For organizations with unique compliance requirements, we offer fully customized solutions with dedicated support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-200 transform hover:scale-105">
              Contact Sales
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200 transform hover:scale-105">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
