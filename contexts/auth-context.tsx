"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  // Verificar si hay un token de autenticación al cargar
  useEffect(() => {
    const checkAuth = () => {
      const adminToken = sessionStorage.getItem('adminToken')
      setIsAuthenticated(adminToken === 'true')
    }
    
    // Verificar autenticación al cargar el componente
    checkAuth()
    
    // Escuchar cambios en el almacenamiento
    const handleStorageChange = () => {
      checkAuth()
    }
    
    window.addEventListener('storage', handleStorageChange)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])
  
  const login = () => {
    sessionStorage.setItem('adminToken', 'true')
    setIsAuthenticated(true)
  }
  
  const logout = () => {
    sessionStorage.removeItem('adminToken')
    setIsAuthenticated(false)
  }
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
