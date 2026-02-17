import type { NextApiRequest, NextApiResponse } from "next";

const TOKEN = process.env.ANALYTICS_TOKEN;
const PROJECT_ID = process.env.ANALYTICS_PROJECT_ID;
const TEAM_ID = process.env.ANALYTICS_TEAM_ID;

async function fetchVercel(path: string, params: Record<string, string>) {
  const query = new URLSearchParams({
    ...params,
    ...(PROJECT_ID ? { projectId: PROJECT_ID } : {}),
    ...(TEAM_ID ? { teamId: TEAM_ID } : {}),
    environment: "production",
  });
  const url = `https://vercel.com/api/web/insights/${path}?${query}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error(`Vercel API error: ${res.status} ${path} - ${text}`);
    return { error: res.status, message: text };
  }
  return res.json();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (
    req.headers["x-admin-password"] !==
    process.env.NEXT_PUBLIC_ADMIN_PASSWORD
  ) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (!TOKEN || !PROJECT_ID) {
    return res.status(500).json({
      error: "Missing Vercel API config",
      hasToken: !!TOKEN,
      hasProjectId: !!PROJECT_ID,
      hasTeamId: !!TEAM_ID,
    });
  }

  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const from = thirtyDaysAgo.toISOString();
  const to = now.toISOString();

  try {
    const [timeseries, overview] = await Promise.all([
      fetchVercel("timeseries", { from, to }),
      fetchVercel("overview", { from, to }),
    ]);

    res.status(200).json({ timeseries, overview });
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Unknown error" });
  }
}
