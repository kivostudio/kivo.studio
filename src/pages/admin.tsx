import Head from "next/head";
import { useState, useEffect, useCallback } from "react";

interface TimeseriesPoint {
  key: string;
  total: number;
  devices: number;
}

interface AnalyticsData {
  timeseries: { data: TimeseriesPoint[] } | null;
  overview: { total: number; devices: number } | null;
}

const LINKS = [
  {
    title: "Vercel Dashboard",
    description: "Deploys, domäner och Analytics",
    url: "https://vercel.com/kivostudios-projects/kivo-studio",
  },
  {
    title: "Vercel Analytics",
    description: "Besökare, sidvisningar, enheter",
    url: "https://vercel.com/kivostudios-projects/kivo-studio/analytics",
  },
  {
    title: "Google Search Console",
    description: "Sökord, indexering, tekniska problem",
    url: "https://search.google.com/search-console?resource_id=sc-domain:kivo.studio",
  },
  {
    title: "Google Business Profile",
    description: "Företagsprofil på Google Maps",
    url: "https://business.google.com",
  },
  {
    title: "GitHub Repo",
    description: "Källkod och versionshantering",
    url: "https://github.com/kivostudio/kivo.studio",
  },
  {
    title: "Squarespace Domains",
    description: "DNS och domäninställningar",
    url: "https://domains.squarespace.com",
  },
];

const SITE_INFO = [
  { label: "Domän", value: "kivo.studio" },
  { label: "Hosting", value: "Vercel" },
  { label: "Framework", value: "Next.js 14" },
  { label: "DNS", value: "Squarespace" },
  { label: "E-post", value: "Google Workspace" },
  { label: "Analytics", value: "Vercel Analytics" },
];

export default function Admin() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);
  const [analyticsError, setAnalyticsError] = useState(false);

  const fetchAnalytics = useCallback(async () => {
    setAnalyticsLoading(true);
    setAnalyticsError(false);
    try {
      const res = await fetch("/api/analytics", {
        headers: {
          "x-admin-password": process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "",
        },
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setAnalytics(data);
    } catch {
      setAnalyticsError(true);
    }
    setAnalyticsLoading(false);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("kivo-admin") === "true") {
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (authenticated) fetchAnalytics();
  }, [authenticated, fetchAnalytics]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthenticated(true);
      sessionStorage.setItem("kivo-admin", "true");
      setError(false);
    } else {
      setError(true);
    }
  }

  if (!authenticated) {
    return (
      <>
        <Head>
          <title>Admin – Kivo Studio</title>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
          <form
            onSubmit={handleLogin}
            className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-sm"
          >
            <h1 className="text-xl font-semibold text-[#2d2a26] mb-6">
              Kivo Studio Admin
            </h1>
            <input
              type="password"
              placeholder="Lösenord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-[#8b6914]"
            />
            {error && (
              <p className="text-sm text-red-500 mb-4">Fel lösenord</p>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-[#2d2a26] text-white rounded-lg hover:bg-[#4a4540] transition-colors font-medium"
            >
              Logga in
            </button>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Admin – Kivo Studio</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="min-h-screen bg-[#f5f5f5] p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold text-[#2d2a26]">
              Kivo Studio Admin
            </h1>
            <button
              onClick={() => {
                sessionStorage.removeItem("kivo-admin");
                setAuthenticated(false);
              }}
              className="text-sm text-[#8b8078] hover:text-[#2d2a26] transition-colors"
            >
              Logga ut
            </button>
          </div>

          {/* Trafikgraf */}
          <h2 className="text-lg font-semibold text-[#2d2a26] mb-4">
            Trafik (senaste 30 dagarna)
          </h2>
          {analyticsLoading && (
            <div className="bg-white rounded-xl p-8 shadow-sm mb-6 text-center text-[#8b8078]">
              Laddar analytics...
            </div>
          )}
          {analyticsError && (
            <div className="bg-white rounded-xl p-8 shadow-sm mb-6 text-center text-[#8b8078]">
              Kunde inte ladda analytics. Kontrollera att VERCEL_API_TOKEN
              och VERCEL_PROJECT_ID är konfigurerade i Vercel.
            </div>
          )}
          {analytics && analytics.overview && (
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 shadow-sm text-center">
                <p className="text-3xl font-bold text-[#2d2a26]">
                  {analytics.overview.total}
                </p>
                <p className="text-sm text-[#8b8078] mt-1">Sidvisningar</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm text-center">
                <p className="text-3xl font-bold text-[#2d2a26]">
                  {analytics.overview.devices}
                </p>
                <p className="text-sm text-[#8b8078] mt-1">Unika besökare</p>
              </div>
            </div>
          )}
          {analytics && analytics.timeseries?.data && (
            <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
              <div className="flex items-end gap-[2px] h-40">
                {analytics.timeseries.data.map((d, i) => {
                  const max = Math.max(
                    ...analytics.timeseries!.data.map((x) => x.total),
                    1
                  );
                  const height = (d.total / max) * 100;
                  return (
                    <div
                      key={d.key}
                      className="flex-1 group relative"
                    >
                      <div
                        className="bg-[#e02020] rounded-t-sm w-full transition-all hover:bg-[#c01818] cursor-pointer"
                        style={{
                          height: `${Math.max(height, 2)}%`,
                        }}
                      />
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#2d2a26] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-10">
                        {d.key.slice(0, 10)}: {d.total} visningar, {d.devices} besökare
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between mt-2 text-xs text-[#8b8078]">
                <span>{analytics.timeseries.data[0]?.key.slice(0, 10)}</span>
                <span>
                  {analytics.timeseries.data[analytics.timeseries.data.length - 1]?.key.slice(0, 10)}
                </span>
              </div>
            </div>
          )}
          <p className="text-xs text-[#8b8078] mb-10">
            Detaljerad info om länder, enheter och trafikkällor finns i{" "}
            <a
              href="https://vercel.com/kivostudios-projects/kivo-studio/analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#2d2a26]"
            >
              Vercel Analytics
            </a>
          </p>

          {/* Snabblänkar */}
          <h2 className="text-lg font-semibold text-[#2d2a26] mb-4">
            Verktyg
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {LINKS.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-medium text-[#2d2a26] mb-1">
                  {link.title}
                </h3>
                <p className="text-sm text-[#8b8078]">{link.description}</p>
              </a>
            ))}
          </div>

          {/* Sajt-info */}
          <h2 className="text-lg font-semibold text-[#2d2a26] mb-4">
            Sajtinfo
          </h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-10">
            {SITE_INFO.map((item, i) => (
              <div
                key={item.label}
                className={`flex justify-between px-5 py-3 ${
                  i !== SITE_INFO.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <span className="text-[#8b8078] text-sm">{item.label}</span>
                <span className="text-[#2d2a26] text-sm font-medium">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* SEO-filer */}
          <h2 className="text-lg font-semibold text-[#2d2a26] mb-4">
            SEO-filer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "robots.txt", path: "/robots.txt" },
              { name: "sitemap.xml", path: "/sitemap.xml" },
              { name: "llms.txt", path: "/llms.txt" },
              { name: "og-image.jpg", path: "/og-image.jpg" },
            ].map((file) => (
              <a
                key={file.path}
                href={file.path}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <span className="text-sm font-medium text-[#2d2a26]">
                  {file.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
