import Head from "next/head";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kivo Studio",
  description:
    "Kivo Studio erbjuder 3D-print, CNC-fräsning och prototypframtagning i Hägersten, Stockholm. Från skiss till färdig produkt – prototyper, modeller och unika exemplar med högsta finish.",
  url: "https://kivo.studio",
  logo: "https://kivo.studio/logo.svg",
  image: "https://kivo.studio/verkstad.jpg",
  telephone: "+46708898899",
  email: "hej@kivo.studio",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jakobsdalsvägen 15B",
    addressLocality: "Hägersten",
    postalCode: "126 53",
    addressCountry: "SE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 59.3064,
    longitude: 17.9852,
  },
  founder: {
    "@type": "Person",
    name: "Ivo Kiusalaas",
  },
  areaServed: {
    "@type": "City",
    name: "Stockholm",
  },
  serviceType: [
    "3D-print",
    "CNC-fräsning",
    "Prototypframtagning",
    "3D-modellering",
    "Modellbygge",
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Kivo Studio – Vi ger form åt idéer</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div>
        {/* Mobil: cropppad bild överst */}
        <div className="md:hidden h-40 p-3 shrink-0">
          <img
            src="/verkstad.jpg"
            alt="Kivo Studio verkstad – 3D-print och prototypframtagning i Hägersten, Stockholm"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Desktop: fixerad bild till vänster */}
        <div className="hidden md:block md:fixed md:left-0 md:top-0 md:w-1/2 md:h-screen p-6">
          <img
            src="/verkstad.jpg"
            alt="Kivo Studio verkstad – 3D-print och prototypframtagning i Hägersten, Stockholm"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Höger: innehåll – scrollar vid behov */}
        <main className="md:w-1/2 md:ml-auto px-6 md:pl-12 md:pr-[72px] md:py-6 flex flex-col md:justify-between md:h-screen">
            {/* Logga – övre linje med bilden */}
            <header className="flex justify-center md:justify-end shrink-0">
              <img
                src="/logo.svg"
                alt="Kivo Studio logotyp"
                className="w-44 max-w-full object-contain"
              />
            </header>

            {/* Text – centrerad mellan logga och kontakt, mer luft på mobil */}
            <div className="h-6 md:hidden" />
            <article className="space-y-4 md:overflow-y-auto md:min-h-0">
              <h1 className="text-2xl md:text-3xl font-semibold text-[#2d2a26]">
                Vi ger form åt <span className="text-[#e02020]">idéer</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-[#4a4540]">
                Vi förverkligar det som inte finns än. Från skiss eller koncept
                till färdigt objekt – vi modellerar, printar och finishar
                prototyper, modeller och unika exemplar i alla storlekar. Med en
                finish som få andra levererar – oavsett om det gäller
                utställningen, presentationen eller scenen.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-[#4a4540]">
                Vi jobbar med konstnärer, arkitekter, scenografer,
                produktutvecklare och alla andra som behöver göra en idé
                gripbar. Oavsett om du kommer med en färdig 3D-modell eller en
                servettskiss – vi tar det därifrån, från 3D-modellering hela
                vägen till färdig produkt. Genom 3D-print, CNC-fräsning och
                andra metoder hittar vi alltid rätt teknik och rätt finish för
                ditt projekt.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-[#4a4540]">
                Kivo Studio grundades av Ivo Kiusalaas med en enkel idé: att
                göra högkvalitativ tillverkning tillgänglig för fler. Med en
                teknisk bakgrund inom industrin och över 15 års erfarenhet av
                material och processer vet vi hur man levererar resultat –
                snabbt, till rätt kvalitet och utan onödiga mellanhänder som
                driver upp kostnaden.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-[#4a4540]">
                Hör av dig så tar vi det därifrån.
              </p>
            </article>

            {/* Kontaktinfo – undre linje med bilden */}
            <footer className="mb-6 mt-8 shrink-0">
              <h2 className="text-xl md:text-2xl font-semibold text-[#2d2a26] mb-4">
                Kontakt
              </h2>
              <address className="not-italic flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0">
                <div className="flex justify-between lg:block">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8b6914] mb-1">
                      E-post
                    </h3>
                    <a
                      href="mailto:hej@kivo.studio"
                      className="text-[#4a4540] hover:text-[#8b6914] transition-colors"
                    >
                      hej@kivo.studio
                    </a>
                  </div>
                  <div className="lg:hidden">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8b6914] mb-1">
                      Telefon
                    </h3>
                    <a
                      href="tel:+46708898899"
                      className="text-[#4a4540] hover:text-[#8b6914] transition-colors"
                    >
                      070-889 88 99
                    </a>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8b6914] mb-1">
                    Telefon
                  </h3>
                  <a
                    href="tel:+46708898899"
                    className="text-[#4a4540] hover:text-[#8b6914] transition-colors"
                  >
                    070-889 88 99
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8b6914] mb-1">
                    Adress
                  </h3>
                  <p className="text-[#4a4540] leading-relaxed">
                    Jakobsdalsvägen 15B<br />
                    126 53 Hägersten
                  </p>
                </div>
              </address>
            </footer>
        </main>
      </div>
    </>
  );
}
