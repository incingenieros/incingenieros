"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import ActiveLink from "./active-link";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-2 md:pt-5">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/75 px-3 backdrop-blur-md before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex items-center gap-3">
            <Logo />
            <h1 className="text-lg text-white whitespace-nowrap">Ing. Francisco José Arrazola Méndez
</h1>
          </div>

          {/* Desktop navigation */}
          <nav className="flex grow justify-end">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <ActiveLink href="#inicio">
                  Inicio
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="#experiencia">
                  Experiencia
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="#consultoria">
                  Consultoría
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="#industrial">
                  Industrial
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="#naval">
                  Naval
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="#testimonios">
                  Éxitos
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="#contacto">
                  Contacto
                </ActiveLink>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button - oculto para mostrar siempre la navegación */}
          <button
            className="hamburger hidden"
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

          {/* Desktop sign in links 
          <ul className="hidden md:flex md:items-center md:justify-end md:gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                Register
              </Link>
            </li>
          </ul>
          */}
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-nav"
        className={`fixed left-0 top-0 z-20 h-screen w-full transform bg-gray-900 p-6 transition-transform duration-300 ease-in-out ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full'}`}
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
            <ul className="space-y-4 text-lg">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/consultoria"
                  className="text-gray-300 hover:text-white"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Consultoría
                </Link>
              </li>
              <li>
                <Link
                  href="/ing-industrial"
                  className="text-gray-300 hover:text-white"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Industrial / Fabricación
                </Link>
              </li>
              <li>
                <Link
                  href="/ing-naval"
                  className="text-gray-300 hover:text-white"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Naval / Offshore
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-300 hover:text-white"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Contacto
                </Link>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/signin"
                    className="btn-sm w-full text-center bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="btn-sm w-full text-center bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
