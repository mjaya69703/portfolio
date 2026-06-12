# ascendkyo.dev

Personal portfolio website built with Astro, Tailwind CSS, and MDX.

## Tech Stack

- [Astro](https://astro.build) v6 — static site generator
- [Tailwind CSS](https://tailwindcss.com) v4 — utility-first CSS
- [MDX](https://mdxjs.com) — markdown with JSX for blog posts

## Getting Started

```bash
npm install
npm run dev
```

Dev server runs at `http://localhost:4321`.

## Commands

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm run dev`   | Start dev server at `localhost:4321`        |
| `npm run build` | Build production site to `./dist/`          |
| `npm run preview` | Preview production build locally          |

## Project Structure

```text
src/
├── components/     # Astro components (Nav, Footer, NavLink)
├── content/blog/   # MDX blog posts
├── data/           # Profile data & config
├── layouts/        # Base layout
├── pages/          # Site pages
└── styles/         # Global CSS
```

## Deployment

Built with Docker support (`Dockerfile` + `nginx.conf`) for containerized deployment. Also deployable to Vercel, Netlify, or any static hosting.

## License

MIT
