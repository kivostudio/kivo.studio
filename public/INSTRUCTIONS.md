# Instruktioner för din hemsida

## Bilder du behöver lägga till

Just nu används placeholder-bilder (logo.svg och verkstad.svg). När du har dina egna bilder:

1. **Logga** – Lägg din logga i `public/` och byt namn till `logo.svg` (ersätt den nuvarande), ELLER lägg den som `logo.png` och ändra `src="/logo.svg"` till `src="/logo.png"` i `src/app/page.tsx`.

2. **Verkstadsbild** – Lägg din bild i `public/` och byt namn till `verkstad.svg` (ersätt den nuvarande), ELLER lägg den som `verkstad.jpg` och ändra `src="/verkstad.svg"` till `src="/verkstad.jpg"` i `src/app/page.tsx`.

## Google Maps

1. Gå till [Google Maps](https://www.google.com/maps)
2. Sök din adress
3. Klicka på "Dela" → "Bädda in en karta"
4. Kopiera iframe-koden
5. Ersätt iframe i `src/app/page.tsx` (sektion "Hitta hit") med din kod

## Kontaktformulär (Formspree)

Formuläret använder Formspree (gratis, 50 förfrågningar/månad):

1. Gå till [formspree.io](https://formspree.io)
2. Skapa ett gratis konto
3. Skapa ett nytt formulär
4. Kopiera formulär-ID:t (t.ex. `abc123xy`)
5. Ersätt `DIN_FORM_ID` i `src/app/page.tsx` med ditt ID:
   ```
   action="https://formspree.io/f/DIN_FORM_ID"
   ```

## Text

Uppdatera texten under "Vad jag gör" i `src/app/page.tsx` med din egen beskrivning.
