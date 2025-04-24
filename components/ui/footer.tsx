import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
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
        <div className="flex flex-col md:flex-row justify-between py-6 md:py-8">
          {/* Información general y copyright */}
          <div className="flex flex-col mb-6 md:mb-0 md:w-2/3">
            <div className="flex items-center mb-3">
              <Logo />
              <div className="ml-4 text-sm">
                <p className="text-indigo-200/65">
                  © {new Date().getFullYear()} Ing. Francisco José Arrazola Méndez
                </p>
              </div>
            </div>
            
            {/* Información de contacto */}
            <div className="text-sm space-y-2 mt-3">
              <div className="flex items-center text-indigo-200/65">
                <svg className="h-4 w-4 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>Carrer d'Avall, 2, 43812 Bràfim, Tarragona, España</span>
              </div>
              <div className="flex items-center text-indigo-200/65">
                <svg className="h-4 w-4 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a href="mailto:info@incigenieros.com" className="hover:text-indigo-500 transition">info@incigenieros.com</a>
              </div>
              <div className="flex items-center text-indigo-200/65">
                <svg className="h-4 w-4 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7z" />
                </svg>
                <a href="tel:+34600000000" className="hover:text-indigo-500 transition">+34 600 000 000</a>
              </div>
              <br/>
            </div>
          </div>

          {/* Columna derecha: Enlaces de navegación y redes sociales */}
          <div className="flex flex-col md:w-1/3">
            {/* Enlaces de navegación en columna */}
            <div className="mb-6">
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#inicio">Inicio</a>
                </li>
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#experiencia">Experiencia</a>
                </li>
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#consultoria">Consultoría</a>
                </li>
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#industrial">Industrial</a>
                </li>
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#naval">Naval</a>
                </li>
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#testimonios">Éxitos</a>
                </li>
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#contacto">Contacto</a>
                </li>
              </ul>
            </div>
            
            {/* Redes sociales */}
            <div className="flex">
              <ul className="flex gap-3">
                {/* LinkedIn */}
                <li>
                  <a
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-indigo-500 transition hover:bg-gray-700 hover:text-indigo-400"
                    href="https://linkedin.com"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="h-5 w-5 fill-current"
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
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-indigo-500 transition hover:bg-gray-700 hover:text-indigo-400"
                    href="https://facebook.com"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="h-5 w-5 fill-current"
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
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-indigo-500 transition hover:bg-gray-700 hover:text-indigo-400"
                    href="https://instagram.com"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="h-5 w-5 fill-current"
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
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-indigo-500 transition hover:bg-gray-700 hover:text-indigo-400"
                    href="https://x.com"
                    aria-label="Twitter/X"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="h-5 w-5 fill-current"
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
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-indigo-500 transition hover:bg-gray-700 hover:text-indigo-400"
                    href="mailto:info@incigenieros.com"
                    aria-label="Email"
                  >
                    <svg
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
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
