"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Cierra el menú móvil cuando se cambia el tamaño de la ventana a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileNavOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-2 md:pt-5">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 backdrop-blur-md before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex items-center gap-3">
            <Logo />
            <h1 className="text-lg text-white whitespace-nowrap">Francisco J. Arrazola Méndez</h1>
          </div>

          {/* Desktop navigation - SOLO visible en desktop */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-white transition duration-150 ease-in-out">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#experiencia" className="text-gray-300 hover:text-white transition duration-150 ease-in-out">
                  Experiencia
                </a>
              </li>
              <li>
                <a href="#consultoria" className="text-gray-300 hover:text-white transition duration-150 ease-in-out">
                  Consultoría
                </a>
              </li>
              <li>
                <a href="#industrial" className="text-gray-300 hover:text-white transition duration-150 ease-in-out">
                  Industrial
                </a>
              </li>
              <li>
                <a href="#naval" className="text-gray-300 hover:text-white transition duration-150 ease-in-out">
                  Naval
                </a>
              </li>
              <li>
                <a href="#exitos" className="text-gray-300 hover:text-white transition duration-150 ease-in-out">
                  Éxitos
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-white transition duration-150 ease-in-out">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile menu button - SOLO visible en móvil */}
          <div className="block md:hidden">
            <button
              className="flex h-10 w-10 items-center justify-center"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {mobileNavOpen ? (
                  <path
                    className="fill-current"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    className="fill-current"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation overlay */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900/95">
          <div className="flex h-full flex-col overflow-y-auto pt-20 pb-6 px-6">
            <nav className="flex-grow">
              <ul className="flex flex-col space-y-6 text-lg text-center">
                <li>
                  <a 
                    href="#inicio" 
                    className="text-gray-300 hover:text-white transition duration-150 ease-in-out"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a 
                    href="#experiencia" 
                    className="text-gray-300 hover:text-white transition duration-150 ease-in-out"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Experiencia
                  </a>
                </li>
                <li>
                  <a 
                    href="#consultoria" 
                    className="text-gray-300 hover:text-white transition duration-150 ease-in-out"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Consultoría
                  </a>
                </li>
                <li>
                  <a 
                    href="#industrial" 
                    className="text-gray-300 hover:text-white transition duration-150 ease-in-out"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Industrial
                  </a>
                </li>
                <li>
                  <a 
                    href="#naval" 
                    className="text-gray-300 hover:text-white transition duration-150 ease-in-out"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Naval
                  </a>
                </li>
                <li>
                  <a 
                    href="#exitos" 
                    className="text-gray-300 hover:text-white transition duration-150 ease-in-out"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Éxitos
                  </a>
                </li>
                <li>
                  <a 
                    href="#contacto" 
                    className="text-gray-300 hover:text-white transition duration-150 ease-in-out"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
