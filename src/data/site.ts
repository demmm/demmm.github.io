// All site copy and media in one place — edit here, not in the components.
// Images are still hot-linked from the original WordPress media library
// (hochkoenigferien.com/wp-content/uploads/...). Download them into
// /public/images and swap the paths below when you're ready to fully
// detach from the old host.

export const site = {
  name: "Hochkönig Ferien",
  tagline: "Mühlbach am Hochkönig · Salzburgerland",
  description:
    "Luxe appartement voor 2 tot 6 personen in Mühlbach am Hochkönig, Salzburgerland — aan de voet van de Hochkönig (2941m), midden in Ski Amadé.",
  url: "https://hochkoenigferien.com",
  ogImage: "/images/hero_home2.jpg",
};

export const nav = [
  { href: "#kenmerken", label: "Kenmerken" },
  { href: "#waarom", label: "Waarom" },
  { href: "#galerij", label: "Galerij" },
  { href: "#activiteiten", label: "Activiteiten" },
  { href: "#video", label: "Video" },
  { href: "#verblijf", label: "Info" },
  { href: "#contact", label: "Contact" },
];

export const hero = {
  video: "/hochk3.mp4",
  poster: "/images/hero_home2.jpg",
  eyebrow: "Salzburgerland · Ski Amadé · 2941m",
  title: "Welkom in Mühlbach",
  subtitle: "Hochkönig Ferien in Ski Amadé.",
};

// The signature "elevation profile" numbers — real figures pulled straight
// from the WordPress copy, used to drive the trail-marker stat strip.
export const stats = [
  { value: "2941", unit: "m", label: "Top Hochkönig" },
  { value: "120", unit: "km", label: "Aaneengesloten pistes" },
  { value: "35", unit: "km", label: "Königstour ski-rondtocht" },
  { value: "340", unit: "km", label: "Wandelpaden" },
];

export const features = [
  {
    title: "Locatie",
    body: "Hochkönig Ferien bevindt zich in het dorp Mühlbach, centraal in het Salzburgerland, aan de voet van de machtige berg Hochkönig (2941m). Hier heerst nog het authentieke berggevoel. De dichtstbijzijnde gondel, de Karbachalmbahn, ligt op enkele minuten rijden en de gratis ski-/wandelbus stopt op 120 meter.",
    meta: "10 min van de snelweg · 45 min vanaf Salzburg Airport",
  },
  {
    title: "Skiën, wandelen & fietsen",
    body: "Skigebied Hochkönig telt ruim 120 kilometer aaneengesloten pistes en 35 liften, onderdeel van Ski Amadé. Absolute highlight is de geliefde ski-dagtocht “Königstour” (35 km), die start in Mühlbach. Daarnaast talloze gemarkeerde wandelroutes en een uitgebreid netwerk van e-bike laadpunten.",
    meta: "Mühlbach — “Bergdorf der Tiere”",
  },
  {
    title: "Appartement Hochkönig Ferien",
    body: "Dit luxe appartement (dec. 2020) ligt rustig op de zonnige zuidhelling, kort boven het dorpscentrum. Kleinschalig complex van 5 appartementen. Gelijkvloers, geschikt voor 2 tot max. 6 personen, met 2 badkamers, 2 slaapkamers en een slaapbank. Vrij gebruik van de gemeenschappelijke wellness met sauna.",
    meta: "Groot privéterras · 2 eigen parkeerplaatsen",
  },
];

export const skiSection = {
  eyebrow: "Waarom Hochkönig",
  title: "Een veelzijdig skigebied",
  paragraphs: [
    "De regio Hochkönig staat bekend als één van de mooiste skigebieden van Salzburg. Het gebied heeft voor iedere skiër mogelijkheden, is uitgestrekt en biedt brede pistes die ver uit elkaar liggen. Het gebied is sneeuwzeker — lokaal bekend als het “sneeuwgat” — omdat het Hochkönig-massief een hoge sneeuwval kent.",
    "Een absolute highlight van de skiregio is de populaire skitocht De Königstour, die het berggebied tussen Mühlbach, Dienten en Maria Alm verbindt. Deze skitocht van maar liefst 35 km start in het authentieke bergdorp Mühlbach en is perfect aangegeven.",
    "Behalve de 120 kilometer piste zijn er drie snowparken en een funslope. Tussen Dienten en Mühlbach ligt, met 1,8 km lengte, een van de langste snowparks van Oostenrijk. Voor kleine kinderen en beginners is er het kleinere, overzichtelijke gebied Hochkeil met ruim 10 pistekilometers en een eigen, goedkopere skipas.",
    "Hochkönig maakt deel uit van Ski Amadé, het grootste skipasverbond van Oostenrijk met 760 km aan pistes — ook te gebruiken in Flachau, het Gasteinertal of Schladming.",
  ],
  image: "/images/hinterthal.jpg",
};

