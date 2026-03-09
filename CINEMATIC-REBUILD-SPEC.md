# Front Porch America — Cinematic Rebuild Spec

## Reference
Study the design language of https://wearebrand.io:
- Full-viewport sections (100vh each)
- Massive bold lowercase typography overlaid on imagery
- Dark cinematic mood with large-scale background images
- Smooth vertical scroll-snap between sections
- Up/down section navigation arrows
- Minimal UI — logo top-left, minimal nav
- Film grain texture overlay
- Clean grid footer

## Brand
- **Show:** Front Porch America
- **Host:** Rick White
- **Palette:**
  - Background: `#0a0a0a` (near-black, richer than current #1a1a1a)
  - Porch Red: `#c41e3a`
  - Porch Blue: `#0a3161`
  - Cream: `#f5f5dc`
  - Accent glow: rgba(196,30,58,0.4) for red glow effects
- **Typography:**
  - Headlines: Google Font `Playfair Display` (serif, dramatic)
  - Body: Google Font `Inter` (clean sans-serif)
  - Headlines should be LARGE (clamp(3rem, 8vw, 7rem)) and bold
- **Logo:** `public/logo-temp.jpg` — use next/image, circular badge. Transparent version coming later.

## Architecture

### Tech Stack
- Keep Next.js 14.2.0 (don't upgrade — avoid breaking changes mid-build)
- Keep existing deps: gsap, tailwindcss, gray-matter
- ADD: `gsap` ScrollTrigger plugin (it's included in gsap, just import it)
- ADD: `@gsap/react` for useGSAP hook (cleaner React integration)
- ADD: Google Fonts via next/font/google (Playfair Display + Inter)
- Keep Tailwind but update the config with richer palette
- Keep CommonJS config files (next.config.js, postcss.config.js) — do NOT convert to ESM

### File Structure (modify in place, don't create new directories unless needed)
```
src/
  app/
    page.tsx          — Section-based layout with scroll snap
    layout.tsx        — Updated fonts, metadata
    globals.css       — Complete rewrite for cinematic style
  components/
    Hero.tsx          — Full-viewport hero, big text, background image
    Episodes.tsx      — Full-viewport featured episodes showcase (rename from FeaturedEpisodes)
    About.tsx         — Full-viewport about section (rename from AboutTeaser)
    Community.tsx     — Full-viewport newsletter/community (rename from CommunityTeaser)
    Footer.tsx        — Clean grid footer (wearebrand style)
    Navbar.tsx        — Minimal: logo left, hamburger or minimal links right
    SectionNav.tsx    — NEW: Fixed up/down arrows for section navigation
    ScrollProvider.tsx — NEW: Client wrapper for scroll-snap + section tracking
  content/
    site.json         — Keep, update copy if needed
    featured-episodes.json — Keep as-is
```

## Sections (each is 100vh, scroll-snap-align: start)

### 1. HERO (100vh)
- Background: Use a high-quality Unsplash/Pexels image URL of an American porch at dusk/sunset
  - For now, use `https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80` (American home at dusk)
  - Apply dark overlay gradient (70-80% opacity) so text is readable
- Logo in top-left area (circular, ~80px)
- Massive text center-left:
  ```
  front porch
  america.
  ```
  (lowercase like wearebrand, Playfair Display, white/cream, clamp(3rem, 8vw, 7rem))
- Smaller tagline text to the right or below: "real conversations from the american front porch"
- Subtle description text: "Join Rick White for honest discussions about faith, family, freedom, and the things that matter most."
- Two CTAs at bottom: "Watch on YouTube" (solid red) + "Join the Newsletter" (outline)
- Film grain overlay (existing CSS technique, keep it)
- NO SVG badge. NO hand-drawn microphone. Use the actual logo image.

### 2. EPISODES (100vh)
- Dark background
- Left side: Big text "featured episodes." (same massive typography style)
- Right side or below: 2-3 episode cards in a vertical stack or horizontal scroll
- Episode cards: dark glass card, episode number, title, description, play icon
- On hover: subtle red border glow + scale
- Keep data from featured-episodes.json

### 3. ABOUT (100vh)
- Background: Another atmospheric image (American landscape, sunset, rural)
  - Use `https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80` (golden field sunset)
  - Dark overlay
- Big text: "about the show."
- Body text from site.json about section
- Clean, centered layout
- Maybe a subtle stat bar: "EST. 2020" | "100+ Episodes" | "YouTube"

### 4. COMMUNITY / NEWSLETTER (100vh)
- Dark solid background
- Big text: "join the porch."
- Email signup form (keep existing state logic)
- "1,000+ Americans already on the porch" social proof
- Success state animation

### 5. FOOTER (NOT 100vh — natural height)
- Clean 3-column grid like wearebrand:
  - Col 1: Show info (Front Porch America, hosted by Rick White, est. 2020)
  - Col 2: Links (YouTube, Episodes, About, Newsletter)
  - Col 3: Social (YouTube, X/Twitter, Instagram icons)
- Bottom: copyright + "Designed by Connect Infinitely" (Brad's company)
- Newsletter signup at bottom (Name + Email + Subscribe button, like wearebrand)
- Separator line above footer

## Navigation

### Navbar (minimal)
- Fixed, transparent on load, solid dark on scroll
- Logo (image) top-left
- Right side: Just 3-4 text links OR a hamburger menu icon
- z-index above everything

### Section Navigation (SectionNav)
- Fixed right-center or bottom-center
- Up arrow + Down arrow
- Shows current section indicator (dots or numbers)
- Clicking arrows smooth-scrolls to prev/next section
- Respects prefers-reduced-motion

## Animations & Interactions

### GSAP ScrollTrigger
- Each section's headline: fade-in-up on scroll enter
- Parallax effect on background images (slight vertical movement)
- Episode cards: stagger reveal on scroll
- Stats: count-up animation on scroll enter

### Micro-interactions
- CTA buttons: hover glow effect (box-shadow with red)
- Nav links: underline slide-in on hover
- Section transitions: smooth scroll-snap behavior

### Performance
- All images via next/Image with priority on hero
- Respect prefers-reduced-motion (disable GSAP animations)
- Lazy load non-hero images
- Film grain as CSS (not canvas/JS)

## CSS Strategy (globals.css)
- CSS custom properties for all colors
- Scroll-snap on the main container: `scroll-snap-type: y mandatory`
- Each section: `scroll-snap-align: start; min-height: 100vh`
- Background images: `object-fit: cover` with overlay gradients
- Glassmorphism utility (refined)
- Film grain overlay (keep existing, tweak opacity)
- Text glow utilities

## Critical Rules
1. **DO NOT** convert config files to ESM (.mjs). Keep .js with module.exports.
2. **DO NOT** add `"type": "module"` to package.json.
3. **DO NOT** upgrade Next.js or React versions.
4. Host name is "Rick White" (not "Rickk" — watch for typos).
5. Use `npm install` (not yarn, not bun, not pnpm).
6. All new packages: `npm install <package>` then commit package.json and package-lock.json.
7. Background images: use direct Unsplash URLs with `?w=1920&q=80` for now (will be replaced with real photos later).
8. The YouTube URL is: `https://www.youtube.com/@FRONTPORCHAMERICA-g7b`
9. **Test the build**: Run `npm run build` before finishing. Fix any errors.
10. Commit all changes with a descriptive message.

## What Success Looks Like
When someone loads this site, it should feel like a premium cinematic experience:
- Dramatic dark background with atmospheric imagery
- Bold, confident typography that dominates the viewport
- Smooth, intentional scroll behavior between full-screen sections
- The feeling of a high-end production studio, not a template
- Like wearebrand.io but themed for an American patriotic podcast
