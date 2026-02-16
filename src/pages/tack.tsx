import Head from "next/head";
import Link from "next/link";

export default function Tack() {
  return (
    <>
      <Head>
        <title>Tack – Min Verkstad</title>
      </Head>
      <main className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold text-[#5c4710] mb-4">
          Tack för din förfrågan!
        </h1>
        <p className="text-lg text-[#4a4540] mb-8">
          Jag har fått ditt meddelande och återkommer så snart jag kan.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#8b6914] text-white font-medium rounded-lg hover:bg-[#5c4710] transition-colors"
        >
          Tillbaka till startsidan
        </Link>
      </main>
    </>
  );
}