export const summerSection = {
  eyebrow: "Waarom Hochkönig",
  title: "Zomerparadijs in de Alpen",
  paragraphs: [
    "Mühlbach am Hochkönig wordt omgeven door de rotsformaties van de Mandlwand en de Hochkönig, groene weiden met grazende koeien, kristalheldere bergmeren en idyllische bossen. Gasten uit de hele wereld genieten hier van de traditionele almhutten en het gekletter van water langs een wandelpad.",
    "Vanaf ons appartement begint het wandelen of fietsen direct. De regio heeft 340 km aan duidelijk gemarkeerde wandelpaden. Een aanrader: het Matrashaus op 2941 meter, waar je kunt overnachten en genieten van de zonsondergang over de Alpen. Of de Majestätische Weitwanderweg, een meerdaagse tocht van 73 km.",
    "Op 25 minuten rijden ligt misschien wel de mooist gelegen golfbaan van de Alpen: Golfclub Urslautal. Mühlbach wordt ook wel het “Bergdorf der Tiere” genoemd — bezoek een van de 6 gratis kinderboerderijen. Bij Toni's Almspielplatz kunnen kinderen zich uitleven op water- en zandspeeltoestellen, een klimtoren en een kinderwandelpad geschikt voor kinderwagens.",
  ],
  image: "/images/hochkoenig-summer.jpg",
};

export const hochkoenigCard = {
  title: "Hochkönig Card",
  intro:
    "Onze gasten ontvangen van midden mei tot eind oktober gratis een Hochkönig Card voor de duur van hun verblijf.",
  benefits: [
    "Onbeperkt gebruik van alle kabelbanen in de regio Hochkönig",
    "Gratis gebruik van de wandelbus in de regio Hochkönig",
    "Een gratis rit op de zomerrodelbaan",
    "Gratis toegang tot twee buitenzwembaden",
    "Gratis toegang tot de tennisbanen",
    "Gratis begeleide wandelingen in de regio",
    "Gratis begeleide e-bike- en mountainbiketochten",
    "Gratis toegang tot het Nationaal Park Hohe Tauern",
    "30% korting op de Waldseilgarten Natrun in Maria Alm",
    "20% korting op een rit met paardenkoets Koblinger en Elmaugut",
    "20% korting op een e-bike bij alle deelnemende winkels",
    "15% korting op de greenfee bij Golfclub Urslautal",
  ],
  link: {
    href: "https://www.hochkoenig.at/de/hochkoenigcard/die-hochkoenigcard-eine-karte-viele-ermaessigungen.html",
    label: "Meer info op Die Hochkönigcard",
  },
};

export const nearby = {
  activities: [
    "Zwembad in Mühlbach",
    "Kinderboerderijen Mühlbach — Bergdorf der Tiere",
    "Mijnbouwmuseum in Mühlbach",
    "Toni's Almspielplatz in Mühlbach",
    "Mountaincarten Karbachalm",
    "Klimbos Natrun",
    "Thermé Amadé zwemparadijs",
    "Fietsen en mountainbiken",
    "Wandelen en hiken",
    "Rodelen",
    "Paragliden",
    "Raften op de Salzach",
    "Bergbeklimmen",
    "Golfen — Urslautal en St. Johann",
  ],
  sights: [
    "Liechtensteinklamm",
    "Krimmler watervallen",
    "IJsgrot Eisriesenwelt",
    "Kasteel Hohenwerfen",
    "Gainfeldbach waterval",
    "Kitzlochklamm",
    "Großglockner Hochalpenstraße",
    "Skischans Bischofshofen",
    "The Sound of Music Trail",
    "Salzburg",
  ],
};

