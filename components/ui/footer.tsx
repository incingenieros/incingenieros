"use client";

import { useState } from "react";
import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";
import AdminLink from "@/components/admin/admin-link";

export default function Footer() {
  const { locale } = useLanguage();
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [legalNoticeOpen, setLegalNoticeOpen] = useState(false);
  const [logoModalOpen, setLogoModalOpen] = useState(false);
  
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
    <>
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
              {locale === "es" ? "Ingeniero Naval e Industrial" :
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
                {/* Facebook */}
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
                {/* Instagram */}
                <a
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-indigo-500 transition hover:bg-gray-700 hover:text-indigo-400"
                  href="https://instagram.com"
                  aria-label="instagram"
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
                {/* Twitter/X */}
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
                <a href="tel:+34607651430" className="hover:text-indigo-500 transition">(+34) 607 651 430</a>
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
                <button 
                  onClick={() => setPrivacyPolicyOpen(true)} 
                  className="text-indigo-200/65 transition hover:text-indigo-500 cursor-pointer text-left"
                >
                  {locale === "es" ? "Política de Privacidad" :
                   locale === "en" ? "Privacy Policy" :
                   "Política de Privacitat"}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setTermsOpen(true)} 
                  className="text-indigo-200/65 transition hover:text-indigo-500 cursor-pointer text-left"
                >
                  {locale === "es" ? "Términos y Condiciones" :
                   locale === "en" ? "Terms and Conditions" :
                   "Termes i Condicions"}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLegalNoticeOpen(true)} 
                  className="text-indigo-200/65 transition hover:text-indigo-500 cursor-pointer text-left"
                >
                  {locale === "es" ? "Aviso Legal" :
                   locale === "en" ? "Legal Notice" :
                   "Avís Legal"}
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider 
        <div className="border-t border-gray-800 my-8"></div>
        */}
        
        {/* Copyright y créditos centrados uno debajo del otro */}
        <div className="flex flex-col items-center justify-center pb-6 text-sm text-indigo-200/50">
          {/* Copyright */}
          <div className="text-center mb-2">
            {locale === "es" ? "Todos los derechos reservados" :
             locale === "en" ? "All rights reserved" :
             "Tots els drets reservats"} © {new Date().getFullYear()} INC Ingenieros
          </div>
          
          {/* Diseñado por */}
          <div className="text-center mb-2">
            {locale === "es" ? "Diseñado por:" :
             locale === "en" ? "Designed by:" :
             "Dissenyat per:"} Digitalización Integral
          </div>
          
          {/* Logo de Digitalización Integral */}
          <div className="mb-3">
            <button 
              onClick={() => setLogoModalOpen(true)}
              className="cursor-pointer transition-transform hover:scale-105 focus:outline-none"
            >
              <Image 
                src="/images/footer/di-logo.png" 
                alt="Digitalización Integral Logo" 
                width={150} 
                height={50} 
                className="h-10 w-auto object-contain rounded-md" 
              />
            </button>
          </div>
          
          {/* Admin Panel */}
          <div className="text-xs text-indigo-400 hover:text-indigo-300 text-center cursor-pointer focus:outline-none">
            <AdminLink />
          </div>
        </div>
        
        {/* KitDigital logo a todo el ancho */}
        <div className="py-6 border-t border-gray-800 mt-6">
          <div className="w-full max-w-6xl mx-auto" style={{ height: '100px' }}>
            <Image 
              src="/images/footer/KitDigital.png" 
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

      {/* Modal de Política de Privacidad */}
      {privacyPolicyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80">
          <div className="relative bg-gray-800 rounded-xl shadow-[0_0_30px_rgba(99,102,241,0.3)] max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Encabezado del modal */}
            <div className="sticky top-0 bg-gray-800 px-6 py-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-indigo-300">
                {locale === "es" ? "Política de Privacidad" :
                 locale === "en" ? "Privacy Policy" :
                 "Política de Privacitat"}
              </h3>
              <button 
                onClick={() => setPrivacyPolicyOpen(false)}
                className="rounded-full bg-gray-700/50 p-2 text-indigo-200/65 transition-colors hover:bg-indigo-600/20 hover:text-indigo-300"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            {/* Contenido del modal */}
            <div className="p-6 text-indigo-200/80">
              {locale === "es" ? (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-indigo-300">Política de Privacidad</h4>
                  <p>Última actualización: {new Date().toLocaleDateString()}</p>
                  <p>En INC Ingenieros, accesible desde este sitio web, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene los tipos de información que se recopilan y registran por INC Ingenieros y cómo la utilizamos.</p>
                  
                  <h5 className="text-md font-semibold text-indigo-300 mt-4">Información que recopilamos</h5>
                  <p>La información personal que se te solicita proporcionar, y las razones por las que se te solicita proporcionarla, se te aclarará en el momento en que te pidamos que proporciones tu información personal.</p>
                  <p>Si te pones en contacto con nosotros directamente, podemos recibir información adicional sobre ti, como tu nombre, dirección de correo electrónico, número de teléfono, el contenido del mensaje y/o archivos adjuntos que puedas enviarnos, y cualquier otra información que elijas proporcionar.</p>
                  
                  <h5 className="text-md font-semibold text-indigo-300 mt-4">Cómo utilizamos tu información</h5>
                  <p>Utilizamos la información que recopilamos de varias formas, incluyendo:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Proporcionar, operar y mantener nuestro sitio web</li>
                    <li>Mejorar, personalizar y expandir nuestro sitio web</li>
                    <li>Entender y analizar cómo utilizas nuestro sitio web</li>
                    <li>Desarrollar nuevos productos, servicios, características y funcionalidades</li>
                    <li>Comunicarnos contigo, ya sea directamente o a través de uno de nuestros socios, para proporcionarte actualizaciones y otra información relacionada con el sitio web y para propósitos de marketing y promocionales</li>
                    <li>Enviarte correos electrónicos</li>
                    <li>Encontrar y prevenir el fraude</li>
                  </ul>
                </div>
              ) : locale === "en" ? (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-indigo-300">Privacy Policy</h4>
                  <p>Last updated: {new Date().toLocaleDateString()}</p>
                  <p>At INC Ingenieros, accessible from this website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by INC Ingenieros and how we use it.</p>
                  
                  <h5 className="text-md font-semibold text-indigo-300 mt-4">Information We Collect</h5>
                  <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                  <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
                  
                  <h5 className="text-md font-semibold text-indigo-300 mt-4">How We Use Your Information</h5>
                  <p>We use the information we collect in various ways, including to:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Provide, operate, and maintain our website</li>
                    <li>Improve, personalize, and expand our website</li>
                    <li>Understand and analyze how you use our website</li>
                    <li>Develop new products, services, features, and functionality</li>
                    <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                    <li>Send you emails</li>
                    <li>Find and prevent fraud</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-indigo-300">Política de Privacitat</h4>
                  <p>Última actualització: {new Date().toLocaleDateString()}</p>
                  <p>A INC Ingenieros, accessible des d'aquest lloc web, una de les nostres principals prioritats és la privacitat dels nostres visitants. Aquest document de Política de Privacitat conté els tipus d'informació que es recopilen i registren per INC Ingenieros i com l'utilitzem.</p>
                  
                  <h5 className="text-md font-semibold text-indigo-300 mt-4">Informació que recopilem</h5>
                  <p>La informació personal que se't sol·licita proporcionar, i les raons per les quals se't sol·licita proporcionar-la, se t'aclarirà en el moment en què et demanem que proporcionis la teva informació personal.</p>
                  <p>Si et poses en contacte amb nosaltres directament, podem rebre informació addicional sobre tu, com el teu nom, adreça de correu electrònic, número de telèfon, el contingut del missatge i/o arxius adjunts que puguis enviar-nos, i qualsevol altra informació que triïs proporcionar.</p>
                  
                  <h5 className="text-md font-semibold text-indigo-300 mt-4">Com utilitzem la teva informació</h5>
                  <p>Utilitzem la informació que recopilem de diverses maneres, incloent:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Proporcionar, operar i mantenir el nostre lloc web</li>
                    <li>Millorar, personalitzar i expandir el nostre lloc web</li>
                    <li>Entendre i analitzar com utilitzes el nostre lloc web</li>
                    <li>Desenvolupar nous productes, serveis, característiques i funcionalitats</li>
                    <li>Comunicar-nos amb tu, ja sigui directament o a través d'un dels nostres socis, per proporcionar-te actualitzacions i altra informació relacionada amb el lloc web i per a propòsits de màrqueting i promocionals</li>
                    <li>Enviar-te correus electrònics</li>
                    <li>Trobar i prevenir el frau</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Pie del modal */}
            <div className="sticky bottom-0 bg-gray-800 px-6 py-4 border-t border-gray-700 flex justify-end">
              <button
                onClick={() => setPrivacyPolicyOpen(false)}
                className="btn bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] px-5 py-2 rounded-lg"
              >
                {locale === "es" ? "Cerrar" :
                 locale === "en" ? "Close" :
                 "Tancar"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Términos y Condiciones */}
      {termsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80">
          <div className="relative bg-gray-800 rounded-xl shadow-[0_0_30px_rgba(99,102,241,0.3)] max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Encabezado del modal */}
            <div className="sticky top-0 bg-gray-800 px-6 py-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-indigo-300">
                {locale === "es" ? "Términos y Condiciones" :
                 locale === "en" ? "Terms and Conditions" :
                 "Termes i Condicions"}
              </h3>
              <button 
                onClick={() => setTermsOpen(false)}
                className="rounded-full bg-gray-700/50 p-2 text-indigo-200/65 transition-colors hover:bg-indigo-600/20 hover:text-indigo-300"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            {/* Contenido del modal */}
            <div className="p-6 text-indigo-200/80">
              {locale === "es" ? (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-indigo-300">Términos y Condiciones</h4>
                  <p>Última actualización: {new Date().toLocaleDateString()}</p>
                  <p>Bienvenido a INC Ingenieros. Al acceder a este sitio web, aceptas cumplir con estos términos de servicio, todas las leyes y regulaciones aplicables, y reconoces que eres responsable de cumplir con las leyes locales aplicables. Si no estás de acuerdo con alguno de estos términos, tienes prohibido usar o acceder a este sitio.</p>
                  
                  <h5 className="text-md font-semibold text-indigo-300 mt-4">1. Uso de la Licencia</h5>
                  <p>Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de INC Ingenieros, solo para visualización transitoria personal y no comercial. Esta es la concesión de una licencia, no una transferencia de título, y bajo esta licencia no puedes:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Modificar o copiar los materiales;</li>
                    <li>Usar los materiales para cualquier propósito comercial o para exhibición pública (comercial o no comercial);</li>
                    <li>Intentar descompilar o aplicar ingeniería inversa a cualquier software contenido en el sitio web de INC Ingenieros;</li>
                    <li>Eliminar cualquier copyright u otras notaciones de propiedad de los materiales; o</li>
                    <li>Transferir los materiales a otra persona o "reflejar" los materiales en cualquier otro servidor.</li>
                  </ul>
                  
                  <h5 className="text-md font-semibold text-indigo-300 mt-4">2. Exención de responsabilidad</h5>
                  <p>Los materiales en el sitio web de INC Ingenieros se proporcionan "tal cual". INC Ingenieros no ofrece garantías, expresas o implícitas, y por la presente renuncia y niega todas las demás garantías, incluyendo, sin limitación, garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular, o no infracción de propiedad intelectual u otra violación de derechos.</p>
                </div>
              ) : locale === "en" ? (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-indigo-300">Terms and Conditions</h4>
                  <p>Last updated: {new Date().toLocaleDateString()}</p>
                  <p>Welcome to INC Ingenieros. By accessing this website, you agree to comply with these terms of service, all applicable laws and regulations, and acknowledge that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
                  
                  <h5 className="text-md font-semibold text-indigo-300 mt-4">1. License Usage</h5>
                  <p>Permission is granted to temporarily download one copy of the materials (information or software) on INC Ingenieros' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Modify or copy the materials;</li>
                    <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial);</li>
                    <li>Attempt to decompile or reverse engineer any software contained on INC Ingenieros' website;</li>
                    <li>Remove any copyright or other proprietary notations from the materials; or</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                  </ul>
                  
                  <h5 className="text-md font-semibold text-indigo-300 mt-4">2. Disclaimer</h5>
                  <p>The materials on INC Ingenieros' website are provided on an 'as is' basis. INC Ingenieros makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-indigo-300">Termes i Condicions</h4>
                  <p>Última actualització: {new Date().toLocaleDateString()}</p>
                  <p>Benvingut a INC Ingenieros. En accedir a aquest lloc web, acceptes complir amb aquests termes de servei, totes les lleis i regulacions aplicables, i reconeixes que ets responsable de complir amb les lleis locals aplicables. Si no estàs d'acord amb algun d'aquests termes, tens prohibit utilitzar o accedir a aquest lloc.</p>
                  
                  <h5 className="text-md font-semibold text-indigo-300 mt-4">1. Ús de la Llicència</h5>
                  <p>Es concedeix permís per descarregar temporalment una còpia dels materials (informació o programari) al lloc web d'INC Ingenieros, només per a visualització transitòria personal i no comercial. Aquesta és la concessió d'una llicència, no una transferència de títol, i sota aquesta llicència no pots:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Modificar o copiar els materials;</li>
                    <li>Utilitzar els materials per a qualsevol propòsit comercial o per a exhibició pública (comercial o no comercial);</li>
                    <li>Intentar descompilar o aplicar enginyeria inversa a qualsevol programari contingut al lloc web d'INC Ingenieros;</li>
                    <li>Eliminar qualsevol copyright o altres notacions de propietat dels materials; o</li>
                    <li>Transferir els materials a una altra persona o "reflectir" els materials en qualsevol altre servidor.</li>
                  </ul>
                  
                  <h5 className="text-md font-semibold text-indigo-300 mt-4">2. Exempció de responsabilitat</h5>
                  <p>Els materials al lloc web d'INC Ingenieros es proporcionen "tal com són". INC Ingenieros no ofereix garanties, expresses o implícites, i per la present renuncia i nega totes les altres garanties, incloent, sense limitació, garanties implícites o condicions de comerciabilitat, idoneïtat per a un propòsit particular, o no infracció de propietat intel·lectual o altra violació de drets.</p>
                </div>
              )}
            </div>
            
            {/* Pie del modal */}
            <div className="sticky bottom-0 bg-gray-800 px-6 py-4 border-t border-gray-700 flex justify-end">
              <button
                onClick={() => setTermsOpen(false)}
                className="btn bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] px-5 py-2 rounded-lg"
              >
                {locale === "es" ? "Cerrar" :
                 locale === "en" ? "Close" :
                 "Tancar"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Aviso Legal */}
      {legalNoticeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80">
          <div className="relative bg-gray-800 rounded-xl shadow-[0_0_30px_rgba(99,102,241,0.3)] max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Encabezado del modal */}
            <div className="sticky top-0 bg-gray-800 px-6 py-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-indigo-300">
                {locale === "es" ? "Aviso Legal" :
                 locale === "en" ? "Legal Notice" :
                 "Avís Legal"}
              </h3>
              <button 
                onClick={() => setLegalNoticeOpen(false)}
                className="rounded-full bg-gray-700/50 p-2 text-indigo-200/65 transition-colors hover:bg-indigo-600/20 hover:text-indigo-300"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            {/* Contenido del modal */}
            <div className="p-6 text-indigo-200/80">
              {locale === "es" ? (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-indigo-300">Aviso Legal</h4>
                  <p>Última actualización: {new Date().toLocaleDateString()}</p>
                  
                  <h5 className="text-md font-semibold text-indigo-300 mt-4">Identificación y Titularidad</h5>
                  <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Titular: Francisco J. Arrazola Méndez</li>
                    <li>Domicilio: Calle Avall, 2, 43812 Bràfim, Tarragona, España</li>
                    <li>NIF: 00000000X</li>
                    <li>Teléfono: (+34) 607 651 430</li>
                    <li>Email: info@incigenieros.com</li>
                  </ul>
                  
                  <h5 className="text-md font-semibold text-indigo-300 mt-4">Finalidad del Sitio Web</h5>
                  <p>Este sitio web ha sido creado con el objetivo de ofrecer información sobre los servicios profesionales de ingeniería naval, oceánica e industrial que proporciona Francisco J. Arrazola Méndez.</p>
                  
                  <h5 className="text-md font-semibold text-indigo-300 mt-4">Condiciones de Uso</h5>
                  <p>La utilización del sitio web le otorga la condición de usuario, e implica la aceptación completa de todas las condiciones incluidas en este Aviso Legal. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que se ofrecen a través de este sitio web y a no emplearlos para incurrir en actividades ilícitas o contrarias a la buena fe y al ordenamiento legal.</p>
                </div>
              ) : locale === "en" ? (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-indigo-300">Legal Notice</h4>
                  <p>Last updated: {new Date().toLocaleDateString()}</p>
                  
                  <h5 className="text-md font-semibold text-indigo-300 mt-4">Identification and Ownership</h5>
                  <p>In compliance with article 10 of Law 34/2002, of July 11, on Information Society Services and Electronic Commerce, the following information is provided:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Owner: Francisco J. Arrazola Méndez</li>
                    <li>Address: Avall Street, 2, 43812 Bràfim, Tarragona, Spain</li>
                    <li>Tax ID: 00000000X</li>
                    <li>Phone: (+34) 607 651 430</li>
                    <li>Email: info@incigenieros.com</li>
                  </ul>
                  
                  <h5 className="text-md font-semibold text-indigo-300 mt-4">Website Purpose</h5>
                  <p>This website has been created with the aim of providing information about the professional naval, oceanic, and industrial engineering services provided by Francisco J. Arrazola Méndez.</p>
                  
                  <h5 className="text-md font-semibold text-indigo-300 mt-4">Terms of Use</h5>
                  <p>The use of the website grants you the status of user, and implies complete acceptance of all the conditions included in this Legal Notice. The user agrees to make appropriate use of the contents and services offered through this website and not to use them to engage in illegal activities or activities contrary to good faith and legal regulations.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-indigo-300">Avís Legal</h4>
                  <p>Última actualització: {new Date().toLocaleDateString()}</p>
                  
                  <h5 className="text-md font-semibold text-indigo-300 mt-4">Identificació i Titularitat</h5>
                  <p>En compliment de l'article 10 de la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i Comerç Electrònic, s'informa:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Titular: Francisco J. Arrazola Méndez</li>
                    <li>Domicili: Carrer d'Avall, 2, 43812 Bràfim, Tarragona, Espanya</li>
                    <li>NIF: 00000000X</li>
                    <li>Telèfon: (+34) 607 651 430</li>
                    <li>Email: info@incigenieros.com</li>
                  </ul>
                  
                  <h5 className="text-md font-semibold text-indigo-300 mt-4">Finalitat del Lloc Web</h5>
                  <p>Aquest lloc web ha estat creat amb l'objectiu d'oferir informació sobre els serveis professionals d'enginyeria naval, oceànica i industrial que proporciona Francisco J. Arrazola Méndez.</p>
                  
                  <h5 className="text-md font-semibold text-indigo-300 mt-4">Condicions d'Ús</h5>
                  <p>La utilització del lloc web li atorga la condició d'usuari, i implica l'acceptació completa de totes les condicions incloses en aquest Avís Legal. L'usuari es compromet a fer un ús adequat dels continguts i serveis que s'ofereixen a través d'aquest lloc web i a no emprar-los per incórrer en activitats il·lícites o contràries a la bona fe i a l'ordenament legal.</p>
                </div>
              )}
            </div>
            
            {/* Pie del modal */}
            <div className="sticky bottom-0 bg-gray-800 px-6 py-4 border-t border-gray-700 flex justify-end">
              <button
                onClick={() => setLegalNoticeOpen(false)}
                className="btn bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] px-5 py-2 rounded-lg"
              >
                {locale === "es" ? "Cerrar" :
                 locale === "en" ? "Close" :
                 "Tancar"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal para el logo de Digitalización Integral */}
      {logoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80" onClick={() => setLogoModalOpen(false)}>
          <div 
            className="relative bg-gray-800 rounded-xl shadow-[0_0_30px_rgba(99,102,241,0.3)] p-4 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-2">
              <button 
                onClick={() => setLogoModalOpen(false)}
                className="rounded-full bg-gray-700/50 p-2 text-indigo-200/65 transition-colors hover:bg-indigo-600/20 hover:text-indigo-300"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="flex justify-center">
              <Image 
                src="/images/footer/di-logo.png" 
                alt="Digitalización Integral Logo" 
                width={500} 
                height={167} 
                className="w-full h-auto object-contain rounded-md" 
              />
            </div>
            <div className="mt-4 text-center text-indigo-200/80">
              <h3 className="text-lg font-semibold text-indigo-300 mb-1">Digitalización Integral</h3>
              <p>
                {locale === "es" ? "Soluciones digitales para empresas y profesionales" :
                 locale === "en" ? "Digital solutions for businesses and professionals" :
                 "Solucions digitals per a empreses i professionals"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Eliminado el modal del dashboard */}
    </>
  );
}
