# E-COM React (Vite + TypeScript)

> A modern, modular e-commerce frontend built with **React**, **TypeScript** and **Vite**.  
> Lightweight single-page app with product browsing, cart, wishlist, search and auth pages (UI only / mock data).

---

## 🚀 Project Overview

This repository is a frontend e-commerce app implemented as a Vite + React + TypeScript project. It uses a local `products.ts` data file and React Context (`AppContext.tsx`) for state (cart, wishlist, user). The UI is componentized for easy extension.

---

## ✨ Features

- Home page with carousel and featured products  
- Category pages and search page  
- Product details page  
- Cart with quantity update, remove and total calculation  
- Buy / Checkout page (UI)  
- Wishlist to save favorite products  
- Authentication pages: Signup & Login (UI / mock)  
- Reusable components: `Header`, `Carousel`, `ProductCard`  
- Type safety via TypeScript and consistent folder structure

---

## 🧭 Tech stack

- React + TypeScript  
- Vite (dev server + build)  
- CSS / PostCSS (project already includes `postcss.config.js`)  
- ESLint for linting

---

## 📁 Project structure (relevant files)

```
E-COM_PROJECT/
├── src/
│   ├── components/
│   │   ├── Carousel.tsx
│   │   ├── Header.tsx
│   │   └── ProductCard.tsx
│   ├── context/
│   │   └── AppContext.tsx
│   ├── data/
│   │   └── products.ts
│   ├── pages/
│   │   ├── Buy.tsx
│   │   ├── Cart.tsx
│   │   ├── CategoryPage.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── ProductDetails.tsx
│   │   ├── Search.tsx
│   │   ├── Signup.tsx
│   │   └── Wish.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── vite-env.d.ts
└── ...
```

---

## 🛠️ Getting started

### Prerequisites
- Node.js v14+ (recommended) and npm

### Install
```bash
git clone <your-repo-url>
cd E-COM_PROJECT
npm install
```

### Run (development)
```bash
npm run dev
# open http://localhost:5173 (Vite default)
```

### Build (production)
```bash
npm run build
```

### Preview build locally
```bash
npm run preview
```

> If your `package.json` scripts differ, use the scripts listed there (commonly: `dev`, `build`, `preview`, `lint`).

---

## 🔧 Important files & how things work

- `src/data/products.ts`  
  Contains the product array used by the app. To add or update products, edit this file. Each product should conform to the types defined in `src/types/index.ts`.

- `src/context/AppContext.tsx`  
  Centralized state for cart, wishlist, current user and helper actions (add/remove/update). This keeps components lean and simple.

- `src/components/*`  
  Reusable presentational components. Keep UI logic here and push global state logic into the Context.

- `src/pages/*`  
  Route pages that compose components and consume Context. Example: `Cart.tsx` reads cart state from `AppContext`.

---

## ⚙️ Example: Add a product (quick)

Open `src/data/products.ts` and add an object matching your `Product` type:

```ts
// src/data/products.ts
export const products = [
  {
    id: 'p100',
    title: 'New Product',
    price: 499,
    description: 'Short description',
    images: ['/images/product-100.jpg'],
    category: 'electronics',
    rating: 4.3,
    stock: 10
  },
  // ...
]
```

If you use images, place them in `public` or reference an external URL.

---

## ✅ Suggestions for next steps / improvements

- Connect to a backend (Node/Express, Firebase, or any REST API) for persistent products, users and orders.  
- Replace `products.ts` with fetch from API and implement loading/error states.  
- Payment integration (Stripe/PayPal) for checkout.  
- Add unit and integration tests (Jest + React Testing Library).  
- Add a protected admin panel to manage products.  
- Persist cart/wishlist in `localStorage` or backend per user.

---

## 🧩 Deployment

This app can be deployed to static hosts (Vercel, Netlify, GitHub Pages) after building:

1. `npm run build`
2. Deploy the `dist` (or build) folder as a static site on your chosen provider.

If you add server-side auth or APIs, use platforms that support server functions (Vercel, Netlify Functions, or a separate backend).

---

## 👥 Contributing

1. Fork the repo  
2. Create a branch: `git checkout -b feature/awesome`  
3. Commit changes: `git commit -m "feat: add awesome feature"`  
4. Push and open a PR

Please keep code modular, use TypeScript types, and run lint before PR.

---

## ✉️ Contact

If you want a tailored README with exact `package.json` scripts, README badges or screenshots included, tell me and I’ll generate an updated version — I can also create a concise GitHub-ready README if you prefer.

