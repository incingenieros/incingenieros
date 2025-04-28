// Importamos solo los estilos necesarios para el panel de administración
import "../css/style.css"
import "../globals.css"
import "./admin.css"

import { Inter } from "next/font/google"
import localFont from "next/font/local"
import { LanguageProviderWrapper } from "../../components/language-provider-wrapper"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const nacelle = localFont({
  src: [
    {
      path: "../../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
})

export const metadata = {
  title: "Panel Administrativo - INC Ingenieros",
  description: "Panel de administración para la gestión de contenidos del sitio web",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Panel Administrativo - INC Ingenieros</title>
      </head>
      <body className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased admin-page`}>
        <LanguageProviderWrapper>
          {children}
        </LanguageProviderWrapper>
        
        {/* Scripts personalizados para funcionalidades específicas del admin */}
        <script dangerouslySetInnerHTML={{ __html: `
          // Desactivar cualquier script del sitio principal que pueda estar interfiriendo
          window.addEventListener('load', function() {
            // Asegurarse de que no se cargue el menú principal
            document.querySelectorAll('header:not(.bg-gray-900)').forEach(function(el) {
              el.style.display = 'none';
              el.style.visibility = 'hidden';
            });
            
            // Eliminar cualquier otro elemento del sitio principal
            document.querySelectorAll('nav:not([class*="admin"])').forEach(function(el) {
              el.style.display = 'none';
              el.style.visibility = 'hidden';
            });
            
            // Forzar que solo se muestre el contenido de administración
            document.body.classList.add('admin-only');
          });
        `}} />
      </body>
    </html>
  )
}
