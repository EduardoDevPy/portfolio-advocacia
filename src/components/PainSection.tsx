import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CreditCard, Package, Landmark, Plane, Smartphone, FileText } from "lucide-react";

const problems = [
  { icon: CreditCard, title: "Cobrança indevida", desc: "Taxa ou valor que não deveria estar na sua fatura" },
  { icon: Package, title: "Produto não entregue ou com defeito", desc: "Comprou e não recebeu, ou chegou quebrado" },
  { icon: Landmark, title: "Problemas com banco ou financeira", desc: "Juros abusivos, negativação injusta, bloqueio indevido" },
  { icon: Plane, title: "Aérea, hotel ou turismo", desc: "Voo cancelado, overbooking, pacote que não foi cumprido" },
  { icon: Smartphone, title: "Operadora de internet ou celular", desc: "Serviço que não funciona e cobram assim mesmo" },
  { icon: FileText, title: "Contrato descumprido", desc: "Prometeram uma coisa e entregaram outra" },
];

export default function PainSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="direitos" className="py-20 md:py-28 bg-surface" ref={ref}>
      <div className="container">
        <div className={`max-w-2xl mx-auto text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" style={{ textWrap: "balance" as any }}>
            Muitas pessoas perdem dinheiro por não saber que têm direito
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Se você passou por alguma dessas situações, você pode estar sendo lesado:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`group p-6 rounded-xl bg-surface-elevated border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
            >
              <p.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-105 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className={`text-center mt-12 text-lg sm:text-xl font-semibold text-primary transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          "Empresas de grande porte contam com que você desista. Não desista."
        </p>
      </div>
    </section>
  );
}
