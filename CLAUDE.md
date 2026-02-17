# Kivo Studio – kivo.studio

## Vad är detta?
En enkel företagswebbplats för Kivo Studio, ett 3D-print- och prototypföretag i Hägersten, Stockholm. Grundat av Ivo Kiusalaas.

## Teknikstack
- **Framework:** Next.js 14 (Pages Router, inte App Router)
- **Styling:** Tailwind CSS
- **Font:** DM Sans (Google Fonts)
- **Hosting:** Vercel (auto-deploy från GitHub main-branch)
- **Domän:** kivo.studio (DNS via Squarespace, pekar till Vercel)
- **Analytics:** Vercel Analytics (@vercel/analytics)
- **E-post:** Google Workspace (hej@kivo.studio)

## Projektstruktur
```
src/
  pages/
    index.tsx       # Huvudsidan – all synlig content
    admin.tsx       # Lösenordsskyddad admin-dashboard
    tack.tsx        # Tack-sida (oanvänd just nu)
    _app.tsx        # Global layout, Vercel Analytics
    _document.tsx   # HTML-struktur, meta-taggar, fonts, favicon
    api/
      analytics.ts  # Proxy till Vercel Web Analytics API
  styles/
    globals.css     # Tailwind directives, font-family
public/
  verkstad.jpg      # Verkstadsbild (huvudbild)
  logo.svg          # Logotyp (SVG, exporterad från Pixelmator)
  logo.png          # Logotyp (PNG-version)
  favicon.svg       # Favicon (SVG)
  favicon.ico       # Favicon (PNG som .ico för Safari)
  favicon-32x32.png # Favicon 32px
  favicon-16x16.png # Favicon 16px
  apple-touch-icon.png # 180x180 för iOS
  og-image.jpg      # Open Graph bild (1200x630)
  robots.txt        # SEO – tillåter alla crawlers
  sitemap.xml       # SEO – sidkarta
  llms.txt          # AI-optimering – klartext för LLM:er
```

## Layout
- **Desktop:** Verkstadsbilden fixerad till vänster (50%), text scrollar till höger (50%)
- **Mobil:** Bild cropppad överst, allt scrollbart
- Brytpunkt: `md` (768px) för layout, `lg` (1024px) för kontaktinfo-rad

## SEO & AI-optimering
- JSON-LD strukturerad data (LocalBusiness schema) i index.tsx
- Open Graph + Twitter meta-taggar i _document.tsx
- Canonical URL: https://kivo.studio
- robots.txt, sitemap.xml, llms.txt
- Registrerad i Google Search Console
- H1-rubrik på huvudrubriken, semantiska HTML-taggar

## Admin-sida (/admin)
- Lösenordsskyddad (NEXT_PUBLIC_ADMIN_PASSWORD)
- Visar trafikstatistik via Vercel Web Analytics API
- Snabblänkar till Vercel, GitHub, Google Search Console etc.
- API-endpoint: /api/analytics (proxy till Vercel API)

## Miljövariabler
Lokalt i `.env.local`, i Vercel under Settings > Environment Variables:
- `NEXT_PUBLIC_ADMIN_PASSWORD` – Lösenord för /admin
- `ANALYTICS_TOKEN` – Vercel API-token
- `ANALYTICS_PROJECT_ID` – Vercel Project ID
- `ANALYTICS_TEAM_ID` – Vercel Team ID

## Deploy
Push till `main` på GitHub triggar automatisk deploy på Vercel.
```bash
git add -A && git commit -m "beskrivning" && git push
```

## GitHub
- Repo: https://github.com/kivostudio/kivo.studio
- Auth: Classic personal access token (ghp_...)
- Remote URL ska INTE innehålla token (rensad)

## Kontaktinfo på sidan
- E-post: hej@kivo.studio
- Telefon: 070-889 88 99
- Adress: Jakobsdalsvägen 15B, 126 53 Hägersten

## Designbeslut
- Ren, minimalistisk design med mycket whitespace
- Färger: svart (#2d2a26) för text, röd (#e02020) för accenter, guld (#8b6914) för rubriker under kontakt
- Bilden har rundade hörn (rounded-2xl) och padding (p-6)
- Logga högerjusterad på desktop, centrerad på mobil
- Ingen scroll i fullskärm desktop, scroll vid mindre fönster och mobil
