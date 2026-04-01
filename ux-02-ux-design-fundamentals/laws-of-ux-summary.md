# Laws of UX - Study Notes

This document summarizes four UX principles from Laws of UX:
- Aesthetic-Usability Effect
- Choice Overload
- Hick's Law
- Occam's Razor

## 1) Aesthetic-Usability Effect

### Core idea
People often perceive visually pleasing interfaces as easier to use, even when actual usability is unchanged.

### Why it matters
A polished visual design creates trust and positive emotion. That emotional response can increase tolerance for minor friction.

### Practical implications
- Use visual hierarchy and spacing to make flows feel understandable.
- Invest in typography, color consistency, and component quality.
- Do not rely on beauty alone: visual appeal can hide real usability defects during testing.

### Example
A clean checkout UI may be judged "easy" at first glance, even if error messages are unclear. Users may forgive this initially, but task failure still harms outcomes.

## 2) Choice Overload

### Core idea
Too many options can overwhelm users and reduce decision quality and satisfaction.

### Why it matters
When users face large sets of alternatives, cognitive effort increases and decisions are delayed or avoided.

### Practical implications
- Reduce visible choices at key moments.
- Highlight recommended options or defaults.
- Provide filtering and search early.
- Enable side-by-side comparison only where it helps (for example pricing tiers).

### Example
An e-commerce page with hundreds of products and no filters causes abandonment. A featured set plus category filters improves decision speed.

## 3) Hick's Law

### Core idea
Decision time increases as the number and complexity of choices increase.

### Why it matters
If response speed is important, reducing or structuring options is essential.

### Practical implications
- Keep critical actions limited and obvious.
- Break complex tasks into smaller steps.
- Use progressive disclosure and progressive onboarding.
- Surface the most likely action first, while preserving access to advanced options.

### Example
A first-time onboarding flow that introduces one capability at a time feels easier than showing every feature immediately.

## 4) Occam's Razor

### Core idea
When multiple solutions work, prefer the one with fewer assumptions and lower complexity.

### Why it matters
Unnecessary complexity increases maintenance cost, learning effort, and failure points.

### Practical implications
- Remove non-essential elements before adding new ones.
- Favor simple interaction patterns users already understand.
- Treat "done" as the point where no further removals hurt function.

### Example
Instead of building a custom multi-step preference wizard, start with sensible defaults plus one settings screen. Expand only when evidence requires it.

## How these four laws work together

- Aesthetic-Usability Effect helps first impression and trust.
- Choice Overload and Hick's Law guide decision architecture.
- Occam's Razor keeps the system simple and focused.

A strong UX balances emotional appeal with reduced cognitive load and minimal unnecessary complexity.

## Quick design checklist

- Is the interface visually coherent and trustworthy?
- Are users seeing only the options needed right now?
- Are high-frequency decisions fast to make?
- Can any step, option, or element be removed without harming the goal?

## Sources

- https://lawsofux.com/aesthetic-usability-effect/
- https://lawsofux.com/choice-overload/
- https://lawsofux.com/hicks-law/
- https://lawsofux.com/occams-razor/
