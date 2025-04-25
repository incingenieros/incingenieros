import HeroImage1 from "@/public/images/naval-engineer-hero.jpg";
import HeroImage2 from "@/public/images/naval-engineer-2.jpg";
import HeroImage3 from "@/public/images/naval-engineer-3.jpg";
import HeroImage4 from "@/public/images/naval-engineer-4.jpg";
import FeaturedProjects from "@/components/featured-projects";
import AnimatedCounters from "@/components/animated-counters";
import AnimatedCounters2 from "@/components/animated-counters2";

export default function HeroHome() {
  return (
    <section id="inicio" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-24 md:pt-28 pb-3 md:pb-8">
          {/* Section header */}
          <div className="pb-7 text-center md:pb-12">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Ingeniero Naval y Oceánico
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Con más de 20 Años de Experiencia, brindo soluciones técnicas y asesoramiento especializado 
                para el sector marítimo, offshore e industrial. 
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#industrial"
                  >
                    <span className="relative inline-flex items-center">
                      Ver mi Trabajo
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#contacto"
                  >
                    Contáctame
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              {/* Carrusel de imágenes */}
              <FeaturedProjects
                images={[HeroImage1, HeroImage2, HeroImage3, HeroImage4]}
                imageWidth={1104}
                imageHeight={576}
                imageAlt="Ingeniero naval en astillero con planos de proyectos"
              />
              
              {/* Contadores para dispositivos móviles (dentro de la imagen del Hero) */}
              <div className="absolute top-6 left-0 right-0 z-40 px-4 md:hidden flex justify-end" data-aos="fade-down" data-aos-delay="200">
                <AnimatedCounters2 className="w-fit" />
              </div>
              
              {/* Contadores animados superpuestos en la parte izquierda (solo desktop) */}
              <div 
                className="absolute inset-y-0 left-6 hidden md:flex items-center justify-start z-40 w-56"
                style={{ top: '38%', transform: 'translateY(-50%)' }}
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <AnimatedCounters className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
