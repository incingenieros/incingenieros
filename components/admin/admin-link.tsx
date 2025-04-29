"use client"

import { useState } from 'react'
import { useLanguage } from '@/contexts/language-context'
import AuthModal from './auth-modal'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/navigation'

export default function AdminLink() {
  const { locale } = useLanguage()
  const { isAuthenticated, login } = useAuth()
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Traducciones para el enlace
  const linkText = {
    adminPanel: {
      es: 'Panel Admin',
      en: 'Admin Panel',
      ca: 'Panell Admin'
    }
  }
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    if (isAuthenticated) {
      // Si ya está autenticado, redirigir directamente al panel
      router.push('/admin')
    } else {
      // Si no está autenticado, mostrar el modal
      setIsModalOpen(true)
    }
  }
  
  const handleAuthSuccess = () => {
    login()
    setIsModalOpen(false)
  }
  
  return (
    <>
      <a 
        href="#" 
        onClick={handleClick}
        className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
      >
        {locale === 'es' ? linkText.adminPanel.es : 
         locale === 'en' ? linkText.adminPanel.en : 
         linkText.adminPanel.ca}
      </a>
      
      <AuthModal 
        isOpen={isModalOpen} 
        onCloseAction={() => setIsModalOpen(false)} 
        onSuccessAction={handleAuthSuccess}
      />
    </>
  )
}
