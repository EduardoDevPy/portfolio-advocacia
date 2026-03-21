import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5519988187706?text=Ol%C3%A1%2C%20Dra.%20Maria%20Isabella%21%20Gostaria%20de%20agendar%20uma%20consulta%20e%20entender%20melhor%20meus%20direitos.";
const PROFILE_IMG = "/assets/images/perfilAdvogada2.jpeg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[hsl(38,20%,10%)] opacity-80" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
              <span className="text-sm font-medium text-primary">⚖️ Direito do Consumidor · Atendimento em todo o Brasil</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-bold leading-[1.1] tracking-tight text-foreground mb-6" style={{ textWrap: "balance" as any }}>
              Te cobraram indevidamente ou não te entregaram o que prometeram?
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-8" style={{ textWrap: "pretty" as any }}>
              Você pode ter direito à devolução do valor em dobro, indenização por danos morais e muito mais. A Dra. Maria Isabella Gomes analisa o seu caso e te orienta sobre o melhor caminho.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button variant="gold" size="xl" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  💬 Quero falar com a advogada
                </a>
              </Button>
              <Button variant="goldOutline" size="lg" asChild>
                <a href="#direitos">
                  Entender meus direitos →
                </a>
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              {["Consulta inicial gratuita", "Atendimento 100% online", "Sem burocracia"].map((text) => (
                <div key={text} className="flex items-center gap-2 text-sm text-foreground/80">
                  <Check size={16} className="text-primary flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — profile image */}
          <div className="animate-fade-up delay-200 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 to-primary/10 blur-sm" />
              <img
                src={PROFILE_IMG}
                alt="Dra. Maria Isabella Gomes — Advogada especialista em Direito do Consumidor"
                className="relative rounded-2xl w-72 sm:w-80 lg:w-96 object-cover aspect-[3/4] shadow-2xl shadow-black/40"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
