# Portfolio Site Template Guide
### Based on sydneyknguyen.com

A note before you use this: I pulled the structure from the site's actual content (text, images, links, page order), then added two homepage screenshots and the site's real CSS on top of that. Section 9 (Visual System) is now built from verified hex codes, font names, and layout math pulled straight from the stylesheet, not a guess. A couple of homepage details in Section 4 were also corrected against the screenshots, since what's rendered doesn't match a text-only read perfectly (noted inline where that happened).

---

## 1. The Core Concept

The whole site is built on one idea: **this isn't a portfolio, it's a desktop**. The homepage title tab literally reads "sydney's desktop." The site opens with a boot-up loading screen and uses folder-style galleries further down the page, both confirmed straight from the page text. The screenshots add a second layer to this: small hand-drawn line-art icons tucked into the page margins (a potted plant, a coffee cup, a cup of pencils, a butterfly), which soften the "OS" framing into something closer to a cozy personal desk than a literal computer interface. The two ideas aren't in conflict, they're the same metaphor at two zoom levels: "desktop" as in operating system (folders, a boot sequence, a status bar) and "desktop" as in the actual physical desk it's named after (plants, coffee, stray pencils).

**Template lesson:** pick one metaphor and let it govern every component. A metaphor without full follow-through (one cute icon and nothing else) reads as decoration. A metaphor followed all the way through, at more than one zoom level, reads as a system.

---

## 2. Site Map

- **Home** (`/`) - single-page scrolling site, the "desktop"
- **Case studies** (4 total, each its own URL):
  - `/bedside-wip`
  - `/voqa`
  - `/iterait`
  - `/room2talk`
- **Other projects** (lighter-weight, linked out to external tools):
  - `/soundbite` (internal page, concept only)
  - Pantry Pop! (external, Netlify)
  - moove (external, Figma deck)
  - Past/Present/Future (external, Figma prototype)
- **Mobile-nav subpages** (these carry the content that lives inline on desktop, split out for mobile menus):
  - `/about-mobile`
  - `/experience-mobile`
  - `/creative-mobile`
  - `/marketing-mobile`

**Template lesson:** the "mobile" pages aren't a separate site, they're the same content sections repackaged as standalone pages so a mobile nav menu can link straight to them instead of forcing a long scroll. If you're building responsive, plan this split early rather than retrofitting it.

---

## 3. Global Components (repeat on every page)

### Identity sidebar
Present on the home page and every case study page:
- Small circular profile photo
- Name (Sydney Nguyen)
- Role line (UX/UI Designer)
- "Navigate" menu: About Me, Experience & Education, Creative, Marketing & Brand
- "Contact" block: email (obfuscated/protected against scraping), LinkedIn (external arrow ↗), Resume PDF (external arrow ↗)

### Marquee ticker (case study pages only)
A single scrolling line at the very top of every case study, repeated twice back to back so it loops seamlessly:
> "always creating · drinking a matcha · learning new ai skills · creating a figma prototype · planning my next 5k run · petting my cat · editing photos in lightroom · hiking a trail"

This is a personality device, not information. It's the same line on every case study, so it functions like a signature/watermark.

### Modal / lightbox
Every enlarged image or gallery view uses the same close pattern: an "✕" button in the corner, plus "click anywhere or press Esc to close" as a written instruction. Consistent across galleries, folders, and image pop-ups.

**Template lesson:** build your lightbox once, reuse it everywhere. Don't build a separate one per gallery type.

---

## 4. Homepage, Element by Element (in scroll order)

