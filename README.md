# Madinet Masr — Exclusive Portfolio Landing Page
**By properties-z.com**

An ultra-luxurious, modern, mobile-responsive real estate landing page showcasing the premier development portfolio of **Madinet Masr**.

---

## 🏛️ Architectural Layout & Navigation Features

- **Dedicated Individual Project Sections**:
  - **Talala**: Contemporary Urban Living (5.2% Down Payment | 15 Years Installments | Starting from 4.5M EGP)
  - **Sarai**: The Heart of New Cairo (1.5% Down Payment | 12 Years Backloaded | Starting from 4M EGP)
  - **The Butterfly**: Tranquility and Elegance (1.5% Down Payment | 12 Years Backloaded | Delivery: 4 Years | Starting from 4M EGP)
  - **Taj City – Origami**: Masterfully Crafted Homes (5% Down Payment | 10 Years Installments | Starting from 10.4M EGP)
- **Zero Gold Policy**: Strictly adheres to the serene **Calm Luxury** palette (pure whites, alabasters, platinum greys `#F8F9FA` / `#F1F3F5`, deep charcoals `#1A202C` / `#2D3748`, frosted glass `rgba(255,255,255,0.92)`). Absolutely no gold, bronze, brass, or yellow.
- **Top: 0 Viewport Start**: No sticky or fixed header strip. The Hero section starts directly at `top: 0`.
- **Global Sub-Branding**: Features `BY PROPERTIES-Z.COM` prominently beneath official logos in both Hero and Footer sections.
- **Strict Capital 'M' Price Formatting**: Rendered strictly using clean `M` formatting (e.g., `4M EGP`, `4.5M EGP`, `10.4M EGP`, `17.7M EGP`, `18.2M EGP`, `19.7M EGP`, `21M EGP`).
- **Interactive Visual Gallery Lightbox**: Full-screen modal gallery for each development with captions, keyboard navigation, and thumbnail previews.
- **100% Mobile-First Responsive Design**: Single-column collapse with thumb-friendly controls (50px+ hit areas).

---

## 💬 WhatsApp & Conversion Integration

- **Floating WhatsApp Button**: Round green icon-only button (`#25D366`) linking directly to `+201033373331`.
- **Project-Specific WhatsApp CTAs**: Solid vibrant WhatsApp Green (`#25D366`) 'CONTACT US' buttons with customized inquiry prefilled messages for each project.
- **Strategic Partner CTA**: Solid Green WhatsApp button reading 'Talk to an Expert' linked to `+201033373331`.

---

## 📋 Lead Capture & Backend Routing

- **Inputs**: Clean 'Full Name' and 'Phone Number' inputs (zero placeholders / sample text).
- **International Country Selector**: Full country picker with flags, defaulting to **Egypt (+20)**.
- **Submit Button**: Solid charcoal button with white uppercase text: `SUBMIT`.
- **Backend Email Routing**: Submitted leads are routed via AJAX to:
  - `Rahma@irtkaz.com`
  - `Mostafa.a.ashmawy@gmail.com`
  - `Mostafa.ashmawy@irtkaz.com`
- **Lead Persistence**: Also backed up in browser `localStorage`.
- **Instant WhatsApp Handoff**: Success modal provides direct one-click WhatsApp confirmation.

---

## ⚖️ Standalone Legal Pages

- **[terms.html](file:///c:/Users/rahma.sameh/Desktop/Madient%20Masr%201/terms.html)**: Standalone Terms & Conditions routed page.
- **[privacy.html](file:///c:/Users/rahma.sameh/Desktop/Madient%20Masr%201/privacy.html)**: Standalone Privacy Policy routed page.
- **Design Style**: Centered layout using 100% white text on a solid black background (`#000000`) for maximum formal clarity.

---

## 🚀 How to Run Locally

You can open `index.html` directly in any web browser, or run the local Node server:

```bash
node scripts/serve.js
```
Then visit `http://localhost:3000/`.
