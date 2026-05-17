import { createFileRoute } from "@tanstack/react-router";
import Home from "@/components/site/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Appo Hair 2 — Premium Salon Fryzjerski w Poznaniu" },
      {
        name: "description",
        content:
          "Appo Hair 2 — luksusowy salon fryzjerski w Poznaniu. Strzyżenie damskie i męskie, koloryzacja, balayage, upięcia. Zarezerwuj wizytę online.",
      },
      { property: "og:title", content: "Appo Hair 2 — Premium Salon w Poznaniu" },
      { property: "og:description", content: "Piękno, styl i precyzja w jednym miejscu. Rezerwacja online." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "Appo Hair 2",
          image: "/",
          telephone: "+48577007552",
          priceRange: "$$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Mieczysława Niedziałkowskiego 24/LU1",
            postalCode: "61-578",
            addressLocality: "Poznań",
            addressCountry: "PL",
          },
          url: "/",
          sameAs: [
            "https://www.instagram.com/appohair2/",
            "https://www.facebook.com/appohair2/",
          ],
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "12:00", closes: "19:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "17:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "20:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "10:00", closes: "17:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "20:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "16:00" },
          ],
        }),
      },
    ],
  }),
  component: Home,
});
