import React, { createContext, useContext, useState, ReactNode } from 'react'
import { User, demoUsers } from '../data/demoData'

interface AuthContextType {
  currentUser: User | null
  login: (email: string) => boolean
  logout: () => void
  switchUser: (userId: string) => void
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const login = (email: string): boolean => {
    const user = demoUsers.find(u => u.email === email)
    if (user) {
      setCurrentUser(user)
      return true
    }
    return false
  }

  const logout = () => {
    setCurrentUser(null)
  }

  const switchUser = (userId: string) => {
    const user = demoUsers.find(u => u.id === userId)
    if (user) {
      setCurrentUser(user)
    }
  }

  const isAdmin = currentUser?.role === 'admin'

  const value = {
    currentUser,
    login,
    logout,
    switchUser,
    isAdmin
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
