# Design Guidelines: ML Engineer Portfolio - Muhammad Hamza Khan

## Design Approach

**Selected Approach:** Reference-Based with inspiration from Linear, Vercel, and GitHub
**Justification:** Technical portfolios require a balance of professionalism and visual sophistication to demonstrate both engineering excellence and design sensibility. This approach showcases technical credibility while creating memorable first impressions for recruiters and potential clients.

**Core Design Principles:**
1. Technical Sophistication: Clean, modern aesthetic that reflects AI/ML expertise
2. Content Hierarchy: Clear visual prioritization from hero to projects to skills
3. Interactive Engagement: Subtle interactions that demonstrate technical capability
4. Professional Authority: Polished presentation that builds trust and credibility

---

## Typography System

**Font Families:**
- Primary: Inter (Google Fonts) - for all body text, navigation, and UI elements
- Display: Space Grotesk (Google Fonts) - for headings, hero text, and section titles

**Type Scale:**
- Hero Headline: text-6xl md:text-7xl lg:text-8xl, font-bold
- Section Headings: text-4xl md:text-5xl, font-bold
- Subsection Headings: text-2xl md:text-3xl, font-semibold
- Project Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal
- Small Text/Captions: text-sm, font-medium
- Code/Technical: font-mono, text-sm

**Line Heights:**
- Headlines: leading-tight (1.1)
- Headings: leading-snug (1.375)
- Body: leading-relaxed (1.625)

---

## Layout System

**Spacing Primitives:**
Use Tailwind units: 2, 4, 6, 8, 12, 16, 20, 24, 32
- Micro spacing (component internal): p-2, p-4, gap-2
- Component spacing: p-6, p-8, gap-6
- Section padding: py-16 md:py-24 lg:py-32
- Container gaps: gap-8, gap-12, gap-16

**Container Strategy:**
- Full-width sections: w-full with max-w-7xl mx-auto px-6 md:px-8
- Content sections: max-w-6xl mx-auto
- Text-focused content: max-w-4xl mx-auto
- Narrow content (forms): max-w-2xl mx-auto

**Grid System:**
- Hero: Single column, centered
- Projects: grid-cols-1 md:grid-cols-2 gap-8
- Skills: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
- Timeline: Single column with side indicators
- Contact: 2-column split on desktop (md:grid-cols-2)

---

## Component Library

### Navigation
- Fixed header with backdrop blur effect
- Logo/Name on left, navigation links center-right
- CTA button (GitHub/LinkedIn) on far right
- Mobile: Hamburger menu with slide-in drawer
- Height: h-16 md:h-20
- Spacing: px-6 md:px-8

### Hero Section
**Layout:** Full viewport (min-h-screen) with centered content
**Structure:**
- Professional headshot (circular, w-32 h-32 md:w-40 md:h-40) centered above text
- Main headline: "ML Engineer" with gradient text effect on "Generative AI"
- Subheadline: Brief professional summary (2-3 lines)
- Dual CTA buttons: "View Projects" (primary) + "Download CV" (secondary)
- Social links row: GitHub, LinkedIn icons (w-6 h-6)
- Spacing: gap-6 between elements, mb-8 for CTAs

### Professional Summary
**Layout:** max-w-4xl centered
- Icon badge: graduation cap icon with "FAST-NUCES Graduate"
- Summary text: 2-3 paragraphs highlighting specialization
- Stats row: 3-column grid showing "4+ Projects", "Multi-Agent Systems", "97% Model Accuracy"
- Each stat: Large number (text-4xl) above label (text-sm)

### Work Experience Timeline
**Layout:** Vertical timeline with left-aligned content
- Company logo placeholder (w-12 h-12, rounded)
- Role title (text-2xl), company name (text-lg), dates (text-sm)
- Bullet points with custom markers (chevron or dot icons)
- Connecting line between experiences (border-l-2)
- Spacing: mb-12 between experiences

### Project Showcase
**Card Design:**
- Featured image placeholder at top (aspect-video, rounded-t-lg)
- Project title (text-xl font-semibold)
- Tech stack badges (flex flex-wrap gap-2, pill-shaped with rounded-full)
- Description paragraph (3-4 lines, text-sm)
- Key achievements: Bullet list with check icons
- Action links: "View Details" + GitHub icon link
- Card spacing: p-6, gap-4
- Border treatment: border with subtle shadow

**Project Order:**
1. InsightAI Dashboard (Featured - larger card)
2. Document Summary Generator
3. Blind Navigation System
4. E-Commerce Churn Prediction

