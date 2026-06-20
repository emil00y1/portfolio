# Emil Kristensen — Portfolio

Personal portfolio site for Emil Kristensen, AI & Full Stack Developer based in Copenhagen.

Live at **[emilkristensen.dk](https://emilkristensen.dk)**

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Animations:** Framer Motion
- **Fonts:** Plus Jakarta Sans, DM Sans
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, selected work, how I work, about, contact |
| `/about` | Full about page with bio, education, and work approach |
| `/contact` | Contact page with email and social links |
| `/projects/[id]` | Project detail pages (EstateNews, Allegade 10, Internal Projects) |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/                  # Next.js App Router pages and layouts
components/           # Shared UI components
lib/projects.ts       # Project data (case studies, metadata)
public/               # Static assets (screenshots, portrait, favicon)
```
