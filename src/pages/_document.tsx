import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="sv">
      <Head>
        <meta name="description" content="Kivo Studio – Vi ger form åt idéer. 3D-print, prototyper och modeller från skiss till färdig produkt i Hägersten, Stockholm." />
        <link rel="canonical" href="https://kivo.studio" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kivo.studio" />
        <meta property="og:title" content="Kivo Studio – Vi ger form åt idéer" />
        <meta property="og:description" content="3D-print, CNC-fräsning och prototypframtagning i Stockholm. Från skiss till färdig produkt med högsta finish." />
        <meta property="og:image" content="https://kivo.studio/og-image.jpg" />
        <meta property="og:locale" content="sv_SE" />
        <meta property="og:site_name" content="Kivo Studio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kivo Studio – Vi ger form åt idéer" />
        <meta name="twitter:description" content="3D-print, CNC-fräsning och prototypframtagning i Stockholm. Från skiss till färdig produkt med högsta finish." />
        <meta name="twitter:image" content="https://kivo.studio/og-image.jpg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="min-h-screen bg-white text-[#2d2a26] antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
