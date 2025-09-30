import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <i className="bi bi-chat-dots mr-2"></i>
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6 font-display">
            Ready to Transform Your
            <span className="text-primary-600 block">Compliance Process?</span>
          </h2>
          <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto">
            Join thousands of companies who trust CompliFlow for their compliance automation needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-slide-up">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6 font-display">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 resize-none"
                  placeholder="Tell us about your compliance needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Send Message
                <i className="bi bi-arrow-right ml-2"></i>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6 font-display">Get Started Today</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                    <i className="bi bi-calendar-check text-primary-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Schedule a Demo</h4>
                    <p className="text-secondary-600">See CompliFlow in action with a personalized demo tailored to your industry.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center mr-4">
                    <i className="bi bi-play-circle text-success-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Free Trial</h4>
                    <p className="text-secondary-600">Start your 14-day free trial with full access to all features.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mr-4">
                    <i className="bi bi-headset text-accent-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Expert Support</h4>
                    <p className="text-secondary-600">Get help from our compliance experts throughout your journey.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-secondary-200">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-600 mb-1">24/7</div>
                    <div className="text-sm text-secondary-600">Support Available</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-600 mb-1">99.9%</div>
                    <div className="text-sm text-secondary-600">Uptime SLA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="bi bi-envelope text-primary-200 mr-3"></i>
                  <span>hello@compliflow.com</span>
                </div>
                <div className="flex items-center">
                  <i className="bi bi-telephone text-primary-200 mr-3"></i>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <i className="bi bi-geo-alt text-primary-200 mr-3"></i>
                  <span>San Francisco, CA</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-primary-400">
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-primary-400 hover:bg-primary-300 rounded-lg flex items-center justify-center transition-colors duration-200">
                    <i className="bi bi-linkedin text-white"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-400 hover:bg-primary-300 rounded-lg flex items-center justify-center transition-colors duration-200">
                    <i className="bi bi-twitter text-white"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-400 hover:bg-primary-300 rounded-lg flex items-center justify-center transition-colors duration-200">
                    <i className="bi bi-github text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
