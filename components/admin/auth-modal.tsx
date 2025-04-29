"use client"

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/language-context'
import { useRouter } from 'next/navigation'
import Logo from '../ui/logo'
import Image from 'next/image'

interface AuthModalProps {
  isOpen: boolean
  onCloseAction: () => void
  onSuccessAction: () => void
}

export default function AuthModal({ isOpen, onCloseAction, onSuccessAction }: AuthModalProps) {
  const { locale } = useLanguage()
  const router = useRouter()
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  // Traducciones para el modal de autenticación
  const authText = {
    title: {
      es: 'Panel de Administración',
      en: 'Administration Panel',
      ca: 'Panell d\'Administració'
    },
    subtitle: {
      es: 'Iniciar Sesión',
      en: 'Login',
      ca: 'Iniciar Sessió'
    },
    username: {
      es: 'Usuario:',
      en: 'Username:',
      ca: 'Usuari:'
    },
    password: {
      es: 'Contraseña:',
      en: 'Password:',
      ca: 'Contrasenya:'
    },
    rememberMe: {
      es: 'Recordarme',
      en: 'Remember me',
      ca: 'Recorda\'m'
    },
    login: {
      es: 'Iniciar Sesión',
      en: 'Login',
      ca: 'Iniciar Sessió'
    },
    cancel: {
      es: 'Cancelar',
      en: 'Cancel',
      ca: 'Cancel·lar'
    },
    invalidCredentials: {
      es: 'Usuario o contraseña incorrectos',
      en: 'Invalid username or password',
      ca: 'Usuari o contrasenya incorrectes'
    }
  }
  
  // Verificar si hay credenciales guardadas al cargar el componente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedAuth = localStorage.getItem('adminAuth')
      if (savedAuth) {
        try {
          const { username: savedUsername, password: savedPassword } = JSON.parse(savedAuth)
          setUsername(savedUsername)
          setPassword(savedPassword)
          setRememberMe(true)
        } catch (e) {
          console.error('Error parsing saved auth data')
        }
      }
    }
  }, [])
  
  // Cerrar el modal con la tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseAction()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onCloseAction])
  
  // Prevenir scroll en el body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])
  
  // Función para manejar el inicio de sesión
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    
    try {
      // Simulamos una petición a un servidor con un timeout
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Importamos el archivo JSON con las credenciales
      const response = await fetch('/admin-auth.json')
      const authData = await response.json()
      
      // Verificamos las credenciales
      if (username === authData.username && password === authData.password) {
        // Guardar en localStorage si rememberMe está activado
        if (rememberMe) {
          localStorage.setItem('adminAuth', JSON.stringify({ username, password }))
        } else {
          localStorage.removeItem('adminAuth')
        }
        
        // Guardar token de sesión
        sessionStorage.setItem('adminToken', 'true')
        
        // Llamar a la función de éxito
        onSuccessAction()
        
        // Redirigir al dashboard
        router.push('/admin')
      } else {
        setError(locale === 'es' ? authText.invalidCredentials.es : 
                locale === 'en' ? authText.invalidCredentials.en : 
                authText.invalidCredentials.ca)
      }
    } catch (error) {
      console.error('Error during login:', error)
      setError(locale === 'es' ? 'Error al iniciar sesión' : 
              locale === 'en' ? 'Login error' : 
              'Error en iniciar sessió')
    } finally {
      setIsLoading(false)
    }
  }
  
  if (!isOpen) return null
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg shadow-lg max-w-md w-full border border-gray-700 animate-fadeIn">
        <div className="p-6">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="mb-3">
              <Logo />
            </div>
            <h2 className="text-2xl font-bold text-white text-center">
              {locale === 'es' ? authText.title.es : 
               locale === 'en' ? authText.title.en : 
               authText.title.ca}
            </h2>
            <p className="text-indigo-300 mt-1 text-center">
              Ing. Francisco J. Arrazola Méndez
            </p>
            <div className="mt-3 mb-2 w-16 h-1 bg-indigo-500 rounded-full"></div>
            <h3 className="text-xl text-indigo-200">
              {locale === 'es' ? authText.subtitle.es : 
               locale === 'en' ? authText.subtitle.en : 
               authText.subtitle.ca}
            </h3>
          </div>
          
          {error && (
            <div className="bg-red-900/30 border border-red-500 text-red-200 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-indigo-200 mb-2 text-left" htmlFor="username">
                {locale === 'es' ? authText.username.es : 
                 locale === 'en' ? authText.username.en : 
                 authText.username.ca}
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-indigo-200 mb-2 text-left" htmlFor="password">
                {locale === 'es' ? authText.password.es : 
                 locale === 'en' ? authText.password.en : 
                 authText.password.ca}
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-700 rounded bg-gray-800"
              />
              <label className="ml-2 block text-indigo-200" htmlFor="rememberMe">
                {locale === 'es' ? authText.rememberMe.es : 
                 locale === 'en' ? authText.rememberMe.en : 
                 authText.rememberMe.ca}
              </label>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={onCloseAction}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
              >
                {locale === 'es' ? authText.cancel.es : 
                 locale === 'en' ? authText.cancel.en : 
                 authText.cancel.ca}
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className={`px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {locale === 'es' ? 'Cargando...' : locale === 'en' ? 'Loading...' : 'Carregant...'}
                  </span>
                ) : (
                  locale === 'es' ? authText.login.es : 
                  locale === 'en' ? authText.login.en : 
                  authText.login.ca
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
