import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

export default function Footer() {
  const { locale } = useLanguage();
  
  // Traducciones para los títulos del footer
  const footerTitles = {
    contact: {
      es: "Contacto",
      en: "Contact",
      ca: "Contacte"
    },
    info: {
      es: "Información",
      en: "Information",
      ca: "Informació"
    },
    navigation: {
      es: "Navegación",
      en: "Navigation",
      ca: "Navegació"
    },
    services: {
      es: "Servicios",
      en: "Services",
      ca: "Serveis"
    },
    legal: {
      es: "Legal",
      en: "Legal",
      ca: "Legal"
    }
  };
  
  return (
    <footer className="bg-gray-900/30 backdrop-blur-sm">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 md:py-16">
          {/* Columna 1: Logo e información general */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Logo />
            </div>
            <p className="text-sm text-indigo-200/65">
              © {new Date().getFullYear()} Francisco Arrazola Méndez
            </p>
            <p className="text-sm text-indigo-200/65">
              {locale === "es" ? "Ingeniero Naval y Industrial" :
               locale === "en" ? "Naval and Industrial Engineer" :
               "Enginyer Naval i Oceànic"}
            </p>
            <p className="text-sm text-indigo-200/65">
              {locale === "es" ? "+20 años de experiencia en ingeniería marítima, offshore e industrial" :
               locale === "en" ? "+20 years of experience in maritime, offshore, and industrial engineering" :
               "+20 anys dexperiència en enginyeria marítima, offshore i industrial."}
            </p>
            <div className="pt-2">
              <div className="flex space-x-4">
                {/* LinkedIn */}
                <a
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-indigo-500 transition hover:bg-gray-700 hover:text-indigo-400"
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {/* Email */}
                <a
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-indigo-500 transition hover:bg-gray-700 hover:text-indigo-400"
                  href="mailto:info@incigenieros.com"
                  aria-label="Email"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
                {/* WhatsApp */}
                <a
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-green-500 transition hover:bg-gray-700 hover:text-green-400"
                  href="https://wa.me/34600000000"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Columna 2: Información de contacto */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-indigo-300">
              {locale === "es" ? footerTitles.contact.es :
               locale === "en" ? footerTitles.contact.en :
               footerTitles.contact.ca}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start text-indigo-200/65">
                <svg className="h-4 w-4 mr-2 mt-1 flex-shrink-0 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>
                  {locale === "es" ? "Calle Avall, 2, 43812 Bràfim, Tarragona, España" :
                   locale === "en" ? "Avall Street, 2, 43812 Bràfim, Tarragona, Spain" :
                   "Carrer d'Avall, 2, 43812 Bràfim, Tarragona, Espanya"}
                </span>
              </li>
              <li className="flex items-center text-indigo-200/65">
                <svg className="h-4 w-4 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a href="mailto:info@incigenieros.com" className="hover:text-indigo-500 transition">info@incigenieros.com</a>
              </li>
              <li className="flex items-center text-indigo-200/65">
                <svg className="h-4 w-4 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7z" />
                </svg>
                <a href="tel:+34600000000" className="hover:text-indigo-500 transition">+34 600 000 000</a>
              </li>
              <li className="flex items-center text-indigo-200/65">
                <svg className="h-4 w-4 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
                <span>
                  {locale === "es" ? "Horario: Lunes a Viernes 9:00 - 18:00" :
                   locale === "en" ? "Hours: Monday to Friday 9:00 - 18:00" :
                   "Horari: Dilluns a Divendres 9:00 - 18:00"}
                </span>
              </li>
            </ul>
          </div>

          {/* Columna 3: Enlaces de navegación */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-indigo-300">
              {locale === "es" ? footerTitles.navigation.es :
               locale === "en" ? footerTitles.navigation.en :
               footerTitles.navigation.ca}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#inicio">
                  {locale === "es" ? "Inicio" :
                   locale === "en" ? "Home" :
                   "Inici"}
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#experiencia">
                  {locale === "es" ? "Experiencia" :
                   locale === "en" ? "Experience" :
                   "Experiència"}
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#consultoria">
                  {locale === "es" ? "Consultoría" :
                   locale === "en" ? "Consulting" :
                   "Consultoria"}
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#industrial">
                  {locale === "es" ? "Industrial" :
                   locale === "en" ? "Industrial" :
                   "Industrial"}
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#naval">
                  {locale === "es" ? "Naval" :
                   locale === "en" ? "Naval" :
                   "Naval"}
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#testimonios">
                  {locale === "es" ? "Éxitos" :
                   locale === "en" ? "Success Stories" :
                   "Èxits"}
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#contacto">
                  {locale === "es" ? "Contacto" :
                   locale === "en" ? "Contact" :
                   "Contacte"}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Columna 4: Servicios y legal */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-indigo-300">
              {locale === "es" ? footerTitles.services.es :
               locale === "en" ? footerTitles.services.en :
               footerTitles.services.ca}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#">
                  {locale === "es" ? "Diseño Naval" :
                   locale === "en" ? "Naval Design" :
                   "Disseny Naval"}
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#">
                  {locale === "es" ? "Certificación" :
                   locale === "en" ? "Certification" :
                   "Certificació"}
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#">
                  {locale === "es" ? "Consultoría Técnica" :
                   locale === "en" ? "Technical Consulting" :
                   "Consultoria Tècnica"}
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#">
                  {locale === "es" ? "Proyectos Industriales" :
                   locale === "en" ? "Industrial Projects" :
                   "Projectes Industrials"}
                </a>
              </li>
            </ul>
            
            <h4 className="text-md font-semibold text-indigo-300 mt-6">
              {locale === "es" ? footerTitles.legal.es :
               locale === "en" ? footerTitles.legal.en :
               footerTitles.legal.ca}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#">
                  {locale === "es" ? "Política de Privacidad" :
                   locale === "en" ? "Privacy Policy" :
                   "Política de Privacitat"}
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#">
                  {locale === "es" ? "Términos y Condiciones" :
                   locale === "en" ? "Terms and Conditions" :
                   "Termes i Condicions"}
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#">
                  {locale === "es" ? "Aviso Legal" :
                   locale === "en" ? "Legal Notice" :
                   "Avís Legal"}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>
        
        {/* Copyright, redes sociales y créditos en la misma línea */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-6 text-sm text-indigo-200/50">
          {/* Copyright */}
          <div>
            {locale === "es" ? "Todos los derechos reservados" :
             locale === "en" ? "All rights reserved" :
             "Tots els drets reservats"} © {new Date().getFullYear()} INC Ingenieros
          </div>
          
          {/* Redes sociales */}
          <div className="flex justify-center my-4 md:my-0">
            <ul className="flex gap-3">
              {/* LinkedIn */}
              <li>
                <a
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-indigo-500 transition hover:bg-gray-700 hover:text-indigo-400"
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>
            
              {/* Facebook */}
              <li>
                <a
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-indigo-500 transition hover:bg-gray-700 hover:text-indigo-400"
                  href="https://facebook.com"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-indigo-500 transition hover:bg-gray-700 hover:text-indigo-400"
                  href="https://instagram.com"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </li>
            
              {/* Twitter/X */}
              <li>
                <a
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-indigo-500 transition hover:bg-gray-700 hover:text-indigo-400"
                  href="https://x.com"
                  aria-label="Twitter/X"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </li>
            
              {/* Email */}
              <li>
                <a
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-indigo-500 transition hover:bg-gray-700 hover:text-indigo-400"
                  href="mailto:info@incigenieros.com"
                  aria-label="Email"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Diseñado por y Admin */}
          <div className="flex flex-col items-end">
            <div>
              {locale === "es" ? "Diseñado por:" :
               locale === "en" ? "Designed by:" :
               "Dissenyat per:"} Digitalización Integral
            </div>
            <Link 
              href="/admin" 
              className="text-xs text-indigo-400 hover:text-indigo-300 mt-1"
            >
              {locale === "es" ? "Panel Admin" :
               locale === "en" ? "Admin Panel" :
               "Panell Admin"}
            </Link>
          </div>
        </div>
        
        {/* KitDigital logo a todo el ancho */}
        <div className="py-6 border-t border-gray-800 mt-6">
          <div className="w-full max-w-6xl mx-auto" style={{ height: '100px' }}>
            <Image 
              src="/images/footer/footer/KitDigital.png" 
              alt="Kit Digital" 
              width={1200} 
              height={200} 
              className="w-full h-auto object-contain" 
              priority
              style={{ maxHeight: '100px' }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