export const gallery = [
  { src: "huis2", alt: "Buitenaanzicht appartement" },
  { src: "piste_hochkonig", alt: "Piste in skigebied Hochkönig" },
  { src: "bergpanorama-1", alt: "Bergpanorama Hochkönig" },
  { src: "bergpanorama", alt: "Bergpanorama" },
  { src: "hochkoenig_day_hike", alt: "Dagtocht wandelen Hochkönig" },
  { src: "uitzicht_terras", alt: "Uitzicht vanaf het terras" },
  { src: "uitzicht", alt: "Bergzicht" },
  { src: "vooraanzicht_gallery", alt: "Vooraanzicht appartement" },
  { src: "kitchen", alt: "Keuken" },
  { src: "kitchen2", alt: "Keuken detail" },
  { src: "woonkamer2", alt: "Woonkamer" },
  { src: "Slaapkamer-1", alt: "Slaapkamer" },
  { src: "Slaapkamer-11", alt: "Slaapkamer" },
  { src: "woonkamer", alt: "Woonkamer" },
  { src: "slaapkamer1a", alt: "Slaapkamer" },
  { src: "badkamer", alt: "Badkamer" },
  { src: "hal", alt: "Hal" },
  { src: "bergbahnen-muehlbach", alt: "Bergbahnen Mühlbach" },
  { src: "salzburg", alt: "Salzburg" },
  { src: "ski-amade", alt: "Ski Amadé" },
].map((g) => ({
  ...g,
  full: `/images/${g.src}.jpg`,
  thumb: `/images/thumbs/${g.src}-480x300.jpg`,
}));

export const activities = [
  {
    title: "Zomer",
    body: "Mühlbach am Hochkönig wordt omgeven door de bizarre rotsformaties van de Mandlwand, groene weiden, kristalheldere bergmeren en idyllische bossen.",
  },
  {
    title: "Winter",
    body: "Met een directe verbinding aan het grote Hochkönig skigebied zit u hier midden in één van de topregio's van Ski Amadé.",
  },
  {
    title: "Natuur",
    body: "Gasten uit de hele wereld genieten hier van de ongerepte natuur, rustige wandelpaden, authentieke almhutten en prachtige uitzichten.",
  },
  {
    title: "Skiën",
    body: "Er kan aan één stuk van Maria Alm via Dienten naar Mühlbach worden geskied. De afdalingen zijn meestal mooi breed en lopen deels door bosgebied.",
  },
  {
    title: "Pistes",
    body: "Sneeuwzekerheid, prachtige pistes, indrukwekkende uitzichten en de beste huttencultuur — het op één na grootste aaneengesloten skigebied van Salzburgerland.",
  },
  {
    title: "Afwisseling",
    body: "De funslope Schönanger op de Aberg zorgt voor extra afwisseling. De 35 km Königstour loopt via prachtige pistes over 6 toppen, 7500m hoogteverschil.",
  },
];

export const videoSection = {
  title: "Salzburgerland",
  youtubeId: "x-kFSi_TSyw",
};

export const stay = {
  title: "Het appartement",
  details: {
    adults: 6,
    children: 2,
    bed: "King size 180×200 cm",
  },
  facilities: [
    "2 eigen parkeerplaatsen",
    "Afwasmachine, magnetron, hete luchtoven",
    "Filter koffie & Nespresso apparaat",
    "Föhn",
    "Grote koel-vriescombinatie",
    "Kinderbedje & kinderstoel",
    "Privéterras",
    "Skiruimte met skischoenverwarmer",
    "Stofzuiger",
    "Wasmachine & wasdroger",
    "Wellness ruimte met sauna",
    "Wifi",
  ],
  link: {
    href: "/ALGEMENE_VOORWAARDEN.pdf",
    label: "Algemene Voorwaarden (PDF)",
  },
  rules: [
    { label: "Toeristenbelasting", value: "€2,05 p.p.p.n. (vanaf 15 jaar)" },
    { label: "Eindschoonmaak (verplicht)", value: "€130" },
    { label: "Min. verblijf hoogseizoen", value: "7 nachten (zat–zat)" },
    { label: "Min. verblijf buiten hoogseizoen", value: "3 nachten" },
    { label: "Check-in", value: "15:00 – 22:00 uur" },
    { label: "Check-out", value: "vóór 10:00 uur" },
  ],
  note: "Bedlinnen en badlinnen (2 p.p.) zijn inbegrepen. Roken en huisdieren zijn niet toegestaan. Voor aankomst laten wij u weten waar u de sleutel kunt ophalen — onze beheerder woont vlakbij het appartement.",
};

export const contact = {
  name: "Dennis en Emily van Lier",
  address: "Mühlbach am Hochkönig 369, 5505 Mühlbach am Hochkönig, Austria",
  phone: "+31 6 228 96 834",
  email: "hochkoenigferien@gmail.com",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19756.4894632265!2d13.111203740707666!3d47.37795087303958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4776d936b2cfce83%3A0x619096e554f6efc7!2sM%C3%BChlbach%20369%2C%205505%20M%C3%BChlbach%20am%20Hochk%C3%B6nig%2C%20Austria!5e1!3m2!1sen!2snl!4v1768242755500!5m2!1sen!2snl",
};

export const footer = {
  copyright: `Copyright © 2020 – ${new Date().getFullYear()} Hochkönig Ferien`,
};
