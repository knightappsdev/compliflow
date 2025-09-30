import React from 'react'

const Footer: React.FC = () => {
  const footerLinks = {
    Product: [
      'Features',
      'Integrations',
      'Pricing',
      'API Documentation',
      'Security'
    ],
    Solutions: [
      'Financial Services',
      'Healthcare',
      'Technology',
      'Manufacturing',
      'Retail'
    ],
    Resources: [
      'Blog',
      'Case Studies',
      'Whitepapers',
      'Webinars',
      'Help Center'
    ],
    Company: [
      'About Us',
      'Careers',
      'Press',
      'Partners',
      'Contact'
    ]
  }

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center">
                <i className="bi bi-shield-check text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display">CompliFlow</h3>
                <p className="text-secondary-400 text-sm">Automated Compliance</p>
              </div>
            </div>
            
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Streamlining compliance for SMEs worldwide with AI-powered automation and expert guidance.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-secondary-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110">
                <i className="bi bi-github"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-secondary-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold mb-2 font-display">Stay Updated</h4>
              <p className="text-secondary-300">Get the latest compliance insights and product updates.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-lg text-white placeholder-secondary-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
              />
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-secondary-400 text-sm mb-4 md:mb-0">
            © 2024 CompliFlow. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Powered by Websparks AI */}
        <div className="mt-8 pt-6 border-t border-secondary-800 text-center">
          <p className="text-secondary-500 text-sm">
            Powered by <span className="text-primary-400 font-semibold">Websparks AI</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
