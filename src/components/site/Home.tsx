import { useState } from "react";
import { ChevronDown, MapPin, Phone, Clock, Instagram, Facebook, Sparkles, Scissors, Star } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { BOOKSY, services, reviews, hours, faqs } from "@/components/site/data";
import { useReveal } from "@/hooks/use-reveal";
import hero from "@/assets/hero.jpeg";
import aboutImg from "@/assets/about.jpeg";
import g1 from "@/assets/g1.jpeg";
import g2 from "@/assets/g2.jpeg";
import g3 from "@/assets/g3.jpeg";
import g4 from "@/assets/g4.jpeg";
import g5 from "@/assets/g5.jpeg";
import g6 from "@/assets/g6.jpeg";

const gallery = [g1, g4, g2, g5, g3, g6];

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title) && (
          <div className="reveal mb-16 max-w-2xl">
            {eyebrow && (
              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-4xl leading-tight text-cream md:text-5xl lg:text-6xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="reveal border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-gold"
      >
        <span className="font-display text-xl text-cream md:text-2xl">{q}</span>
        <ChevronDown
          className={`shrink-0 text-gold transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ${
          open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  useReveal();

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative isolate flex min-h-screen items-center overflow-hidden">
        <img
          src={hero}
          alt="Wnętrze salonu Appo Hair 2 w Poznaniu"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/60 to-background" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

        <div className="mx-auto w-full max-w-7xl px-6 pt-32 lg:px-10">
          <div className="max-w-3xl">
            <div className="reveal mb-8 flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-xs uppercase tracking-[0.4em] text-gold">
                Premium Hair Studio · Poznań
              </span>
            </div>
            <h1 className="reveal font-display text-6xl leading-[0.95] text-cream md:text-8xl lg:text-[8.5rem]">
              Appo <span className="italic gold-gradient">Hair 2</span>
            </h1>
            <p className="reveal mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">
              Piękno, styl i precyzja w jednym miejscu. Salon dla wymagających —
              tam, gdzie każda wizyta jest doświadczeniem.
            </p>
            <div className="reveal mt-10 flex flex-wrap gap-4">
              <a
                href={BOOKSY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold rounded-full px-8 py-4 text-xs uppercase tracking-[0.25em]"
              >
                Zarezerwuj wizytę
              </a>
              <a
                href="#oferta"
                className="btn-ghost-gold rounded-full px-8 py-4 text-xs uppercase tracking-[0.25em]"
              >
                Poznaj ofertę
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-muted-foreground">
          <span className="animate-pulse">↓ Scroll</span>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="o-nas" eyebrow="O salonie">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="reveal relative">
            <div className="absolute -inset-4 -z-10 border border-gold/30" />
            <img
              src={aboutImg}
              alt="Stylizacja włosów w salonie Appo Hair 2"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="reveal">
            <h2 className="font-display text-4xl leading-tight text-cream md:text-5xl lg:text-6xl">
              Sztuka stylizacji, <span className="italic gold-gradient">precyzja detalu.</span>
            </h2>
            <div className="hairline my-8 max-w-[120px]" />
            <p className="text-lg leading-relaxed text-muted-foreground">
              Appo Hair 2 to przestrzeń stworzona z myślą o klientach, którzy
              cenią najwyższą jakość. Nasi styliści łączą wieloletnie
              doświadczenie z nowoczesnymi technikami, by każda fryzura była
              odzwierciedleniem Twojej osobowości.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { icon: Sparkles, t: "Kosmetyki premium", d: "Tylko sprawdzone marki profesjonalne." },
                { icon: Scissors, t: "Mistrzostwo techniki", d: "Doświadczeni styliści damscy i męscy." },
                { icon: Star, t: "Indywidualne podejście", d: "Konsultacja dopasowana do Twoich oczekiwań." },
                { icon: Clock, t: "Komfort wizyty", d: "Spokojna atmosfera, zero pośpiechu." },
              ].map((f) => (
                <div key={f.t} className="flex gap-4">
                  <f.icon className="mt-1 shrink-0 text-gold" size={22} />
                  <div>
                    <p className="font-display text-lg text-cream">{f.t}</p>
                    <p className="text-sm text-muted-foreground">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section
        id="oferta"
        eyebrow="Oferta"
        title={<>Usługi <span className="italic gold-gradient">klasy premium</span></>}
      >
        <div className="space-y-20">
          {services.map((cat) => (
            <div key={cat.title} className="reveal">
              <div className="mb-8 flex items-center gap-6">
                <h3 className="font-display text-2xl text-cream md:text-3xl">
                  {cat.title}
                </h3>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-2">
                {cat.items.map((s) => (
                  <div
                    key={s.name}
                    className="group relative bg-card p-8 transition-all duration-500 hover:bg-secondary"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <h4 className="font-display text-xl text-cream transition-colors group-hover:text-gold md:text-2xl">
                          {s.name}
                        </h4>
                        <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                      </div>
                      <span className="shrink-0 font-display text-xl text-gold md:text-2xl">
                        {s.price}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-20 text-center">
          <a
            href={BOOKSY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block rounded-full px-10 py-4 text-xs uppercase tracking-[0.25em]"
          >
            Pełna oferta na Booksy →
          </a>
        </div>
      </Section>

      {/* RESERVATION CTA */}
      <section className="relative overflow-hidden border-y border-border bg-secondary px-6 py-24 lg:px-10">
        <div className="reveal mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">
            Rezerwacja online
          </p>
          <h2 className="font-display text-4xl leading-tight text-cream md:text-6xl">
            Twoja wizyta. <span className="italic gold-gradient">Jeden klik.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Wybierz dogodny termin i usługę bezpośrednio przez nasz system
            rezerwacji Booksy — szybko, wygodnie, 24/7.
          </p>
          <a
            href={BOOKSY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-10 inline-block rounded-full px-12 py-5 text-sm uppercase tracking-[0.25em]"
          >
            Umów wizytę online
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <Section
        id="galeria"
        eyebrow="Galeria"
        title={<>Nasze <span className="italic gold-gradient">realizacje</span></>}
      >
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {gallery.map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/appohair2/"
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal group relative block overflow-hidden ${
                i === 0 || i === 5 ? "md:row-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt={`Realizacja salonu ${i + 1}`}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  i === 0 || i === 5 ? "aspect-[3/4] md:aspect-[3/5]" : "aspect-square"
                }`}
              />
              <div className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/40" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <Instagram className="text-gold" size={28} />
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* REVIEWS */}
      <Section
        id="opinie"
        eyebrow="Opinie klientów"
        title={<>Zaufanie <span className="italic gold-gradient">które się liczy</span></>}
      >
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="reveal bg-card p-10">
              <div className="mb-4 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="font-display text-lg italic leading-relaxed text-cream md:text-xl">
                „{r.text}"
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                — {r.name}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        id="faq"
        eyebrow="FAQ"
        title={<>Najczęstsze <span className="italic gold-gradient">pytania</span></>}
      >
        <div className="mx-auto max-w-4xl">
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section
        id="kontakt"
        eyebrow="Kontakt"
        title={<>Odwiedź <span className="italic gold-gradient">nasz salon</span></>}
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="reveal space-y-10">
            <div className="flex gap-5">
              <MapPin className="mt-1 shrink-0 text-gold" size={22} />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Adres</p>
                <p className="mt-2 font-display text-xl text-cream">
                  Mieczysława Niedziałkowskiego 24/lok. LU1<br />
                  61-578 Poznań
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <Phone className="mt-1 shrink-0 text-gold" size={22} />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Telefon</p>
                <a href="tel:+48577007552" className="mt-2 block font-display text-xl text-cream transition-colors hover:text-gold">
                  +48 577 007 552
                </a>
              </div>
            </div>

            <div className="flex gap-5">
              <Clock className="mt-1 shrink-0 text-gold" size={22} />
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Godziny otwarcia</p>
                <ul className="mt-3 space-y-2">
                  {hours.map((h) => (
                    <li key={h.day} className="flex justify-between border-b border-border/50 pb-2 font-sans text-sm">
                      <span className="text-cream">{h.day}</span>
                      <span className="text-muted-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.instagram.com/appohair2/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="btn-ghost-gold flex h-12 w-12 items-center justify-center rounded-full"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/appohair2/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="btn-ghost-gold flex h-12 w-12 items-center justify-center rounded-full"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="reveal relative">
            <div className="absolute -inset-4 -z-10 border border-gold/30" />
            <iframe
              title="Mapa Appo Hair 2 Poznań"
              src="https://www.google.com/maps?q=Mieczys%C5%82awa+Niedzia%C5%82kowskiego+24,+61-578+Pozna%C5%84&output=embed"
              className="h-full min-h-[420px] w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-secondary/40 px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <a href="#top" className="flex items-baseline gap-2">
                <span className="font-display text-3xl tracking-wide text-cream">Appo</span>
                <span className="font-display text-3xl italic gold-gradient">Hair 2</span>
              </a>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                Premium hair studio w sercu Poznania. Piękno, styl i precyzja w jednym miejscu.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Nawigacja</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#o-nas" className="hover:text-gold">O nas</a></li>
                <li><a href="#oferta" className="hover:text-gold">Oferta</a></li>
                <li><a href="#galeria" className="hover:text-gold">Galeria</a></li>
                <li><a href="#opinie" className="hover:text-gold">Opinie</a></li>
                <li><a href="#kontakt" className="hover:text-gold">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Kontakt</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Mieczysława Niedziałkowskiego 24/LU1</li>
                <li>61-578 Poznań</li>
                <li><a href="tel:+48577007552" className="hover:text-gold">+48 577 007 552</a></li>
              </ul>
              <div className="mt-5 flex gap-3">
                <a href="https://www.instagram.com/appohair2/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-gold">
                  <Instagram size={18} />
                </a>
                <a href="https://www.facebook.com/appohair2/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-gold">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="hairline my-12" />
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            © {new Date().getFullYear()} Appo Hair 2 · Wszystkie prawa zastrzeżone
          </p>
        </div>
      </footer>
    </div>
  );
}
