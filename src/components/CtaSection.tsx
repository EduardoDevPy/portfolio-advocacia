import React from "react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://wa.me/19988187706?text=Ol%C3%A1%2C%20Dra.%20Maria%20Isabella%21%20Gostaria%20de%20agendar%20uma%20consulta%20e%20entender%20melhor%20meus%20direitos.";

export default function CtaSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contato" className="py-20 md:py-28 relative overflow-hidden" ref={ref}>
      {/* Foto de fundo — todas as telas */}
      <div className="absolute inset-0 bg-[url('/assets/images/advogado-bg.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsla(38,45%,58%,0.08),transparent_60%)]" />

      <div className={`container relative z-10 text-center max-w-2xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5" style={{ textWrap: "balance" as React.CSSProperties["textWrap"], textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}>
          Não deixe seu dinheiro nas mãos de quem errou
        </h2>
        <p className="text-white/80 text-base sm:text-lg mb-10" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}>
          A análise do seu caso é o primeiro passo. Fale agora com a Dra. Maria Isabella.
        </p>
        <Button variant="gold" size="xl" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            💬 Falar com a advogada agora
          </a>
        </Button>
      </div>
    </section>
  );
}
