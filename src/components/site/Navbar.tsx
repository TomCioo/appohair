import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#o-nas", label: "O nas" },
  { href: "#oferta", label: "Oferta" },
  { href: "#galeria", label: "Galeria" },
  { href: "#opinie", label: "Opinie" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

const BOOKSY = "https://booksy.com/pl-pl/328052_appo-hair-2_fryzjer_15608_poznan#ba_s=sr_1";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-wide text-cream">Appo</span>
          <span className="font-display text-2xl italic gold-gradient">Hair 2</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={BOOKSY}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden btn-gold rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.2em] lg:inline-block"
        >
          Rezerwacja
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-cream lg:hidden"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm uppercase tracking-[0.18em] text-muted-foreground hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href={BOOKSY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-4 rounded-full px-5 py-3 text-center text-xs uppercase tracking-[0.2em]"
            >
              Zarezerwuj wizytę
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
