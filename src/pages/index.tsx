import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Kivo Studio – Vi ger form åt idéer</title>
      </Head>

      <div className="md:h-screen flex flex-col md:overflow-hidden">
        <div className="flex flex-col md:flex-row flex-1 min-h-0">
          {/* Vänster: verkstadsbild */}
          <div className="h-40 md:h-auto md:w-1/2 p-3 md:p-6 shrink-0">
            <img
              src="/verkstad.jpg"
              alt="Jag står i min verkstad"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Höger: innehåll */}
          <main className="md:w-1/2 px-6 md:pl-12 md:pr-[72px] md:py-6 flex flex-col justify-between h-full">
            {/* Logga – övre linje med bilden */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/logo.svg"
                alt="Logga"
                className="w-44 max-w-full object-contain"
              />
            </div>

            {/* Text – centrerad mellan logga och kontakt, mer luft på mobil */}
            <div className="h-6 md:hidden" />
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#2d2a26]">
                Vi ger form åt <span className="text-[#e02020]">idéer</span>
              </h2>
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
            </section>

            {/* Kontaktinfo – undre linje med bilden */}
            <section className="mb-6 mt-8 md:mt-0">
              <h2 className="text-xl md:text-2xl font-semibold text-[#2d2a26] mb-4">
                Kontakt
              </h2>
              <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0">
                <div className="flex justify-between md:block">
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
                  <div className="md:hidden">
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
                <div className="hidden md:block">
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
              </div>
            </section>
          </main>
        </div>

      </div>
    </>
  );
}
