# 🛍️ StyleHub — Fashion & Apparel E-Commerce

> A premium, fully-featured frontend e-commerce store for Fashion & Apparel — built with pure HTML, CSS, and JavaScript.

---

## 📁 Project Structure

```
styleHub/
├── README.md
└── frontend/
    ├── index.html            # Home page
    ├── products.html         # Shop All / Category listing
    ├── product-detail.html   # Single product detail page
    ├── cart.html             # Shopping cart
    ├── checkout.html         # Checkout & order form
    ├── wishlist.html         # Saved / wishlist items
    ├── account.html          # User account dashboard
    ├── login.html            # Login & Register
    ├── order-tracking.html   # Order tracking page
    ├── about.html            # About us page
    ├── contact.html          # Contact form page
    ├── css/
    │   └── style.css         # Global styles & design system
    └── js/
        ├── script.js         # Core UI interactions & shared logic
        └── products.js       # Product data & catalogue logic
```

---

## ✨ Features

- **Multi-page SPA-like experience** — Home, Shop, Cart, Checkout, Wishlist, Account, Order Tracking, About & Contact
- **Category filtering** — Browse by Men, Women, and Kids via URL query params (`?category=men`)
- **Shopping Cart** — Add/remove items with live quantity & total updates (localStorage-persisted)
- **Wishlist** — Save favourite items with persistent state across pages
- **Product Detail** — Rich product page with size selection, image preview & add-to-cart
- **Checkout Flow** — Multi-step checkout form with order summary
- **Account Dashboard** — User profile, order history & settings
- **Order Tracking** — Track order status with a dynamic timeline
- **Search** — Instant search overlay from the navigation bar
- **Announcement Bar** — Rotating promotional banners at the top
- **Responsive Design** — Fully mobile-friendly layout
- **Dark-mode ready** — Premium dark aesthetic with glassmorphism accents

---

## 🚀 Getting Started

No build tools required. This is a **pure static frontend** — just open the files in your browser.

### Option 1 — Open Directly
```
frontend/index.html  →  open in any modern browser
```

### Option 2 — Local Dev Server (recommended)
Using [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code:
1. Right-click `frontend/index.html`
2. Select **"Open with Live Server"**

Or with Node.js:
```bash
npx serve frontend
```

---

## 🛠️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Structure  | HTML5 (Semantic)                  |
| Styling    | Vanilla CSS (custom design system)|
| Logic      | Vanilla JavaScript (ES6+)         |
| Storage    | Browser `localStorage`            |
| Icons      | Emoji-based (no dependencies)     |
| Fonts      | Google Fonts — *Inter*            |

---

## 🗺️ Pages Overview

| Page                  | File                    | Description                              |
|-----------------------|-------------------------|------------------------------------------|
| Home                  | `index.html`            | Hero, featured products, categories      |
| Shop / Products       | `products.html`         | All products with filter & sort          |
| Product Detail        | `product-detail.html`   | Single item view with size & quantity    |
| Cart                  | `cart.html`             | Cart summary with item management        |
| Checkout              | `checkout.html`         | Shipping info, payment & order review    |
| Wishlist              | `wishlist.html`         | Saved / favourited items                 |
| Account               | `account.html`          | Profile, orders & settings               |
| Login / Register      | `login.html`            | Auth forms (UI only)                     |
| Order Tracking        | `order-tracking.html`   | Track delivery status                    |
| About                 | `about.html`            | Brand story & team                       |
| Contact               | `contact.html`          | Contact form & info                      |

---

## 📦 No Dependencies

StyleHub has **zero external dependencies** — no npm packages, no frameworks, no bundlers. Everything runs out of the box.

---

## 📄 License

This project is for educational / portfolio purposes. Feel free to use and adapt it.
