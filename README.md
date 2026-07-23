# Software Developer Portfolio

Professional portfolio website built with Next.js 16, TypeScript, and GitHub API integration.

## Features

- 🎨 Dark mode native design with terminal-inspired aesthetics
- 🚀 Dynamic project showcase using GitHub API
- 📱 Fully responsive design
- ⚡ Optimized performance with Next.js 16
- 🎯 SEO optimized

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules with custom design system
- **API:** GitHub REST API
- **Fonts:** JetBrains Mono, Inter

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portafolio-geomark27
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GITHUB_USERNAME=geomark27
# Optional: For higher rate limits and private repos
GITHUB_TOKEN=your_github_personal_access_token

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### GitHub Integration

Update the GitHub username in `.env.local`:
- `NEXT_PUBLIC_GITHUB_USERNAME`: Your GitHub username for fetching repositories
- `GITHUB_TOKEN` (optional): Personal access token for authenticated requests

### Personal Information

Update the following files with your information:
- `components/Hero.tsx`: Name, title, and tagline
- `components/About.tsx`: Professional background and experience
- `components/Skills.tsx`: Technical skills and expertise
- `lib/config.ts`: Contact information, social links, and footer text

### Admin Panel with Supabase

The project includes a protected `/admin` panel for editing the profile and professional experience.

1. Create a project at [supabase.com](https://supabase.com).
2. Copy the project URL and anon key from **Project Settings → API** into `.env.local`.
3. Open the Supabase **SQL Editor** and run [`supabase/schema.sql`](supabase/schema.sql).
4. Create your administrator account in **Authentication → Users → Add user**.
5. Start the project and open [http://localhost:3000/admin](http://localhost:3000/admin).

The public site uses local CV content as a fallback until Supabase is configured. The database is protected with Row Level Security: public visitors can read published content, while only authenticated users can manage it.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project can be deployed to:
- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your repository
- **AWS Amplify**: Connect your repository
- Any platform supporting Next.js

## Project Structure

```
portafolio-geomark27/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles & design system
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects with GitHub API
│   └── Contact.tsx         # Contact section
├── lib/
│   ├── github.ts           # GitHub API client
│   └── types.ts            # TypeScript types
└── public/                 # Static assets
```

## License

MIT License - feel free to use this template for your own portfolio!
