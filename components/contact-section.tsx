"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

export default function ContactSection() {
  const { locale } = useLanguage();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // Aquí iría la lógica para enviar el formulario a un backend
    // Por ahora, simulamos un envío exitoso después de un breve retraso
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: "",
      });
    } catch (error) {
      setSubmitError(
        locale === "es" ? "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo." :
        locale === "en" ? "There was an error sending the message. Please try again." :
        "Hi ha hagut un error en enviar el missatge. Si us plau, torna-ho a provar."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="relative scroll-mt-2 pt-16 md:pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              {locale === "es" ? "Localización, Contacto y Consultas" :
               locale === "en" ? "Location, Contact and Inquiries" :
               "Localització, Contacte i Consultes"}
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            {locale === "es" ? "Contacto" :
             locale === "en" ? "Contact" :
             "Contacte"}
          </h2>
          <p className="text-lg text-indigo-200/65">
            {locale === "es" ? "Conversemos sobre tu proyecto. Asesoría técnica, diseño y supervisión en cada etapa. Completa el formulario o contáctame directamente." :
             locale === "en" ? "Let's talk about your project. Technical advice, design and supervision at every stage. Fill out the form or contact me directly." :
             "Parlem sobre el teu projecte. Assessoria tècnica, disseny i supervisió en cada etapa. Completa el formulari o contacta'm directament."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mapa a pantalla completa en la columna izquierda */}
          <div className="relative bg-gray-900/75 rounded-xl overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
            <div className="relative w-full h-full min-h-[600px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.6774822271313!2d1.3386819574356845!3d41.269110116084896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a3f876bb276c07%3A0x8ccffeb965482055!2sCarrer%20d&#39;Avall%2C%202%2C%2043812%20Br%C3%A0fim%2C%20Tarragona%2C%20Espa%C3%B1a!5e1!3m2!1ses!2sus!4v1745213609412!5m2!1ses!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
          
          {/* Columna derecha con información de contacto y formulario */}
          <div className="flex flex-col gap-6">
            {/* Información de contacto */}
            <div className="bg-gray-900/75 rounded-xl p-6 backdrop-blur-md before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
              <h3 className="text-xl font-semibold text-white mb-4">
                {locale === "es" ? "Información de contacto" :
                 locale === "en" ? "Contact information" :
                 "Informació de contacte"}
              </h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <div className="flex-shrink-0 bg-indigo-600/20 p-2 rounded-lg mr-2">
                      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <h4 className="text-indigo-300 font-medium">
                      {locale === "es" ? "Dirección" :
                       locale === "en" ? "Address" :
                       "Adreça"}
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {locale === "es" ? "Calle Avall 2" :
                     locale === "en" ? "Avall Street 2" :
                     "Carrer Avall 2"}<br />
                    43812 Brafim, {locale === "es" ? "España" :
                                   locale === "en" ? "Spain" :
                                   "Espanya"}
                  </p>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <div className="flex-shrink-0 bg-indigo-600/20 p-2 rounded-lg mr-2">
                      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <h4 className="text-indigo-300 font-medium">
                      {locale === "es" ? "Teléfono" :
                       locale === "en" ? "Phone" :
                       "Telèfon"}
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm">(+34) 607 651 430</p>
                  <p className="text-gray-300 text-sm flex items-center mt-1">
                    <span className="inline-flex items-center justify-center bg-green-500 text-white text-xs px-1.5 py-0.5 rounded mr-1">WhatsApp</span>
                  </p>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <div className="flex-shrink-0 bg-indigo-600/20 p-2 rounded-lg mr-2">
                      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <h4 className="text-indigo-300 font-medium">Email</h4>
                  </div>
                  <p className="text-gray-300 text-sm">info@incingenieros.com</p>
                </div>
              </div>
            </div>
            
            {/* Formulario de contacto */}
            <div className="bg-gray-900/75 rounded-xl p-6 backdrop-blur-md before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] flex-grow">
              <h3 className="text-xl font-semibold text-white mb-4">
                {locale === "es" ? "Envíanos un mensaje" :
                 locale === "en" ? "Send us a message" :
                 "Envia'ns un missatge"}
              </h3>
              
              {submitSuccess ? (
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center">
                  <svg className="w-12 h-12 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h4 className="text-lg font-medium text-white mb-2">
                    {locale === "es" ? "¡Mensaje enviado con éxito!" :
                     locale === "en" ? "Message sent successfully!" :
                     "Missatge enviat amb èxit!"}
                  </h4>
                  <p className="text-gray-300">
                    {locale === "es" ? "Gracias por contactarnos. Te responderemos lo antes posible." :
                     locale === "en" ? "Thank you for contacting us. We will respond as soon as possible." :
                     "Gràcies per contactar-nos. Et respondrem el més aviat possible."}
                  </p>
                  <button 
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors"
                  >
                    {locale === "es" ? "Enviar otro mensaje" :
                     locale === "en" ? "Send another message" :
                     "Enviar un altre missatge"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-1">
                        {locale === "es" ? "Nombre" :
                         locale === "en" ? "Name" :
                         "Nom"} *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder={locale === "es" ? "Tu nombre completo" :
                                    locale === "en" ? "Your full name" :
                                    "El teu nom complet"}
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-1">
                        {locale === "es" ? "Teléfono" :
                         locale === "en" ? "Phone" :
                         "Telèfon"}
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="+34 XXX XXX XXX"
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="asunto" className="block text-sm font-medium text-gray-300 mb-1">
                        {locale === "es" ? "Asunto" :
                         locale === "en" ? "Subject" :
                         "Assumpte"} *
                      </label>
                      <select
                        id="asunto"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        <option value="">
                          {locale === "es" ? "Selecciona un asunto" :
                           locale === "en" ? "Select a subject" :
                           "Selecciona un assumpte"}
                        </option>
                        <option value="consulta">
                          {locale === "es" ? "Consulta técnica" :
                           locale === "en" ? "Technical inquiry" :
                           "Consulta tècnica"}
                        </option>
                        <option value="proyecto">
                          {locale === "es" ? "Proyecto nuevo" :
                           locale === "en" ? "New project" :
                           "Projecte nou"}
                        </option>
                        <option value="certificacion">
                          {locale === "es" ? "Certificación" :
                           locale === "en" ? "Certification" :
                           "Certificació"}
                        </option>
                        <option value="otro">
                          {locale === "es" ? "Otro" :
                           locale === "en" ? "Other" :
                           "Altre"}
                        </option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-1">
                      {locale === "es" ? "Mensaje" :
                       locale === "en" ? "Message" :
                       "Missatge"} *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder={locale === "es" ? "Describe tu consulta o proyecto..." :
                                  locale === "en" ? "Describe your inquiry or project..." :
                                  "Descriu la teva consulta o projecte..."}
                      required
                      rows={6}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="verificacion"
                      required
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-700 rounded"
                    />
                    <label htmlFor="verificacion" className="ml-2 block text-sm text-gray-300">
                      {locale === "es" ? "Verificación de seguridad" :
                       locale === "en" ? "Security verification" :
                       "Verificació de seguretat"}
                    </label>
                  </div>
                  
                  {submitError && (
                    <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 text-red-200">
                      {submitError}
                    </div>
                  )}
                  
                  <div className="text-right">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg transition-colors shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {locale === "es" ? "Enviando..." :
                           locale === "en" ? "Sending..." :
                           "Enviant..."}
                        </>
                      ) : (
                        <>
                          {locale === "es" ? "Enviar mensaje" :
                           locale === "en" ? "Send message" :
                           "Enviar missatge"}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
