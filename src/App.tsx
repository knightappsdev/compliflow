import React, { useState } from 'react'
import { AuthProvider, useAuth } from './context/AuthContext'
import Header from './components/Header'
import DashboardHeader from './components/DashboardHeader'
import Hero from './components/Hero'
import Features from './components/Features'
import Solutions from './components/Solutions'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoginModal from './components/LoginModal'
import Dashboard from './components/Dashboard'

const AppContent: React.FC = () => {
  const { currentUser } = useAuth()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  if (currentUser) {
    return (
      <>
        <DashboardHeader />
        <Dashboard />
      </>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Solutions />
      <Pricing />
      <Contact />
      <Footer />
      
      {/* Demo Login Button */}
      <button
        onClick={() => setIsLoginModalOpen(true)}
        className="fixed bottom-6 right-6 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 z-40"
      >
        <i className="bi bi-person-check mr-2"></i>
        Demo Login
      </button>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
