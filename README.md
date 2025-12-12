# Backend Developer Portfolio

Professional portfolio website built with Next.js 14, TypeScript, and GitHub API integration.

## Features

- 🎨 Dark mode native design with terminal-inspired aesthetics
- 🚀 Dynamic project showcase using GitHub API
- 📱 Fully responsive design
- ⚡ Optimized performance with Next.js 14
- 🎯 SEO optimized

## Tech Stack

- **Framework:** Next.js 14 (App Router)
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
- `components/Contact.tsx`: Contact information and social links

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
