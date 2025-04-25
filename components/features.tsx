"use client";

import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";
import ServiceCard from "@/components/service-card";
import { useLanguage } from "@/contexts/language-context";

export default function Features() {
  const { locale, t } = useLanguage();
  return (
    <section id="consultoria" className="relative scroll-mt-24">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                {locale === "es" ? "Servicios de Consultoría Profesional" : 
                 locale === "en" ? "Professional Consulting Services" : 
                 "Serveis de Consultoria Professional"}
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              {locale === "es" ? "Asesoría Especializada" : 
               locale === "en" ? "Specialized Advisory" : 
               "Assessoria Especialitzada"}
            </h2>
            <p className="text-lg text-indigo-200/65">
              {locale === "es" ? "Ofrezco servicios de consultoría técnica especializada para proyectos marítimos, navales e industriales, aportando soluciones eficientes y personalizadas a cada cliente." : 
               locale === "en" ? "I offer specialized technical consulting services for maritime, naval and industrial projects, providing efficient and customized solutions to each client." : 
               "Ofereixo serveis de consultoria tècnica especialitzada per a projectes marítims, navals i industrials, aportant solucions eficients i personalitzades a cada client."}
            </p>
          </div>
          {/*
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
          </div>
          */}
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <ServiceCard
              image="/images/offshore/13-eval-proyectos.jpg"
              icon={
                <svg
                  className="mb-3 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 
                    2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 
                    2-2V5c0-1.1-.9-2-2-2zm-7-1c.55 0 1 
                    .45 1 1s-.45 1-1 1-1-.45-1-1 
                    .45-1 1-1zm7 19H5V5h2v2h10V5h2v16zM9.29 
                    13.29 11 15l4.71-4.71-1.42-1.42L11 
                    12.17l-1.29-1.29-1.42 1.41z" />
                </svg>
              }
              title={locale === "es" ? "Evaluación Técnica de Proyectos:" : 
                    locale === "en" ? "Technical Project Evaluation:" : 
                    "Avaluació Tècnica de Projectes:"}
              description={locale === "es" ? "Realizo un análisis detallado de proyectos en fases iniciales o en curso, teniendo en cuenta la normativa vigente, la viabilidad técnica y el impacto económico. Los informes que elaboro están diseñados para servir como herramienta en la toma de decisiones estratégicas." : 
                         locale === "en" ? "I perform a detailed analysis of projects in initial or ongoing phases, taking into account current regulations, technical feasibility and economic impact. The reports I prepare are designed to serve as a tool for strategic decision-making." : 
                         "Realitzo una anàlisi detallada de projectes en fases inicials o en curs, tenint en compte la normativa vigent, la viabilitat tècnica i l'impacte econòmic. Els informes que elaboro estan dissenyats per servir com a eina en la presa de decisions estratègiques."}
              servicesList={locale === "es" ? [
                "Revisión de diseño estructural y cálculo.",
                "Estudios de impacto técnico.",
                "Asesoramiento en licitaciones y concursos técnicos."
              ] : locale === "en" ? [
                "Review of structural design and calculation.",
                "Technical impact studies.",
                "Advice on tenders and technical competitions."
              ] : [
                "Revisió de disseny estructural i càlcul.",
                "Estudis d'impacte tècnic.",
                "Assessorament en licitacions i concursos tècnics."
              ]}
              stats={[
                { label: locale === "es" ? "Evaluaciones completadas" : 
                         locale === "en" ? "Completed evaluations" : 
                         "Avaluacions completades", value: "45+" },
                { label: locale === "es" ? "Años de experiencia" : 
                         locale === "en" ? "Years of experience" : 
                         "Anys d'experiència", value: "20+" },
                { label: locale === "es" ? "Software utilizados" : 
                         locale === "en" ? "Software used" : 
                         "Programari utilitzat", value: "8" },
                { label: locale === "es" ? "Satisfacción cliente" : 
                         locale === "en" ? "Client satisfaction" : 
                         "Satisfacció client", value: "98%" }
              ]}
            />
            <ServiceCard
              image="/images/offshore/14-estudios-viabilidad.jpg"
              icon={
                <svg
                  className="mb-3 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 3v18h18v-2H5V3H3zm15.71 
                          6.29-5.3 5.3-3-3a1 1 0 0 0-1.41 
                          0L6 14.59 7.41 16l2.3-2.29 3 3a1 1 0 
                          0 0 1.41 0l6-6-1.41-1.42z" />
                </svg>


              }
              title={locale === "es" ? "Estudios de Viabilidad:" : 
                    locale === "en" ? "Feasibility Studies:" : 
                    "Estudis de Viabilitat:"}
              description={locale === "es" ? "Determino si un proyecto es viable desde los puntos de vista técnico, económico y logístico. Esta evaluación permite anticipar obstáculos, estimar recursos necesarios y definir un plan de acción efectivo." : 
                         locale === "en" ? "I determine if a project is viable from technical, economic and logistical points of view. This evaluation allows anticipating obstacles, estimating necessary resources and defining an effective action plan." : 
                         "Determino si un projecte és viable des dels punts de vista tècnic, econòmic i logístic. Aquesta avaluació permet anticipar obstacles, estimar recursos necessaris i definir un pla d'acció efectiu."}
              servicesList={locale === "es" ? [
                "Análisis preliminar del proyecto.",
                "Estimaciones de costes y plazos.",
                "Simulación de escenarios posibles.",
                "Análisis de riesgos técnicos y operativos.",
                "Evaluación de retorno de inversión (ROI)."
              ] : locale === "en" ? [
                "Preliminary project analysis.",
                "Cost and timeline estimates.",
                "Simulation of possible scenarios.",
                "Analysis of technical and operational risks.",
                "Return on investment (ROI) evaluation."
              ] : [
                "Anàlisi preliminar del projecte.",
                "Estimacions de costos i terminis.",
                "Simulació d'escenaris possibles.",
                "Anàlisi de riscos tècnics i operatius.",
                "Avaluació de retorn d'inversió (ROI)."
              ]}
              stats={[
                { label: locale === "es" ? "Estudios" : 
                         locale === "en" ? "Studies" : 
                         "Estudis", value: "120+" },
                { label: locale === "es" ? "Normativas" : 
                         locale === "en" ? "Regulations" : 
                         "Normatives", value: "15+" },
                { label: locale === "es" ? "Países" : 
                         locale === "en" ? "Countries" : 
                         "Països", value: "12" },
                { label: locale === "es" ? "Tasa de aprobación" : 
                         locale === "en" ? "Approval rate" : 
                         "Taxa d'aprovació", value: "99%" }
              ]}
            />
            <ServiceCard
              image="/images/offshore/15-supervision-obras.jpg"
              icon={
                <svg
                  className="mb-3 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2a5 5 0 0 0-5 5v1H5a1 1 0 0 0-1 
                          1v2h16V9a1 1 0 0 0-1-1h-2V7a5 5 0 0 0-5-5zm3 
                          6H9V7a3 3 0 0 1 6 0v1zm-9 6a5 5 0 0 0-5 5v1h22v-1a5 5 0 0 0-5-5H6z" />
                </svg>
              }
              title={locale === "es" ? "Supervisión de Obras:" : 
                    locale === "en" ? "Project Supervision:" : 
                    "Supervisió d'Obres:"}
              description={locale === "es" ? "Acompaño la ejecución de proyectos asegurando que se cumplan los estándares técnicos, los plazos de entrega y los criterios de calidad. La supervisión puede ser puntual o continua, en función del alcance de la obra." : 
                         locale === "en" ? "I accompany the execution of projects ensuring that technical standards, delivery deadlines and quality criteria are met. Supervision can be punctual or continuous, depending on the scope of the work." : 
                         "Acompanyo l'execució de projectes assegurant que es compleixin els estàndards tècnics, els terminis de lliurament i els criteris de qualitat. La supervisió pot ser puntual o contínua, en funció de l'abast de l'obra."}
              servicesList={locale === "es" ? [
                "Verificación de materiales y procesos constructivos.",
                "Control de calidad y seguimiento técnico.",
                "Coordinación entre dirección de obra, talleres y contratistas."
              ] : locale === "en" ? [
                "Verification of materials and construction processes.",
                "Quality control and technical monitoring.",
                "Coordination between project management, workshops and contractors."
              ] : [
                "Verificació de materials i processos constructius.",
                "Control de qualitat i seguiment tècnic.",
                "Coordinació entre direcció d'obra, tallers i contractistes."
              ]}
              stats={[
                { label: locale === "es" ? "Supervisiones realizadas" : 
                         locale === "en" ? "Completed supervisions" : 
                         "Supervisions realitzades", value: "85+" },
                { label: locale === "es" ? "Tipos de proyectos" : 
                         locale === "en" ? "Types of projects" : 
                         "Tipus de projectes", value: "25" },
                { label: locale === "es" ? "Condiciones analizadas" : 
                         locale === "en" ? "Conditions analyzed" : 
                         "Condicions analitzades", value: "500+" },
                { label: locale === "es" ? "Precisión de cálculos" : 
                         locale === "en" ? "Calculation accuracy" : 
                         "Precisió de càlculs", value: "99.8%" }
              ]}
            />
            <ServiceCard
              image="/images/offshore/16-optim-procesos.jpg"
              icon={
                <svg
                  className="mb-3 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 
                        1.05-.27 2.04-.74 2.9l1.46 1.46C19.57 
                        14.88 20 13.49 20 12c0-4.42-3.58-8-8-8zm-6 
                        6c0-1.05.27-2.04.74-2.9L5.28 
                        5.64C4.43 7.12 4 8.51 4 10c0 4.42 
                        3.58 8 8 8v-3l4 4-4 4v-3c-4.42 0-8-3.58-8-8z"/>
                </svg>

              }
              title={locale === "es" ? "Optimización de Procesos" : 
                    locale === "en" ? "Process Optimization" : 
                    "Optimització de Processos"}
              description={locale === "es" ? "Identifico oportunidades de mejora en líneas de producción o ejecución de proyectos, con el objetivo de reducir tiempos, costos y errores. Trabajo con metodologías como Lean Manufacturing y Six Sigma." : 
                         locale === "en" ? "I identify opportunities for improvement in production lines or project execution, with the aim of reducing time, costs and errors. I work with methodologies such as Lean Manufacturing and Six Sigma." : 
                         "Identifico oportunitats de millora en línies de producció o execució de projectes, amb l'objectiu de reduir temps, costos i errors. Treballo amb metodologies com Lean Manufacturing i Six Sigma."}
              servicesList={locale === "es" ? [
                "Auditoría de procesos industriales.",
                "Propuestas de mejora y reingeniería.",
                "Implantación de soluciones técnicas.",
                "Análisis de tiempos y movimientos.",
                "Implantación de indicadores de desempeño (KPIs).",
                "Digitalización de procesos productivos."
              ] : locale === "en" ? [
                "Audit of industrial processes.",
                "Improvement proposals and reengineering.",
                "Implementation of technical solutions.",
                "Time and motion analysis.",
                "Implementation of key performance indicators (KPIs).",
                "Digitization of production processes."
              ] : [
                "Auditoria de processos industrials.",
                "Propostes de millora i reenginyeria.",
                "Implantació de solucions tècniques.",
                "Anàlisi de temps i moviments.",
                "Implantació d'indicadors de rendiment (KPIs).",
                "Digitalització de processos productius."
              ]}
              stats={[
                { label: locale === "es" ? "Auditorías realizadas" : 
                         locale === "en" ? "Audits performed" : 
                         "Auditories realitzades", value: "135+" },
                { label: locale === "es" ? "Propuestas presentadas" : 
                         locale === "en" ? "Proposals presented" : 
                         "Propostes presentades", value: "250+" },
                { label: locale === "es" ? "Soluciones propuestas" : 
                         locale === "en" ? "Solutions proposed" : 
                         "Solucions proposades", value: "200+" },
                { label: locale === "es" ? "Factor de mejora" : 
                         locale === "en" ? "Improvement factor" : 
                         "Factor de millora", value: "1.8x" }
              ]}
            />
            <ServiceCard
              image="/images/offshore/17-consul-certif.jpg"
              icon={
                <svg
                  className="mb-3 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17 3H7a2 2 0 0 0-2 2v16l7-3 
                        7 3V5a2 2 0 0 0-2-2zm-3.29 9.71-2.12 
                        2.12-1.29-1.29-1.41 1.41 2.7 2.7 
                        3.53-3.53-1.41-1.41z"/>
                </svg>

              }
              title={locale === "es" ? "Consultoría en Certificación:" : 
                    locale === "en" ? "Certification Consulting:" : 
                    "Consultoria en Certificació:"}
              description={locale === "es" ? "Acompaño a empresas y proyectos durante los procesos de certificación técnica y clasificación de buques o instalaciones, colaborando con entidades reconocidas como Bureau Veritas, DNV, Lloyd's Register o ABS." : 
                         locale === "en" ? "I accompany companies and projects during technical certification processes and classification of ships or facilities, collaborating with recognized entities such as Bureau Veritas, DNV, Lloyd's Register or ABS." : 
                         "Acompanyo a empreses i projectes durant els processos de certificació tècnica i classificació de vaixells o instal·lacions, col·laborant amb entitats reconegudes com Bureau Veritas, DNV, Lloyd's Register o ABS."}
              servicesList={locale === "es" ? [
                "Preparación de documentación técnica para certificación.",
                "Coordinación con organismos de clasificación.",
                "Resolución de observaciones e informes de inspecciones.",
                "Gestión de modificaciones y renovaciones de certificados."
              ] : locale === "en" ? [
                "Preparation of technical documentation for certification.",
                "Coordination with classification bodies.",
                "Resolution of observations and inspection reports.",
                "Management of certificate modifications and renewals."
              ] : [
                "Preparació de documentació tècnica per a certificació.",
                "Coordinació amb organismes de classificació.",
                "Resolució d'observacions i informes d'inspeccions.",
                "Gestió de modificacions i renovacions de certificats."
              ]}
              stats={[
                { label: locale === "es" ? "Clientes certificados" : 
                         locale === "en" ? "Certified clients" : 
                         "Clients certificats", value: "75+" },
                { label: locale === "es" ? "Horas de consultoría" : 
                         locale === "en" ? "Consulting hours" : 
                         "Hores de consultoria", value: "5000+" },
                { label: locale === "es" ? "Clasificaciones realizadas" : 
                         locale === "en" ? "Classifications completed" : 
                         "Classificacions realitzades", value: "120+" },
                { label: locale === "es" ? "Colaboraciones con entidades" : 
                         locale === "en" ? "Collaborations with entities" : 
                         "Col·laboracions amb entitats", value: "180+" }
              ]}
            />
            <ServiceCard
              image="/images/offshore/18-asist-tecnica.jpg"
              icon={
                <svg 
                   className="mb-3 fill-indigo-500" 
                   xmlns="http://www.w3.org/2000/svg" 
                   width="24" 
                   height="24" 
                   viewBox="0 0 24 24" 
                   fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 
                          10 10 10 10-4.48 10-10S17.52 2 12 2zm0 
                          18c-4.41 0-8-3.59-8-8 0-.34.02-.67.06-.99L5 
                          13h2v2h2v-2h2v2c0 .55.45 1 1 
                          1h2v1.22c.72-.24 1.38-.61 1.96-1.08l1.5 1.5c-1.45 
                          1.32-3.35 2.13-5.52 2.13z"/>
                  </svg>
              }
              title={locale === "es" ? "Asistencia Técnica Internacional" : 
                    locale === "en" ? "International Technical Assistance" : 
                    "Assistència Tècnica Internacional"}
              description={locale === "es" ? "Brindo soporte técnico a empresas que participan en proyectos internacionales, asegurando la adaptación a normativas locales e internacionales, la coordinación entre equipos multidisciplinares y el seguimiento de estándares de calidad globales." : 
                         locale === "en" ? "I provide technical support to companies participating in international projects, ensuring adaptation to local and international regulations, coordination between multidisciplinary teams and monitoring of global quality standards." : 
                         "Ofereixo suport tècnic a empreses que participen en projectes internacionals, assegurant l'adaptació a normatives locals i internacionals, la coordinació entre equips multidisciplinaris i el seguiment d'estàndards de qualitat globals."}
              servicesList={locale === "es" ? [
                "Revisión técnica de especificaciones en proyectos multiculturales.",
                "Adaptación a normativas internacionales (IMO, ISO, SOLAS, etc.).",
                "Interlocución técnica con proveedores y autoridades extranjeras."
              ] : locale === "en" ? [
                "Technical review of specifications in multicultural projects.",
                "Adaptation to international regulations (IMO, ISO, SOLAS, etc.).",
                "Technical dialogue with foreign suppliers and authorities."
              ] : [
                "Revisió tècnica d'especificacions en projectes multiculturals.",
                "Adaptació a normatives internacionals (IMO, ISO, SOLAS, etc.).",
                "Interlocució tècnica amb proveïdors i autoritats estrangeres."
              ]}
              stats={[
                { label: locale === "es" ? "Asistencias brindadas" : 
                         locale === "en" ? "Assistances provided" : 
                         "Assistències ofertes", value: "60+" },
                { label: locale === "es" ? "Revisiones realizadas" : 
                         locale === "en" ? "Reviews performed" : 
                         "Revisions realitzades", value: "240+" },
                { label: locale === "es" ? "Países" : 
                         locale === "en" ? "Countries" : 
                         "Països", value: "12" },
                { label: locale === "es" ? "Coordinaciones" : 
                         locale === "en" ? "Coordinations" : 
                         "Coordinacions", value: "120+" }
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
