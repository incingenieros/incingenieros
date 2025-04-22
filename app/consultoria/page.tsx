import PageIllustration from "@/components/page-illustration";
import SpecializationAreas from "@/components/workflows";
import Features from "@/components/features";

export const metadata = {
  title: "Consultoría - Incigenieros.com",
  description: "Servicios de consultoría en ingeniería naval e industrial",
};

export default function ConsultoriaPage() {
  return (
    <>
      <PageIllustration />
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              Consultoría en Ingeniería
            </h1>
            <p className="text-lg text-indigo-200/65">
              Soluciones integrales para el sector naval e industrial con un enfoque en la eficiencia, sostenibilidad y cumplimiento normativo.
            </p>
          </div>
        </div>
      </div>
      <SpecializationAreas />
      <Features />
    </>
  );
}
