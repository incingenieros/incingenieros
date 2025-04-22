import PageIllustration from "@/components/page-illustration";
import IndustrialSection from "@/components/industrial-section";

export const metadata = {
  title: "Ingeniería Industrial - Incigenieros.com",
  description: "Servicios de ingeniería industrial y fabricación",
};

export default function IndustrialPage() {
  return (
    <>
      <PageIllustration />
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              Ingeniería Industrial y Fabricación
            </h1>
            <p className="text-lg text-indigo-200/65">
              Soluciones avanzadas para optimizar procesos industriales, mejorar la eficiencia y garantizar la calidad en la fabricación.
            </p>
          </div>
        </div>
      </div>
      <IndustrialSection />
    </>
  );
}
