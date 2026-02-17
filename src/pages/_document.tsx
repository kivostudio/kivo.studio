import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="sv">
      <Head>
        <meta name="description" content="Kivo Studio – Vi ger form åt idéer. 3D-print, prototyper och modeller från skiss till färdig produkt." />
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
