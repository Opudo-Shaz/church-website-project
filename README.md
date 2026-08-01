# Higher Life Church Website

A polished, dependency-free one-page website for Higher Life Church. It uses plain HTML, CSS, and a small amount of JavaScript for the mobile navigation and footer year. No build tools or framework are required.

## What’s included

- Welcome hero section with a church-themed visual layout
- About section with mission and vision highlights
- Our Team section with pastor profile cards and WhatsApp buttons
- Service times and upcoming events sections
- Ministries and contact information
- Responsive design for desktop and mobile screens

## Project structure

```text
church-website-project/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── images/
│       ├── logo.png
│       ├── hero-photo.jpeg
│       ├── PastorFrank.png
│       ├── PastorLeon.png
│       ├── PastorShilloh.png
│       └── ...
└── README.md
```

## Run locally

Open the site directly in a browser, or serve it locally to ensure assets and links work correctly.

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Update content

You can easily customize the site by editing:

- [index.html](index.html) for page content and section text
- [css/style.css](css/style.css) for colors, spacing, and layout
- [assets/images](assets/images) for photos and branding assets

## Notes

- Fonts are loaded from Google Fonts in [index.html](index.html).
- The site is fully responsive and includes a mobile menu.
- The contact/map section can be enhanced later with a real Google Maps embed if needed.