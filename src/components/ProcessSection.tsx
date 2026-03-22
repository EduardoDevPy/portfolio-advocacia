import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageCircle, Search, MapPin, Zap } from "lucide-react";

const steps = [
  { icon: MessageCircle, num: "01", title: "Você conta seu caso", desc: "Pelo WhatsApp, de forma rápida e sem burocracia" },
  { icon: Search, num: "02", title: "Analisamos a situação", desc: "A Dra. Maria Isabella avalia os detalhes e os seus direitos" },
  { icon: MapPin, num: "03", title: "Você recebe a orientação", desc: "Explicação clara sobre o que pode ser feito e como" },
  { icon: Zap, num: "04", title: "Iniciamos a ação", desc: "Com estratégia e agilidade para resolver o quanto antes" },
];

export default function ProcessSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-surface" ref={ref}>
      <div className="container">
        <div className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" style={{ textWrap: "balance" as any }}>
            Do seu caso à solução: simples assim
          </h2>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:grid grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40" />

          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`relative text-center transition-all duration-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : "0ms" }}
            >
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-card border-2 border-primary/30 mb-5 mx-auto">
                <s.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-1 -right-1 text-[10px] font-bold text-primary-foreground bg-primary rounded-full w-6 h-6 flex items-center justify-center">
                  {s.num}
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 font-sans">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden space-y-0">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`flex gap-5 transition-all duration-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              {/* Ícone + linha vertical */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center relative">
                  <s.icon className="w-6 h-6 text-primary" />
                  <span className="absolute -top-1 -right-1 text-[10px] font-bold text-primary-foreground bg-primary rounded-full w-5 h-5 flex items-center justify-center">{s.num}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 min-h-[2rem] bg-gradient-to-b from-primary/40 to-primary/10 my-1" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-base font-semibold text-foreground mb-1 font-sans">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
