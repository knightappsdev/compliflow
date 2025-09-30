import React, { useState } from 'react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
              <p className="text-xs text-secondary-600 hidden sm:block">Automated Compliance</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200">Features</a>
            <a href="#solutions" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200">Solutions</a>
            <a href="#pricing" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200">Pricing</a>
            <a href="#contact" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200">
              Sign In
            </button>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} text-xl text-secondary-700`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-secondary-200 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200">Features</a>
              <a href="#solutions" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200">Solutions</a>
              <a href="#pricing" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200">Pricing</a>
              <a href="#contact" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200">Contact</a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-secondary-200">
                <button className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 text-left">
                  Sign In
                </button>
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 w-full">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
