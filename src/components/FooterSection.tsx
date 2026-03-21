const LOGO_URL = "https://mariaisabella-adv.github.io/MG-adv/assets/images/MG-logo.png";

const links = [
  { label: "Seus Direitos", href: "#direitos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function FooterSection() {
  return (
    <footer className="py-12 border-t border-border bg-surface">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <img src={LOGO_URL} alt="MG Advocacia" className="h-10 w-auto opacity-80" />

          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-muted-foreground text-center max-w-lg leading-relaxed">
            Este site tem caráter exclusivamente informativo, conforme o Código de Ética e Disciplina da OAB.
          </p>

          <p className="text-xs text-muted-foreground/60">
            © 2026 Maria Isabella Gomes — Advocacia & Consultoria Jurídica
          </p>
        </div>
      </div>
    </footer>
  );
}
