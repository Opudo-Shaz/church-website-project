# Higher Life Church — Website

A simple, dependency-free one-page website: plain HTML, CSS, and a small
amount of JavaScript for the mobile menu and footer year. No build step,
no framework — open `index.html` in a browser and it just works.

## Project structure

```
church-website/
├── index.html          ← page structure & content (placeholders in [brackets])
├── css/
│   └── style.css       ← all styling (colors, layout, responsive rules)
├── js/
│   └── main.js         ← mobile menu toggle + auto-updating footer year
├── assets/
│   └── images/         ← put photos here (logo, congregation, pastor, etc.)
└── README.md
```

## Before you launch

Search `index.html` for anything in `[square brackets]` — these are
placeholders waiting on real content from the church:

- Church name, mission statement, About Us text
- Service times and days
- Upcoming events (dates, names, descriptions)
- Ministries/programs list
- Address, phone, email, social links
- Give/donate link (M-Pesa till/paybill or PayPal)

Once photos are ready, drop them in `assets/images/` and swap the
placeholder `<div class="about-photo">` block in `index.html` for a real
`<img src="assets/images/your-photo.jpg" alt="...">` tag.

## Running it locally

No install needed — just open `index.html` directly in a browser, or serve
it locally so relative paths behave exactly like they will in production:

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying (free options)

Any static host works since there's no backend:

- **GitHub Pages** — push this folder to a repo, enable Pages in Settings
- **Netlify** — drag-and-drop the folder onto netlify.com/drop
- **Vercel** — `vercel` CLI or drag-and-drop via the dashboard

## Notes

- Fonts (Fraunces + Work Sans) load from Google Fonts via `<link>` tags in
  `index.html` — no local font files needed, but it does require internet
  access to render correctly.
- The map in the "Location & Contact" section is a placeholder box —
  replace it with a real Google Maps `<iframe>` embed once the address
  is confirmed.
- Fully responsive (mobile menu included), keyboard-focus visible, and
  respects reduced-motion preferences.