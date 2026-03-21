import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AuthorityStrip() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      ref={ref}
      className={`py-6 bg-gradient-to-r from-primary/15 via-primary/8 to-primary/15 border-y border-primary/20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="container">
        <p className="text-center text-sm sm:text-base font-medium text-primary italic tracking-wide">
          "Atuação estratégica em Direito do Consumidor — análise técnica, comunicação clara e foco em resultado."
        </p>
      </div>
    </section>
  );
}
