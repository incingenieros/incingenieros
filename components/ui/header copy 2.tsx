"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import ActiveLink from "./active-link";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 pt-2 md:pt-5">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/75 px-3 backdrop-blur-md before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex items-center gap-3">
            <Logo />
            <h1 className="text-lg text-white whitespace-nowrap">
              Ing. Francisco José Arrazola Méndez
            </h1>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm text-gray-300">
              <li><ActiveLink href="#inicio">Inicio</ActiveLink></li>
              <li><ActiveLink href="#experiencia">Experiencia</ActiveLink></li>
              <li><ActiveLink href="#consultoria">Consultoría</ActiveLink></li>
              <li><ActiveLink href="#industrial">Industrial</ActiveLink></li>
              <li><ActiveLink href="#naval">Naval</ActiveLink></li>
              <li><ActiveLink href="#testimonios">Éxitos</ActiveLink></li>
              <li><ActiveLink href="#contacto">Contacto</ActiveLink></li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            aria-controls="mobile-nav"
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6 fill-current text-gray-300 hover:text-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="4" width="24" height="2" />
              <rect y="11" width="24" height="2" />
              <rect y="18" width="24" height="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-nav"
        className={`fixed left-0 top-0 z-40 h-screen w-full transform bg-gray-900 p-6 transition-transform duration-300 ease-in-out md:hidden ${
          mobileNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo />
              <h1 className="text-lg font-bold text-white">Marítima Ingeniería</h1>
            </div>
            <button
              className="text-gray-300 hover:text-white"
              onClick={() => setMobileNavOpen(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.707 6.707L17.293 5.293 12 10.586 6.707 5.293 5.293 6.707 10.586 12 5.293 17.293 6.707 18.707 12 13.414 17.293 18.707 18.707 17.293 13.414 12z" />
              </svg>
            </button>
          </div>
          <nav className="flex grow flex-col">
            <ul className="space-y-4 text-lg text-gray-300">
              <li><Link href="#inicio" onClick={() => setMobileNavOpen(false)}>Inicio</Link></li>
              <li><Link href="#consultoria" onClick={() => setMobileNavOpen(false)}>Consultoría</Link></li>
              <li><Link href="#industrial" onClick={() => setMobileNavOpen(false)}>Industrial / Fabricación</Link></li>
              <li><Link href="#naval" onClick={() => setMobileNavOpen(false)}>Naval / Offshore</Link></li>
              <li><Link href="#contacto" onClick={() => setMobileNavOpen(false)}>Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
