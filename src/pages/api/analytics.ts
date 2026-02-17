import type { NextApiRequest, NextApiResponse } from "next";

const VERCEL_API = "https://vercel.com/api";
const TOKEN = process.env.VERCEL_API_TOKEN;
const PROJECT_ID = process.env.VERCEL_PROJECT_ID;
const TEAM_ID = process.env.VERCEL_TEAM_ID;

async function fetchVercel(path: string, params: Record<string, string>) {
  const query = new URLSearchParams({
    ...params,
    ...(PROJECT_ID ? { projectId: PROJECT_ID } : {}),
    ...(TEAM_ID ? { teamId: TEAM_ID } : {}),
    environment: "production",
  });
  const res = await fetch(`${VERCEL_API}${path}?${query}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.headers["x-admin-password"] !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (!TOKEN || !PROJECT_ID) {
    return res.status(500).json({ error: "Missing Vercel API config" });
  }

  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const from = thirtyDaysAgo.toISOString().split("T")[0];
  const to = now.toISOString().split("T")[0];

  const [timeseries, countries, pages, referrers] = await Promise.all([
    fetchVercel("/v1/web-analytics/timeseries/pageViews", {
      from,
      to,
      granularity: "day",
    }),
    fetchVercel("/v1/web-analytics/top/country", {
      from,
      to,
      limit: "10",
    }),
    fetchVercel("/v1/web-analytics/top/path", {
      from,
      to,
      limit: "10",
    }),
    fetchVercel("/v1/web-analytics/top/referrer", {
      from,
      to,
      limit: "10",
    }),
  ]);

  res.status(200).json({ timeseries, countries, pages, referrers });
}