### Live Demo Section
**Layout:** Full-width with max-w-5xl centered
- Section intro: "Experience AI in Action"
- Demo container: Terminal-style interface showing multi-agent system or text generation
- Input area: Textarea with "Try it yourself" prompt
- Output display: Markdown renderer with syntax highlighting
- Loading states: Animated skeleton screens
- Demo card: p-8, rounded-lg, border treatment

### Skills Matrix
**Organization:** 4 categories in grid
1. **Languages:** C++, Python, JavaScript, TypeScript
2. **AI/ML Frameworks:** TensorFlow, PyTorch, LangChain, LlamaIndex, LangGraph
3. **Tools & Infrastructure:** Docker, FastAPI, Apache Airflow, MLFlow
4. **Databases & Storage:** ChromaDB, MongoDB, SQL

**Display:** 
- Category heading (text-lg font-semibold)
- Skills as pill badges (flex flex-wrap gap-2)
- Each badge: px-4 py-2, rounded-full, text-sm

### Education Section
**Layout:** Card with institution branding
- University name + logo placeholder
- Degree: "Bachelor's in Data Science"
- Duration: "Aug 2021 - Jun 2025"
- Relevant coursework: Horizontal scrolling pills or grid
- Spacing: p-8

### Contact Section
**Layout:** 2-column grid (md:grid-cols-2)
- Left: Contact information + social links
  - Email with icon
  - Phone with icon
  - Location with icon
  - Social media buttons (large, prominent)
- Right: Contact form
  - Name input
  - Email input
  - Message textarea
  - Submit button (full width)
- Form spacing: gap-4, inputs h-12

### Footer
**Content:**
- Top row: Quick links to sections (Projects, Skills, Experience)
- Middle row: Social links (GitHub, LinkedIn) with labels
- Bottom row: Copyright notice, "Built with AI" tagline
- Layout: py-12, 3-row stacked on mobile, horizontal on desktop

---

## Animations

**Hero Entrance:**
- Fade-in and slide-up for headline (delay: 100ms)
- Fade-in for subtext (delay: 200ms)
- Fade-in for CTAs (delay: 300ms)

**Scroll Interactions:**
- Projects: Fade-in as they enter viewport
- Skills badges: Stagger animation (each badge appears sequentially)

**Micro-interactions:**
- Card hover: Subtle lift (transform translateY(-4px))
- Button hover: Slight scale (scale-105)
- Links: Underline animation on hover

**Performance:** Use CSS transforms and opacity only, duration-300 for all transitions

---

## Images

**Hero Background:**
- Abstract geometric pattern or gradient mesh (full viewport)
- Low opacity overlay to ensure text readability
- Alternative: Subtle particle/dot grid animation

**Professional Headshot:**
- Circular frame, centered in hero
- Size: 160px diameter on desktop, 128px on mobile
- Subtle border treatment

**Project Thumbnails:**
- Aspect ratio: 16:9
- Screenshots of actual projects or representative AI/ML visualizations
- InsightAI: Dashboard screenshot
- Document Summary: Document with highlights
- Blind Navigation: Computer vision detection visualization
- Churn Prediction: Graph/chart visualization

**No large background hero image** - instead using geometric patterns/gradients for modern tech aesthetic

---

## Accessibility

**Focus States:**
- All interactive elements: visible focus ring (ring-2 ring-offset-2)
- Keyboard navigation: Logical tab order throughout

**Form Inputs:**
- Consistent height: h-12
- Padding: px-4
- Border treatment: border-2
- Label positioning: above input (mb-2)
- Error states: border treatment change + error message below

**Contrast:**
- All text meets WCAG AA standards
- Interactive elements clearly distinguishable
- Icons paired with text labels where critical

---

## Responsive Behavior

**Breakpoints:**
- Mobile: base (< 768px)
- Tablet: md (768px - 1024px)
- Desktop: lg (≥ 1024px)

**Mobile Adaptations:**
- Navigation: Hamburger menu
- Hero: Stack vertically, reduce font sizes
- Projects: Single column
- Skills: 2 columns instead of 4
- Timeline: Simplified with no connecting line
- Contact: Stack form and info vertically

**Touch Targets:**
- Minimum 44px × 44px for all interactive elements on mobile

---

This portfolio design balances technical credibility with visual sophistication, creating a memorable experience that showcases Muhammad's expertise in generative AI and multi-agent systems while maintaining professional polish throughout.