import PageIllustration from "@/components/page-illustration";
import NavalOffshoreSection from "@/components/naval-offshore-section";

export const metadata = {
  title: "Ingeniería Naval - Incigenieros.com",
  description: "Servicios de ingeniería naval y offshore",
};

export default function NavalPage() {
  return (
    <>
      <PageIllustration />
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              Ingeniería Naval y Offshore
            </h1>
            <p className="text-lg text-indigo-200/65">
              Soluciones especializadas para el sector marítimo, desde el diseño hasta la certificación de embarcaciones y estructuras offshore.
            </p>
          </div>
        </div>
      </div>
      <NavalOffshoreSection />
    </>
  );
}
