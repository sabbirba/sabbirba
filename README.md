# Sabbir Bin Abbas - Portfolio

This is the personal portfolio website of Sabbir Bin Abbas, a proficient Software Engineer and Full Stack Developer from Bangladesh. The site showcases skills, services, experiences, projects, and contact information.

## Features

- **Modern Tech Stack:** Built with [Next.js](https://nextjs.org/), React, and TypeScript.
- **Responsive Design:** Fully responsive and mobile-friendly UI.
- **Animated UI:** Smooth animations using Framer Motion.
- **Tailwind CSS:** Customizable and utility-first styling.
- **Sentry Integration:** Error monitoring with Sentry.
- **SEO Optimized:** Includes sitemap and robots.txt.
- **Social Links:** Connect with Sabbir on GitHub, LinkedIn, Telegram, and Instagram.
- **Project Showcase:** Highlights recent works and skills.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/sabbirba10/portfolio-sabbirba10.git
   cd portfolio-sabbirba10
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   - Copy `.env.example` to `.env.local` and fill in the required values (see `src/constants/config.ts` for references).

4. **Run the development server:**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```sh
npm run build
npm run start
```

### Deploy

- The project is configured for static export (`next export`) and can be deployed to platforms like Vercel, GitHub Pages, or Firebase Hosting.
- See [firebase.json](firebase.json) for Firebase Hosting setup.

## Project Structure

```
src/
  app/                # Next.js app directory
  components/         # Reusable UI components
  constants/          # App-wide constants
  data/               # Static data (skills, projects, etc.)
  hooks/              # Custom React hooks
  types/              # TypeScript types/interfaces
  utils/              # Utility functions
public/
  skills/             # Skill icons and images
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run push` - Commit and push changes to master

## License

This project is licensed under the MIT License.

---

**Contact:**  
[Sabbir Bin Abbas](https://www.github.com/Sabbirba10)
