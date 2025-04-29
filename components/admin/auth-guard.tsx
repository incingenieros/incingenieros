"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/contexts/language-context'

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { locale } = useLanguage()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Traducciones para los mensajes
  const authText = {
    notAuthorized: {
      es: 'No estás autorizado para acceder a esta página',
      en: 'You are not authorized to access this page',
      ca: 'No estàs autoritzat per accedir a aquesta pàgina'
    },
    redirecting: {
      es: 'Redirigiendo a la página principal...',
      en: 'Redirecting to home page...',
      ca: 'Redirigint a la pàgina principal...'
    }
  }

  useEffect(() => {
    // Verificar si el usuario está autenticado
    const checkAuth = () => {
      const adminToken = sessionStorage.getItem('adminToken')
      
      if (adminToken === 'true') {
        setIsAuthenticated(true)
      } else {
        // Si no está autenticado, redirigir a la página principal después de un breve retraso
        setTimeout(() => {
          router.push('/')
        }, 2000)
      }
      
      setIsLoading(false)
    }
    
    checkAuth()
  }, [router])
  
  // Mostrar pantalla de carga mientras se verifica la autenticación
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto mb-4"></div>
          <p className="text-indigo-300 text-lg">
            {locale === 'es' ? 'Verificando autenticación...' : 
             locale === 'en' ? 'Verifying authentication...' : 
             'Verificant autenticació...'}
          </p>
        </div>
      </div>
    )
  }
  
  // Si no está autenticado, mostrar mensaje de error y redirección
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="text-center p-6 bg-gray-800 rounded-lg shadow-lg max-w-md">
          <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2 className="text-xl font-bold text-white mb-2">
            {locale === 'es' ? authText.notAuthorized.es : 
             locale === 'en' ? authText.notAuthorized.en : 
             authText.notAuthorized.ca}
          </h2>
          <p className="text-indigo-300 mt-4">
            {locale === 'es' ? authText.redirecting.es : 
             locale === 'en' ? authText.redirecting.en : 
             authText.redirecting.ca}
          </p>
        </div>
      </div>
    )
  }
  
  // Si está autenticado, mostrar el contenido protegido
  return <>{children}</>
}
