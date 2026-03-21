import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso ir pessoalmente ao escritório?",
    a: "Não. Todo o atendimento é online, de qualquer lugar do Brasil.",
  },
  {
    q: "Quanto tempo demora para resolver meu caso?",
    a: "Depende da situação. Em muitos casos, uma notificação extrajudicial já resolve de forma rápida. A análise inicial te dará um panorama realista.",
  },
  {
    q: "Vou precisar pagar antecipado?",
    a: "Isso é definido após a análise do caso. Entre em contato para conversarmos.",
  },
  {
    q: "Meu caso é pequeno, vale a pena?",
    a: "Sim. Muitos casos que parecem simples geram direito a indenização. Melhor analisar do que deixar passar.",
  },
  {
    q: "Como envio meu caso?",
    a: "Pelo WhatsApp. É só clicar no botão e contar o que aconteceu.",
  },
];

export default function FaqSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-surface" ref={ref}>
      <div className="container max-w-3xl">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Perguntas frequentes
          </h2>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-6 bg-surface-elevated data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground font-sans font-semibold text-base hover:text-primary transition-colors py-5 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
