import { useScrollReveal } from "@/hooks/useScrollReveal";
import { UserCheck, MessageSquare, Globe } from "lucide-react";

const PROFILE_IMG = "/assets/images/perfilAdvogada2.jpeg";

const differentials = [
  { icon: UserCheck, text: "Atendimento direto com a Dra. Maria Isabella" },
  { icon: MessageSquare, text: "Explicação clara, sem juridiquês" },
  { icon: Globe, text: "Atendimento online para todo o Brasil" },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="sobre" className="py-20 md:py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 hidden md:block bg-[url('/assets/images/aboutSection-background.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 md:hidden bg-[url('/assets/images/aboutSection-background_mobile.png')] bg-contain bg-top bg-no-repeat" />
      <div className="absolute inset-0 bg-black/30" />
      {/* Linha dourada vertical decorativa */}
      <div className="absolute left-0 top-1/4 h-1/2 w-[3px] bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden lg:block" />
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/30 to-transparent blur-md" />
              <img
                src={PROFILE_IMG}
                alt="Dra. Maria Isabella Gomes"
                className="relative rounded-2xl w-full object-cover aspect-[3/4] shadow-2xl shadow-black/40"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6" style={{ textWrap: "balance" as any }}>
              Quem vai cuidar do seu caso
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Dra. Maria Isabella Gomes é advogada especializada em Direito do Consumidor, Direito do Trabalho e Direito Civil. Seu trabalho é pautado por análise técnica rigorosa, comunicação acessível e total comprometimento com o resultado de cada cliente.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Aqui você fala diretamente com a advogada. Sem assistentes, sem respostas automáticas. Cada caso é tratado com atenção individual.
            </p>

            <div className="space-y-4">
              {differentials.map((d) => (
                <div key={d.text} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <d.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground/90">{d.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
