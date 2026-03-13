# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
If a reference image is provided: match layout, spacing, typography, and color exactly.

<!-- > Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design. -->

- If no reference image: design from scratch with high craft (see guardrails below). Freely use stock photos and aim for warmth.
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.


## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: 
<!-->
`https://placehold.co/WIDTHxHEIGHT` -->
use stock images.
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Typography System (locked — do not deviate)
- **Headings:** Playfair Display (serif)
- **Body / UI:** Plus Jakarta Sans (sans-serif)
- **Eyebrows / labels / tags:** Epilogue (sans-serif)
- **Monospace fonts are banned.** Never use Inconsolata, IBM Plex Mono, Courier, or any monospace font anywhere on the site.
- **Minimum font size: 14px.** Nothing smaller, ever — not labels, not captions, not eyebrows.
- Eyebrow / label text style: Epilogue, uppercase, wide letter-spacing, 14px minimum

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** See Typography System above. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Visual Identity Approval Step
Before applying a new or changed visual identity to ANY production page (index.html, Services_prior_chat.html, etc.):
1. Generate `identity-preview.html` in the project root showing: color swatches with hex values, typography scale (display/h2/body/mono), button styles, tags/chips, a sample card, and any decorative motifs.
2. Screenshot it and show it to the user.
3. Wait for explicit approval ("looks good", "apply it", "go ahead") before touching any production files.
4. If the user requests changes, update `identity-preview.html` and re-screenshot. Repeat until approved.
5. Only after approval: apply the identity to production pages.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color


Blue Engine Solutions – 
**Brand Positioning Summary**

Who We Are
We’re a small, smart Salesforce consultancy that fixes broken systems, cleans up technical debt, and makes Salesforce actually work — in a way that makes sense for real people.
We partner closely with nonprofits, growing companies, and mission-driven teams to turn Salesforce from a burden into a powerful, reliable platform that supports real business goals.
We’re thinkers first. Builders second. Collaborators always.

**What We Do**
Fix broken or overbuilt Salesforce orgs
Architect clean, scalable data models
Automate smart workflows and communications
Coach in-house staff and support long-term ownership
Help clients stop overpaying for licenses they don’t need


We don’t just implement. We ask the right questions, zoom out to the big picture, and design systems that stay useful long after we’re gone.

Who We Serve
Growing Businesses
Nonprofits


About half our clients are nonprofits
The rest span retail/consumer goods, real estate, financial services, and healthcare
We’ve also worked with small government contractors, though the market is shifting
Honestly? We don’t care what industry you’re in. We care that you want clarity, partnership, and a system that works.



**What Makes Us Different**

No account managers, no middle layers, no long chains of communication. You work directly with 1–2 senior consultants who actually understand your business and do the work.
We’re Strategic, Not Just Technical
Most consultants push buttons. We ask why. Then we build smarter.
We’re Flexible
Start with a block of hours. Move to a retainer later. We scale with you, not ahead of you.
We’re Transparent
Clear scope. Clear billing. No surprise invoices. No nickel-and-diming.
We Empower Your Team
We don’t hoard knowledge — we teach, document, and create video tutorials your team can use forever.
We Don’t Lock You In
If you’re not happy, we’ll fix it — or you can walk away. No questions, no drama. We earn long-term trust, not long-term contracts.


We’re not trying to trap you — if you’re ever unhappy, we’ll make it right.

**The Vibe**
Calm in the chaos
Practical, curious, thoughtful
Relational, not transactional
Nerdy but human
Strategic and transparent


