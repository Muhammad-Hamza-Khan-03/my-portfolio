# Muhammad Hamza Khan - ML Engineer Portfolio

A professional portfolio website showcasing expertise in Generative AI and Multi-Agent Systems.

## Overview

This is a full-stack portfolio website built to present Muhammad Hamza Khan's experience, projects, and skills as an ML Engineer specializing in Generative AI and multi-agent systems. The site features a modern, responsive design with dark mode support and a functional contact form.

## Recent Changes

### December 2025
- Initial portfolio website implementation
- Created responsive single-page application with smooth scroll navigation
- Implemented theme toggle with dark/light mode support
- Added contact form with backend API integration
- Generated AI-powered project showcase images
- Designed professional layout following modern web design principles

## Project Architecture

### Frontend
- **Framework**: React with TypeScript
- **Routing**: Wouter (single-page with smooth scroll navigation)
- **Styling**: Tailwind CSS with Shadcn UI components
- **State Management**: TanStack Query for server state
- **Theme**: Custom theme provider with localStorage persistence

### Backend
- **Server**: Express.js
- **Storage**: In-memory storage (MemStorage)
- **Validation**: Zod schemas for type-safe API contracts
- **API Routes**:
  - `POST /api/contact` - Submit contact form
  - `GET /api/contact/messages` - Retrieve all messages (admin)

### Key Features
1. **Hero Section**: Professional introduction with avatar, credentials, and social links
2. **About Section**: Professional summary with achievement statistics
3. **Experience Timeline**: Hazen.ai work experience with detailed accomplishments
4. **Projects Showcase**: Four major projects with images, tech stacks, and achievements
   - InsightAI Dashboard (featured)
   - Document Summary Generator
   - Blind Navigation System
   - E-Commerce Churn Prediction
5. **Skills Matrix**: Categorized technical skills display
6. **Education**: FAST-NUCES degree with relevant coursework
7. **Contact Form**: Functional form with API integration and validation
8. **Theme Toggle**: Persistent dark/light mode switching

## File Structure

```
client/
  src/
    components/
      Navigation.tsx - Fixed navigation with smooth scroll
      HeroSection.tsx - Main hero with avatar and introduction
      AboutSection.tsx - Professional summary and stats
      ExperienceSection.tsx - Work experience timeline
      ProjectsSection.tsx - Project cards with images
      SkillsSection.tsx - Categorized skills display
      EducationSection.tsx - Education credentials
      ContactSection.tsx - Contact form with API integration
      Footer.tsx - Footer with links and social media
      ThemeProvider.tsx - Theme context provider
      ThemeToggle.tsx - Dark/light mode toggle
    pages/
      Home.tsx - Main page assembling all sections
    lib/
      queryClient.ts - TanStack Query configuration
shared/
  schema.ts - Shared TypeScript types and Zod schemas
server/
  storage.ts - In-memory storage implementation
  routes.ts - API route definitions
```

## Design Guidelines

The portfolio follows a professional, technical aesthetic inspired by Linear, Vercel, and GitHub:
- **Typography**: Inter (body) and Space Grotesk (headings)
- **Color Scheme**: Blue primary with gradient accents
- **Layout**: Max-width containers with consistent spacing
- **Interactions**: Subtle hover effects and smooth transitions
- **Accessibility**: WCAG AA compliant with proper focus states

## Contact Information

- **Email**: hamzakhan102003@gmail.com
- **Phone**: +92 335 1685578
- **Location**: Lahore, Pakistan
- **GitHub**: [Profile link to be added]
- **LinkedIn**: [Profile link to be added]

## Development

The application runs on port 5000 with hot module replacement enabled. The workflow "Start application" runs `npm run dev` which starts both the Express backend and Vite frontend development server.

## Future Enhancements

Potential additions for future iterations:
- Add actual GitHub and LinkedIn profile links
- Implement email notifications for contact form submissions
- Add blog section for AI/ML articles
- Create admin dashboard to view contact messages
- Add downloadable PDF resume
- Integrate GitHub API to showcase live repository stats
- Add project filtering by technology or domain
- Implement analytics to track visitor engagement
