export const BOOKSY = "https://booksy.com/pl-pl/328052_appo-hair-2_fryzjer_15608_poznan#ba_s=sr_1";

export type Service = { name: string; desc: string; price: string };

export const services: { title: string; items: Service[] }[] = [
  {
    title: "Damskie — Strzyżenie & Stylizacja",
    items: [
      { name: "Strzyżenie damskie", desc: "Konsultacja, mycie, strzyżenie, modelowanie", price: "od 120 zł" },
      { name: "Modelowanie / Stylizacja", desc: "Mycie i profesjonalna stylizacja", price: "od 90 zł" },
      { name: "Upięcie okolicznościowe", desc: "Eleganckie upięcie na wyjątkową okazję", price: "od 200 zł" },
      { name: "Strzyżenie dziecięce", desc: "Komfort i precyzja dla najmłodszych", price: "od 70 zł" },
    ],
  },
  {
    title: "Koloryzacja & Pielęgnacja",
    items: [
      { name: "Koloryzacja jednolita", desc: "Pełen kolor z odżywczą bazą", price: "od 220 zł" },
      { name: "Balayage / Sombre", desc: "Naturalne refleksy i głębia koloru", price: "od 450 zł" },
      { name: "Refleksy / Pasemka", desc: "Rozświetlenie twarzy delikatnymi tonami", price: "od 350 zł" },
      { name: "Botoks / Keratyna", desc: "Regeneracja i nawilżenie premium", price: "od 280 zł" },
    ],
  },
  {
    title: "Męskie — Barber Studio",
    items: [
      { name: "Strzyżenie męskie", desc: "Klasyka lub nowoczesny fade", price: "od 80 zł" },
      { name: "Strzyżenie + broda", desc: "Pełna stylizacja sylwetki twarzy", price: "od 120 zł" },
      { name: "Trymowanie brody", desc: "Modelowanie i pielęgnacja", price: "od 50 zł" },
      { name: "Mycie + stylizacja", desc: "Premium produkty męskie", price: "od 60 zł" },
    ],
  },
];

export const reviews = [
  {
    name: "Karolina M.",
    text: "Najlepszy salon w Poznaniu. Wnętrze klasy premium, a Pani stylistka stworzyła dokładnie taki kolor o jakim marzyłam. Wychodzę zawsze zachwycona.",
  },
  {
    name: "Magdalena S.",
    text: "Profesjonalizm na każdym kroku — od powitania po finalny efekt. Balayage trzyma się idealnie, a włosy są w świetnej kondycji.",
  },
  {
    name: "Tomasz W.",
    text: "Strzyżenie męskie wykonane perfekcyjnie. Atmosfera spokojna, dyskretna, czuć dbałość o detal. Polecam każdemu mężczyźnie.",
  },
  {
    name: "Anna K.",
    text: "Upięcie ślubne przeszło moje najśmielsze oczekiwania. Trzymało się cały dzień i wyglądało zachwycająco na zdjęciach.",
  },
  {
    name: "Patrycja L.",
    text: "Indywidualne podejście i konsultacja, która naprawdę ma sens. Wreszcie znalazłam swój salon na lata.",
  },
  {
    name: "Michał R.",
    text: "Czysta klasa. Nowoczesny barber w eleganckim wnętrzu, świetna kawa i bezbłędne strzyżenie. 10/10.",
  },
];

export const hours: { day: string; time: string }[] = [
  { day: "Poniedziałek", time: "12:00 – 19:00" },
  { day: "Wtorek", time: "09:00 – 17:00" },
  { day: "Środa", time: "09:00 – 20:00" },
  { day: "Czwartek", time: "10:00 – 17:00" },
  { day: "Piątek", time: "09:00 – 20:00" },
  { day: "Sobota", time: "10:00 – 16:00" },
  { day: "Niedziela", time: "Zamknięte" },
];

export const faqs = [
  {
    q: "Jak przygotować włosy do wizyty?",
    a: "Najlepiej przyjść z włosami umytymi maksymalnie dzień wcześniej i bez nadmiaru stylizacji. Przed koloryzacją unikaj intensywnych odżywek olejowych przez 48 h.",
  },
  {
    q: "Jak dobrać odpowiednią fryzurę?",
    a: "Podczas konsultacji nasi styliści analizują kształt twarzy, strukturę włosa i Twój styl życia. Wspólnie wybieramy formę, która podkreśli Twoje atuty.",
  },
  {
    q: "Czy oferujecie konsultacje przed koloryzacją?",
    a: "Tak — konsultacja jest bezpłatna i pozwala precyzyjnie zaplanować efekt, koszt i czas zabiegu. Możesz umówić ją telefonicznie lub przez Booksy.",
  },
  {
    q: "Czy mogę odwołać rezerwację?",
    a: "Oczywiście. Prosimy o informację najpóźniej 24 h przed wizytą — pozwala to udostępnić termin innym klientom.",
  },
  {
    q: "Jakimi kosmetykami pracujecie?",
    a: "Używamy wyłącznie produktów premium uznanych marek profesjonalnych, dobranych do typu i kondycji włosa.",
  },
  {
    q: "Czy parkujecie w pobliżu salonu?",
    a: "Tak, w okolicy ul. Niedziałkowskiego znajdziesz miejsca parkingowe w strefie oraz parkingi ogólnodostępne.",
  },
];
