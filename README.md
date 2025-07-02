# TMDB API TS Next.js App

This project is a [Next.js](https://nextjs.org) application that provides a documentation and demo interface for the `@lorenzopant/tmdb` TypeScript wrapper. It features interactive docs and code examples, all styled with Tailwind CSS and optimized for developer experience.

This documentation project is built starting from the [Aria Docs](https://ariadocs.vercel.app/) template, which provides a solid foundation for building documentation sites with MDX support.

- Aria Docs repo: [https://github.com/nisabmohd/Aria-Docs](https://github.com/nisabmohd/Aria-Docs)

## Features

- **Interactive Documentation**: Browse and search TMDB API endpoints with live code examples.
- **MDX Support**: Write documentation and blog posts in MDX with custom React components.
- **Theme Toggle**: Light/dark mode support.
- **Beautiful UI**: Built with Tailwind CSS and custom components.

## Getting Started

1. **Install dependencies:**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   # or
   bun install
   ```

2. **Run the development server:**

   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

3. **Open your browser:**

   Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- `app/` — Next.js app directory (routing, layouts, pages)
- `components/` — UI and MDX components
- `contents/` — MDX docs and blog content
- `lib/` — Utility functions and API wrappers
- `styles/` — Tailwind and global CSS

## Custom Components

- `InstallCommand` — Interactive package manager command selector
- `Note`, `Files`, etc. — Used in MDX for rich documentation

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TMDB API Docs](https://developer.themoviedb.org/docs)
- [@lorenzopant/tmdb GitHub](https://github.com/lorenzopant/tmdb)
- [Aria Docs GitHub](https://github.com/nisabmohd/Aria-Docs)

## License

This project is licensed under the MIT License.
