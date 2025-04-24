"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-2 md:pt-5">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/75 px-3 backdrop-blur-md before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex items-center gap-3">
            <Logo />
            <h1 className="text-lg text-white whitespace-nowrap">Francisco J. Arrazola Méndez</h1>
          </div>

          {/* Desktop menu - SOLO visible en desktop */}
          <div className="hidden md:block">
            <div className="flex items-center">
              <nav>
                <ul className="flex items-center gap-6 text-sm">
                  <li><a href="#inicio" className="text-gray-300 hover:text-white">Inicio</a></li>
                  <li><a href="#experiencia" className="text-gray-300 hover:text-white">Experiencia</a></li>
                  <li><a href="#consultoria" className="text-gray-300 hover:text-white">Consultoría</a></li>
                  <li><a href="#industrial" className="text-gray-300 hover:text-white">Industrial</a></li>
                  <li><a href="#naval" className="text-gray-300 hover:text-white">Naval</a></li>
                  <li><a href="#exitos" className="text-gray-300 hover:text-white">Éxitos</a></li>
                  <li><a href="#contacto" className="text-gray-300 hover:text-white">Contacto</a></li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Hamburger button - SOLO visible en móvil */}
          <button 
            className="block md:hidden" 
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900/95">
          <div className="flex h-full flex-col overflow-y-auto pt-16 pb-6 px-6">
            {/* Close button */}
            <div className="absolute top-4 right-4">
              <button 
                className="text-white" 
                onClick={() => setMobileNavOpen(false)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Mobile navigation */}
            <nav className="mt-8">
              <ul className="flex flex-col space-y-6 text-lg text-center">
                <li><a href="#inicio" className="block text-gray-300 hover:text-white" onClick={() => setMobileNavOpen(false)}>Inicio</a></li>
                <li><a href="#experiencia" className="block text-gray-300 hover:text-white" onClick={() => setMobileNavOpen(false)}>Experiencia</a></li>
                <li><a href="#consultoria" className="block text-gray-300 hover:text-white" onClick={() => setMobileNavOpen(false)}>Consultoría</a></li>
                <li><a href="#industrial" className="block text-gray-300 hover:text-white" onClick={() => setMobileNavOpen(false)}>Industrial</a></li>
                <li><a href="#naval" className="block text-gray-300 hover:text-white" onClick={() => setMobileNavOpen(false)}>Naval</a></li>
                <li><a href="#exitos" className="block text-gray-300 hover:text-white" onClick={() => setMobileNavOpen(false)}>Éxitos</a></li>
                <li><a href="#contacto" className="block text-gray-300 hover:text-white" onClick={() => setMobileNavOpen(false)}>Contacto</a></li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
