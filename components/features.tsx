import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";
import ServiceCard from "@/components/service-card";

export default function Features() {
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
                Servicios de Consultoría Profesional
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Soluciones Integrales de Consultoría
            </h2>
            <p className="text-lg text-indigo-200/65">
              Ofrezco servicios de consultoría técnica especializada para proyectos industriales y marítimos. Trabajo junto a empresas, astilleros y profesionales del sector para optimizar sus procesos, evaluar sus ideas y asegurar la viabilidad y calidad de sus proyectos.
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
              image="/images/offshore/13-evaluacion-proyectos.jpg"
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
              title="Evaluación Técnica de Proyectos:"
              description="Realizo un análisis detallado de proyectos en fases iniciales o en curso, teniendo en cuenta la normativa vigente, la viabilidad técnica y el impacto económico. Los informes que elaboro están diseñados para servir como herramienta en la toma de decisiones estratégicas."
              servicesList={[
                "Revisión de diseño estructural y cálculo.",
                "Estudios de impacto técnico.",
                "Asesoramiento en licitaciones y concursos técnicos."
              ]}
              stats={[
                { label: "Evaluaciones completadas", value: "45+" },
                { label: "Años de experiencia", value: "20+" },
                { label: "Software utilizados", value: "8" },
                { label: "Satisfacción cliente", value: "98%" }
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
              title="Estudios de Viabilidad:"
              description="Determino si un proyecto es viable desde los puntos de vista técnico, económico y logístico. Esta evaluación permite anticipar obstáculos, estimar recursos necesarios y definir un plan de acción efectivo."
              servicesList={[
                "Análisis preliminar del proyecto.",
                "Estimaciones de costes y plazos.",
                "Simulación de escenarios posibles.",
                "Análisis de riesgos técnicos y operativos.",
                "Evaluación de retorno de inversión (ROI)."
              ]}
              stats={[
                { label: "Estudios", value: "120+" },
                { label: "Normativas", value: "15+" },
                { label: "Países", value: "12" },
                { label: "Tasa de aprobación", value: "99%" }
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
              title="Supervisión de Obras:"
              description="Acompaño la ejecución de proyectos asegurando que se cumplan los estándares técnicos, los plazos de entrega y los criterios de calidad. La supervisión puede ser puntual o continua, en función del alcance de la obra."
              servicesList={[
                "Verificación de materiales y procesos constructivos.",
                "Control de calidad y seguimiento técnico.",
                "Coordinación entre dirección de obra, talleres y contratistas."
              ]}
              stats={[
                { label: "Supervisiones realizados", value: "85+" },
                { label: "Tipos de proyectos", value: "25" },
                { label: "Condiciones analizadas", value: "500+" },
                { label: "Precisión de cálculos", value: "99.8%" }
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
              title="Optimización de Procesos"
              description="Identifico oportunidades de mejora en líneas de producción o ejecución de proyectos, con el objetivo de reducir tiempos, costos y errores. Trabajo con metodologías como Lean Manufacturing y Six Sigma."
              servicesList={[
                "Auditoría de procesos industriales.",
                "Propuestas de mejora y reingeniería.",
                "Implantación de soluciones técnicas.",
                "Análisis de tiempos y movimientos.",
                "Implantación de indicadores de desempeño (KPIs).",
                "Digitalización de procesos productivos."
              ]}
              stats={[
                { label: "Auditorías realizadas", value: "135+" },
                { label: "Propuestas presentadas", value: "250+" },
                { label: "Soluciones propuestas", value: "200+" },
                { label: "Factor de mejora", value: "1.8x" }
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
              title="Consultoría en Certificación:"
              description="Acompaño a empresas y proyectos durante los procesos de certificación técnica y clasificación de buques o instalaciones, colaborando con entidades reconocidas como Bureau Veritas, DNV, Lloyd’s Register o ABS."
              servicesList={[
                "Preparación de documentación técnica para certificación.",
                "Coordinación con organismos de clasificación.",
                "Resolución de observaciones e informes de inspeccións.",
                "Gestión de modificaciones y renovaciones de certificados."
              ]}
              stats={[
                { label: "Clientes certificados", value: "75+" },
                { label: "Horas de consultoría", value: "5000+" },
                { label: "Casificaciones realizadas", value: "120+" },
                { label: "Colaboraciones con entidades", value: "180+" }
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
              title="Asistencia Técnica Internacional"
              description="Brindo soporte técnico a empresas que participan en proyectos internacionales, asegurando la adaptación a normativas locales e internacionales, la coordinación entre equipos multidisciplinares y el seguimiento de estándares de calidad globales."
              servicesList={[
                "Revisión técnica de especificaciones en proyectos multiculturales.",
                "Adaptación a normativas internacionales (IMO, ISO, SOLAS, etc.).",
                "Interlocución técnica con proveedores y autoridades extranjeras."
              ]}
              stats={[
                { label: "Asistencias brindadas", value: "60+" },
                { label: "Revisiones realizadas", value: "240+" },
                { label: "Países", value: "12" },
                { label: "Coordinaciones", value: "120+" }
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
