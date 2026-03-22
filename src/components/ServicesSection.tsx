import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Scale, ClipboardList, Coins, ShieldOff } from "lucide-react";

const services = [
  { icon: Scale, title: "Cancelamento de cobranças indevidas", desc: "Revisão de contratos e cobranças abusivas com pedido de restituição" },
  { icon: ClipboardList, title: "Ação por descumprimento de contrato", desc: "Quando a empresa não entregou o que prometeu" },
  { icon: Coins, title: "Indenização por danos morais e materiais", desc: "Você pode ter direito a mais do que imagina" },
  { icon: ShieldOff, title: "Negativação indevida", desc: "Retirada de nome do SPC/Serasa e indenização por constrangimento" },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28" ref={ref}>
      <div className="container">
        <div className={`max-w-2xl mx-auto text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" style={{ textWrap: "balance" as any }}>
            Nossos serviços para defesa do consumidor
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative p-7 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 before:absolute before:inset-0 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 before:bg-[radial-gradient(ellipse_at_top_left,hsla(38,45%,58%,0.07),transparent_60%)] overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