1. **Boot sequence** - a loading screen reading "booting up... booting up" with a small animated icon before the real content appears. Sets the OS metaphor immediately, in the first second.
2. **Top nav bar** - fixed, 60px tall. Left side: a small home icon + "sydney nguyen," then a mail icon and a LinkedIn icon, both circular buttons. Right side: plain text links, "About" and "Resume." No hamburger menu on desktop, just four small elements total.
3. **Center avatar** - not a photo. A simple line-drawn chibi character (black linework on the page's off-white background) with a small question mark floating above her head, a curious/uncertain expression rather than a polished headshot. This is a much lower-commitment identity device than a real photo, and it's more memorable for it.
4. **Hero headline** - a rotating word or phrase ("matcha lover" at the moment of the screenshot) typed out with a visible blinking text cursor at the end, like a live terminal. Underneath it, a fixed subtitle in gray: "designing experiences that help people connect, understand, and feel less alone."
5. **Status pill** - "open to work," lowercase, set in a separate handwritten-style script font, with a small green dot to its left acting as an "online" indicator.
6. **Floating photo tiles** - 8 small square tiles (food shots, event photos, personal snapshots) scattered in an arc above and around the avatar, each tilted a few degrees off-axis like tossed Polaroids. This arc isn't random: the site's CSS defines it with named variables for the avatar's vertical center, a fixed ring radius, and an arc drop distance, so the scatter is calculated geometry, not eyeballed placement.
7. **Custom cursor** - the native browser cursor is switched off site-wide (`cursor: none` forced on every element), replaced with the site's own cursor graphic: a small dot with a four-point sparkle trailing it. Small detail, but it's the kind of polish most portfolio sites skip.
8. **Scroll cue** - "↓ welcome to my world ↓"
9. **Case Studies section** - 4 cards, each with: small category tag chips at the top left (e.g. "AI" / "Software," or "Thesis" / "Web-Game"), a solo/team indicator with a small icon cluster at the top right, the project name in bold, a one-line gray hook underneath, then a large hero image. Hero images carry their own treatment per project: dark phone mockups on a navy background (BedSide), olive-green app mockups (VOQA), a teal-to-orange gradient with a bold headline overlaid directly on the image ("Chaotic outputs become clear, controllable progress." for iterait), or a tilted photo-and-card collage (room2talk). Some hero images carry a small circular crown-badge icon in the bottom-right corner.
10. **Marketing & Brand section** - single card linking out to the mobile subpage, tagged "Photography," "Content Strategy," "Brand"
11. **Other Projects section** - 4 cards for lighter/experimental work, each tagged by type (Concept, Vibe-coded, UX/UI, Speculative Design) with an external or internal arrow
12. **Music player widget** - collapsed by default into a small music-note icon in the bottom right corner. Opens into album art, song title (in Japanese: 悲しい夢), genre tag ("tavc city pop"), track number indicator (1-5), and a progress bar (0:00 to --:--). Runs independently of scrolling, like a real OS media player.
13. **Sticker sheet** - also collapsed by default, into a small paw-print icon next to the music player toggle. Opens into a sheet of stickers the visitor can click to place on the page. Instructions given directly: "click a sticker to place it on your desktop :] · double-click to remove."
14. **Desktop folders** - three folder-style icons that open into image galleries when clicked:
    - "minecraft screenshots" (3 images)
    - "school 🎓" (masters program memories, 9 photos)
    - "cat :3" (Asuna, 5 photos)
    Each folder shows an icon, a label, and a photo count before you open it, exactly like a real file browser.
15. **Experience & Education timeline** - one entry per role, each with: company logo, company name, job title, date range, a 2-4 sentence description, and embedded proof (YouTube embeds, LinkedIn post embeds, Instagram post embeds, or image galleries with carousel arrows). Six roles total: Little Wins Bakehouse, Nora AI, HALIENE, Designer Drains, freelance photography (@visualsbyskn), Alpha Phi Omega.
16. **Testimonials** - 4 direct quotes from photography clients, no attribution photos, just text, followed by an Instagram handle link.
17. **Archive section** - a labeled header ("Archive," with a small butterfly line-icon beside it) introducing 4 category cards: "product design," "marketing & brand," "photo & video," "graphics & art." Each card uses a two-tone heading (first word in plain black, second word tinted a category color: coral for "design," blue for "brand"), a small matching icon in the bottom-right corner (cursor arrow, pencil, camera, paintbrush), and a one-line gray caption underneath the card describing its scope. This is where the tool-tagged photography and art pieces described below live. Scattered in the surrounding whitespace are small hand-drawn icons (a potted plant, a coffee cup, a cup of pencils) that don't do anything, they're purely atmospheric.
18. **Tool-tagged work stacks** - inside the Archive categories, individual pieces are tagged with title, tool(s) used, and year. Example: *"Sunset - Nikon Z7, Lightroom - 2022."* This tiny tagging convention (tool + year, every single time) is doing a lot of work: it reads as a working creative's private catalog, not a curated highlight reel.

---

## 5. Case Study Page Template

All 4 case studies (Bedside, VOQA, iterait, room2talk) follow this exact structure. This is the strongest "template" in the whole site, because it's reused identically across projects with different content dropped in.

1. **Marquee ticker** (see section 3)
2. **Identity sidebar** (see section 3)
3. **Contents jump nav** - anchor links to Context / Research / Process / Final Product / Reflection, so a visitor can skip straight to what they care about
4. **Live/demo link** - a prominent external link near the top ("Try it live ↗" or "Live Demo ↗")
5. **Hero image**
6. **Case study label + title** - "Case Study · [Name]" followed by a full-sentence headline that states the problem and the promise in one line, e.g. *"Designing a card experience that helps Vietnamese American families connect, without forcing the conversation."*
7. **Metadata row** - exactly 4 fields, every time: Role, Context (solo/team, class/thesis), Timeline, Tools. This is a spec sheet, not prose, and it's the fastest way for a recruiter to scan a project in 5 seconds.
8. **Context section** - 2-4 paragraphs establishing the problem, paired with 1-2 photos. Written in plain, direct sentences, not academic UX-speak.
9. **Research section** - this is the most detailed part of the template:
   - Interviewee/participant cards: photo, first name, one-line role or age
   - Pull-quote cards: same photo/name, paired with a short direct quote from that person
   - Stat callouts: large percentage numbers pulled from a survey (e.g. 85.4%, 68.3%, 65.9%), each with a one-line label underneath
   - Numbered principles list (01-04): short design principles derived from the research, stated as one-liners
10. **Process section** - subheaded by phase (e.g. "Designing the cards," "Prototyping with Claude," "Defining the question," "Mapping the flow"), each phase paired with a screenshot and an italicized one-line caption underneath the image
11. **Final Product section** - two layers:
    - A flat feature list: bolded feature name + one-sentence description, no numbering, scannable
    - A numbered walkthrough (01-05, count varies by project): each numbered step has a short bolded headline, one supporting sentence, and a side-by-side pair of short video demos with italic captions
12. **Reflection** - short, punchy closing lines, often italicized, stating what the designer actually learned (not a generic summary). Followed by a "**Continuing:**" line listing 2-3 concrete next steps.
13. **Acknowledgments** - names of professors, classmates, and participants, bolded inline in a thank-you paragraph
14. **CTA repeat** - the live link appears again at the very bottom, not just at the top
15. **More Case Studies footer** - a 4-card grid linking to the other case studies, so no case study page is a dead end

**Template lesson:** the metadata row (point 7) and the numbered walkthrough (point 11) are the two components doing the heaviest lifting for a recruiter skimming quickly. If you copy only two things from this template, copy those two.

---

## 6. About / Experience / Creative / Marketing Subpages

Using `/about-mobile` as the reference:

- Profile photo, name, location pin ("📍 San Jose, CA")
- Bio in 4 short paragraphs, key terms bolded inline (not a wall of text)
- **Interests grid** - 4 items, each with a photo, a one-word title, and a single supporting sentence. One of the four interests is deliberately personal and a little funny (the cat: *"My cat has sat through more design reviews than most classmates"*). That one joke line does more to make the designer memorable than the other three combined.
- **Skills & Tools row** - icon + label chips, no ratings, no bars, no percentages. Just the tool logos in a row (Figma, FigJam, Miro, Illustrator, Photoshop, Procreate, Canva, Lovable, Claude, Runway, CapCut, Final Cut Pro).

**Template lesson:** skip the skill-bar/percentage-rating pattern entirely. A logo row communicates "I use this tool" without inviting anyone to argue about whether you're "80% skilled in Photoshop."

---

## 7. Interaction and Motion Patterns

Every interactive behavior found on the site, listed as a build checklist:

- Boot/loading animation before first paint on the homepage
- A custom cursor (native cursor hidden site-wide, replaced with a dot-and-sparkle graphic that follows the mouse)
- A calculated arc layout (not random scatter) placing floating photo tiles around the hero avatar
- A live-typing effect on the rotating hero headline, cursor bar included
- Scroll-triggered reveal (implied by the "↓ welcome to my world ↓" cue directing the visitor downward)
- Collapsed-by-default widgets (music player, sticker sheet) that expand from small corner icons rather than sitting open on load
- Click-to-place, double-click-to-remove stickers (drag-and-drop-style desktop decoration)
- Click-to-open folders that expand into photo-count-labeled galleries
- Multiple independent carousels with their own arrow controls (Designer Drains gallery, freelance photography gallery, Alpha Phi Omega gallery)
- A persistent, scrolling marquee ticker on case study pages
- Anchor-link jump navigation within long case study pages
- A functioning-looking music player widget (play state, track number, progress bar) as a persistent ambient element
- Consistent modal/lightbox with two ways to close (click-out or Esc), rendered over a blurred scrim
- Video demo pairs embedded directly in the numbered walkthrough steps, not linked out

**Template lesson:** none of these are technically exotic. What makes them feel premium is that every one of them is used consistently and only where it earns its place, not stacked on every section for effect.

---

## 8. Content and Voice Patterns

- Section headers and taglines are almost entirely **lowercase** ("designing experiences that help people connect, understand, and feel less alone," "welcome to my world"). Proper nouns and the case-study body copy switch back to normal sentence case. This is a deliberate two-register system: lowercase for personality/mood copy, normal case for substance.
- Every photography/art piece is tagged with tool + year, without exception. This turns a simple image grid into a running production log.
- Case study headlines are written as full sentences that name the audience and the outcome, not vague titles. Compare *"room2talk"* (the project name alone, meaningless out of context) to the actual on-page headline: *"Designing a card experience that helps Vietnamese American families connect, without forcing the conversation."* The name is the label; the headline is the pitch.
- Reflection sections end on a personal, specific insight, not a generic "this taught me a lot about UX." Example: *"I started this project thinking I needed to create a space for hard conversations. I ended it realizing the job was to create the conditions where hard conversations could happen on their own."*
- One joke or personal aside per major section (the cat line in About, the sticker sheet, the "matcha lover" tag). Never more than one per section, so it reads as personality, not shtick.

---

## 9. Visual System (verified from real CSS + screenshots)

This section is no longer a guess. These values came straight from the site's stylesheet and the two homepage screenshots.

**Color**
- Page background: `#f2f2f0`, a warm off-white/light gray, not pure white. This is the base for the entire site, not just the hero.
- Modal/scrim overlay: `rgba(240, 240, 240, 0.7)` with a `blur(12px)` backdrop filter and a `#E4E4E4` border framing whatever sits inside it. This is what darkens (barely) and blurs the background when a lightbox or folder gallery opens.
- Category accent colors on the Archive cards: coral/pink for "design," blue for "brand," plus matching camera and paintbrush icon tints for "photo & video" and "graphics & art." Only the second word of each two-word heading gets color, the first word stays black.

**Typography**
- Primary font: **Manrope** (a geometric, rounded sans-serif), applied to literally every element on the page through a universal selector. Fallback stack behind it: system UI fonts (`-apple-system`, `Segoe UI`, `Roboto`, `Helvetica`, `Arial`).
- Secondary font: **Mynerve**, a handwritten/script face, layered in only for specific personality touches (the "open to work" pill text is set in it). It falls back to Manrope if it fails to load.
- This two-font system mirrors the two-register copy pattern in Section 8: Manrope for structure and substance, Mynerve for the small handwritten asides.

**Cards and surfaces (glassmorphism)**
Every card-like surface (the Archive category tiles, and likely the modals and folder panels too) uses the same frosted-glass recipe:
- Background: white at 82% opacity
- Backdrop filter: `blur(18px)` plus `saturate(1.6)`, which is what keeps the card looking bright and clean rather than muddy despite the heavy blur
- Border: 1px, white at 75% opacity
- Shadow: a tight, soft shadow (`0 4px 20px` at 6% black) layered under a second, tighter shadow (`0 1px 3px` at 4% black), giving cards a slight lift without a hard drop-shadow edge
- A diagonal light "sheen": a linear gradient running at -45°, white at 22% fading to fully transparent by 65% of the way across, laid over the top-left corner of the card. This is what gives the cards their glossy, top-lit look rather than reading as flat white boxes.

**Layout math**
- Content is capped at `1120px` max-width, with side gutters that scale between `40px` and `88px` depending on viewport width (a `clamp()`, so it's fluid, not a fixed breakpoint jump).
- Homepage sections are each a full `min-height: 100vh` block, laid out as a centered flex column with `9vh` of padding top and bottom. That's why scrolling the homepage feels like moving through discrete full screens rather than one continuous page, each section gets vertically centered inside its own viewport-height block.
- The sticky nav is `60px` tall, and every section that's a jump-link target has `scroll-margin-top` set to that same 60px, so anchor links land cleanly below the nav instead of tucking underneath it.
- The floating photo tiles around the hero avatar are positioned using named variables for the avatar's vertical center, a 100px ring radius, and an ~89.5px arc drop, meaning the "scattered" look is a calculated semicircle, not manual placement of each tile.

**Interaction**
- The native cursor is disabled everywhere (`cursor: none` forced on every element), replaced with a custom cursor graphic, a small dot trailed by a four-point sparkle, visible in the hero screenshot.

**Template lesson:** the glass-card recipe (82% white, blur+saturate, soft double shadow, diagonal sheen) is the single most reusable piece of this system. Copy that one CSS pattern and a huge amount of the site's "expensive" feel comes with it, no custom illustration required.

---

## 10. Reusable Template Checklist

If you're building your own site off this pattern, in order:

1. Pick one governing metaphor (desktop, notebook, gallery wall, whatever fits you) and commit to it in every section, not just the hero.
2. Build one modal/lightbox component and reuse it for every image, gallery, and pop-up.
3. Build one case-study template with a fixed section order (Context, Research, Process, Final Product, Reflection) and a fixed metadata row (Role, Context, Timeline, Tools). Reuse it for every project so a recruiter learns the pattern once and can then skim every project fast.
4. Put a numbered, illustrated walkthrough (not just a feature list) in every case study, since that's what actually shows the product working.
5. Add exactly one small, funny, specific personal detail per major section. Not zero (forgettable), not several (try-hard).
6. Tag creative work with tool + year, consistently, even if it feels repetitive to you while building it.
7. Split heavy sections into their own subpages for mobile navigation rather than relying on one long scroll for every device.
8. Keep interactive flourishes (stickers, music player, draggable elements) limited to the homepage. Case study pages stay focused and text/image-driven, with only the marquee ticker carried over as a light personality touch.

---

## What's Still Unverified

Between the page content, the two screenshots, and the real CSS, most of what mattered is now confirmed rather than guessed: the background color, both font names, the glass-card recipe, the layout math, and the custom cursor. What's still open: exact colors for the category accent tints (I can see coral and blue but don't have their hex values), any hover/transition timing (durations, easing curves), and the full behavior of the sticker sheet and folder galleries once opened (I have the trigger and the instructions, not a screenshot of the open state). If you want those, a screenshot of an open folder gallery or the sticker sheet expanded, plus an Inspect-Element screenshot of one Archive card's computed styles, would close the rest of the gap.
