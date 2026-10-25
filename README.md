# Royal College Art Circle

The official website for the Royal College Art Circle (RCAC), a student-led
art society at Royal College. The site presents the circle's history, current
projects, leadership, art-learning resources, and contact information.

## What is included

- A responsive home page with the RCAC introduction, project catalogue, live
  project-status counts, and contact form.
- Current leadership and teacher-in-charge information at `/leadership`.
- A historical board archive at `/past-boards`.
- The Chithra Akura learning hub at `/chithra-akura`, which brings together
  the art syllabus and learning portal resources.

## Tech stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Radix UI, shadcn/ui, Lucide, and Tabler Icons
- Vercel Analytics in production builds

## Requirements

- Node.js with npm
- A local clone of this repository

## Run locally

Install dependencies, start the development server, and open
`http://localhost:3000`:

```sh
npm install
npm run dev
```

Available scripts:

```sh
npm run dev       # Start the development server
npm run lint      # Run ESLint
npm run build     # Create a production build
npm run start     # Serve the production build locally
```

## Project structure

```text
src/
  app/             App Router pages and route redirects
  components/      Shared sections and UI components
  data/             Project and past-board content
  lib/              Shared utilities and project statistics
public/
  assets/           Images, icons, and other static assets
  legacy/           Existing HTML/CSS/JS learning resources
```

## Updating content

- Homepage projects and their statuses: `src/data/projects-2026.json`
- Past board members and themes: `src/data/past-boards.json`
- Homepage sections: `src/components/sections/`
- Page routes: `src/app/`
- Static images and legacy resources: `public/`

The Chithra Akura hub links to the internal syllabus page and learning portal.
The learning portal then links to separate Google Sites resources. Update
those links in `src/app/learning-portal/page.tsx` when a resource moves.

## Contact form

The homepage contact form submits to Web3Forms. Review the Web3Forms
configuration in `src/components/sections/contact.tsx` before deploying or
changing the form destination.

## Deployment

Build the site with `npm run build` and serve it with `npm run start`, or deploy
the repository to a Next.js-compatible host such as Vercel.
