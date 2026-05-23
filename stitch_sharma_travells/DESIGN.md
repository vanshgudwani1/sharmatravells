---
name: Sharma Travel Agents
colors:
  surface: '#f7f9ff'
  surface-dim: '#cadcf2'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4ff'
  surface-container: '#e4efff'
  surface-container-high: '#d9eaff'
  surface-container-highest: '#d2e4fb'
  on-surface: '#0b1d2d'
  on-surface-variant: '#3f4850'
  inverse-surface: '#213243'
  inverse-on-surface: '#e9f1ff'
  outline: '#6f7881'
  outline-variant: '#bec8d2'
  surface-tint: '#006493'
  primary: '#00628f'
  on-primary: '#ffffff'
  primary-container: '#007cb4'
  on-primary-container: '#fcfcff'
  inverse-primary: '#8ccdff'
  secondary: '#8a5100'
  on-secondary: '#ffffff'
  secondary-container: '#fc9910'
  on-secondary-container: '#643900'
  tertiary: '#006d2f'
  on-tertiary: '#ffffff'
  tertiary-container: '#00a74c'
  on-tertiary-container: '#003211'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cae6ff'
  primary-fixed-dim: '#8ccdff'
  on-primary-fixed: '#001e2f'
  on-primary-fixed-variant: '#004b70'
  secondary-fixed: '#ffdcbd'
  secondary-fixed-dim: '#ffb86e'
  on-secondary-fixed: '#2c1600'
  on-secondary-fixed-variant: '#693c00'
  tertiary-fixed: '#66ff8e'
  tertiary-fixed-dim: '#3de273'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005322'
  background: '#f7f9ff'
  on-background: '#0b1d2d'
  surface-variant: '#d2e4fb'
typography:
  display-lg:
    fontFamily: Work Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-lg:
    fontFamily: Work Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Work Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Work Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-x: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 80px
---

## Brand & Style
The design system for Sharma Travel Agents is built on a foundation of **Corporate / Modern** reliability and travel-focused utility. It is designed to evoke a sense of safety, professionalism, and ease of use for corporate clients, families, and tour groups seeking premium transportation.

The visual style prioritizes high-legibility typography and high-quality photography to showcase the fleet. It employs a clean, information-dense layout that mirrors the efficiency of professional logistics. Key characteristics include a structured grid, balanced whitespace to prevent cognitive overload during vehicle selection, and clear call-to-action pathways for booking and inquiries.

## Colors
The palette is centered around a trustworthy **Sky Blue** (Primary), signifying reliability and the open road. **Safety Orange** (Secondary) is used strategically for high-priority conversion points like lead forms and "Submit" buttons to draw immediate attention.

**Action Green** (Tertiary) is reserved specifically for communication-based actions, such as WhatsApp inquiries, leveraging global color associations for messaging. The neutral palette uses a **Deep Navy** for text and headers to maintain a professional, corporate tone, contrasting against a light gray and white background system that creates a clean, airy feel.

## Typography
The typography system uses **Work Sans** for headings and labels to provide a professional, grounded, and versatile feel. Its geometric clarity ensures that vehicle names and specifications are easily scannable.

**Be Vietnam Pro** is used for body copy and descriptions, offering a warm and approachable contemporary feel that balances the corporate nature of the headings. For mobile devices, display and large headline sizes scale down to prevent text wrapping issues, while body text remains at 16px to ensure maximum legibility for users on the move.

## Layout & Spacing
The design system employs a **Fixed Grid** model on desktop to maintain a structured, organized catalog of vehicles, centering the content with a max-width of 1280px. A 12-column grid is used for the vehicle gallery, typically displaying in a 3-column layout on desktop, 2-column on tablet, and 1-column on mobile.

Vertical rhythm is maintained through standardized "stack" units: 8px for internal component elements (like icon + label), 16px for card content groups, and 80px for major section breaks. Gutters are fixed at 24px to provide ample breathing room between vehicle cards, ensuring the high-quality imagery remains the focal point.

## Elevation & Depth
This design system uses a **Low-contrast outline** and **Tonal layer** approach. Depth is conveyed primarily through subtle background shifts (white surfaces on very light gray backgrounds) rather than heavy shadows.

Small, crisp shadows (4px blur, 10% opacity) are used only on interactive cards upon hover to provide tactile feedback. Lead capture forms and call-to-action blocks use a slight elevation or a high-contrast background color to separate them from the general content flow, ensuring the booking process remains high in the visual hierarchy.

## Shapes
A **Soft** shape language is applied throughout the system. A base radius of 0.25rem (4px) is used for input fields and small buttons, maintaining a professional and precise look. 

Larger containers, such as vehicle cards and the primary booking form, use a "rounded-lg" setting of 0.5rem (8px). This subtle rounding softens the industrial nature of transport imagery while maintaining a clean, structured appearance that aligns with the corporate brand identity.

## Components
- **Buttons:** Primary buttons are solid Sky Blue with white text. Secondary buttons (WhatsApp) are Action Green. CTA buttons in forms are Safety Orange. All buttons use semi-bold Work Sans text.
- **Vehicle Cards:** These feature a top-aligned image, followed by the vehicle title in Headline-MD. Below the title, a bulleted list of key specs (AC, Seating) is shown, followed by a row of utility icons (Music, GPS, etc.).
- **Input Fields:** Clean, white backgrounds with a 1px light gray border. Focus states use a 2px Sky Blue outline.
- **Chips/Badges:** Used for "Best Seller" or "Luxury" tags, these use small, all-caps labels with high-contrast background tints.
- **Iconography:** Linear, thin-stroke icons are used for vehicle features to maintain a modern, airy aesthetic. Icons are paired with Label-MD text.
- **Lead Form:** A high-visibility block with a contrasting background, using stacked inputs and a prominent Safety Orange "Submit" button.