<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Agent Rules

## Project context

This project is a premium landing page / SaaS-style website.

The visual goal is to create modern, high-conversion interfaces inspired by premium AI, SaaS, fintech and technology websites.

The design direction should include:

- Dark UI
- Glassmorphism
- Glow effects
- Radial gradients
- Green, teal and cyan accents
- Clean spacing
- Large typography
- Premium buttons
- Responsive sections
- Strong conversion hierarchy

## Required stack

Use the current project setup, but prefer this stack when creating or editing frontend code:

- Next.js with App Router
- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- Framer Motion
- Lucide React
- clsx
- tailwind-merge

Before using a library, check whether it is already installed in `package.json`.

If a required library is missing, ask to install it or provide the exact installation command.

## Next.js rules

This project may use a newer version of Next.js with breaking changes.

Before changing routing, layouts, server components, client components, metadata, images, fonts or config files:

1. Read the relevant local Next.js docs in `node_modules/next/dist/docs/`.
2. Follow the current project's existing conventions.
3. Do not assume older Next.js APIs are valid.
4. Avoid deprecated APIs.
5. Prefer App Router patterns unless the project clearly uses another structure.

## UI/UX rules

When creating interfaces:

- Prioritize premium visual quality.
- Use strong hierarchy: headline, subheadline, CTA, proof/benefits.
- Use generous spacing.
- Use clean and readable typography.
- Use responsive layouts from mobile to desktop.
- Avoid generic landing page design.
- Avoid visual clutter.
- Avoid too much text inside the hero.
- Keep sections focused on one goal.
- Use components instead of repeating markup.

## Visual style rules

Use Tailwind to create:

- Deep dark backgrounds
- Radial gradients
- Soft glow layers
- Transparent borders
- Backdrop blur
- Subtle shadows
- Rounded cards
- Premium hover states
- Smooth transitions

Recommended visual classes and patterns:

- `bg-black`
- `bg-zinc-950`
- `bg-white/5`
- `border-white/10`
- `backdrop-blur-xl`
- `shadow-2xl`
- `rounded-2xl`
- `rounded-full`
- `text-transparent`
- `bg-clip-text`
- `bg-gradient-to-r`
- `blur-3xl`
- `overflow-hidden`
- `relative`
- `absolute`
- `inset-0`

## Animation rules

Use Framer Motion only when it improves the interface.

Good animation use cases:

- Hero content fade-in
- Cards entering subtly
- CTA hover/tap animation
- Background glow movement
- Section reveal on scroll

Avoid excessive animations.

Animations should feel premium, subtle and fast.

## Component structure


