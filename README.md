# Gohar Fatima — Portfolio

React + Vite se bana hua personal portfolio website. Dark theme, scroll-reveal
animations, aur ek animated "leaf-vein / neural network" signature hero graphic.

## VS Code mein run karne ka tareeqa

1. Is poore `gohar-portfolio` folder ko VS Code mein open karein
   (File → Open Folder → `gohar-portfolio` select karein).
2. VS Code ka built-in terminal kholein (`Ctrl + ~` ya Terminal → New Terminal).
3. Dependencies install karein (sirf pehli dafa):
   ```
   npm install
   ```
4. Development server start karein:
   ```
   npm run dev
   ```
5. Terminal mein jo local URL dikhega (usually `http://localhost:5173`),
   usay Ctrl+click karein ya browser mein khol lein.

Koi bhi file save karte hi browser automatically update ho jayega (hot reload).

## Production build (deploy karne ke liye)

```
npm run build
```

Isse `dist/` folder banega jise kisi bhi static hosting (Vercel, Netlify,
GitHub Pages) par upload kiya ja sakta hai.

## Folder Structure

```
gohar-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css          # design tokens + global styles
    ├── hooks/
    │   └── useReveal.js   # scroll-animation hook
    └── components/
        ├── Reveal.jsx
        ├── Navbar.jsx / .css
        ├── Hero.jsx / .css
        ├── About.jsx / .css
        ├── Skills.jsx / .css
        ├── Projects.jsx / .css
        ├── Education.jsx / .css
        ├── Contact.jsx / .css
        └── Footer.jsx / .css
```

## Customize

- **Content**: har section ka data uss component file ke top par ek array/object
  mein hai (e.g. `PROJECTS` in `Projects.jsx`, `SKILL_GROUPS` in `Skills.jsx`) —
  seedha wahan edit karein.
- **Colors**: `src/index.css` mein `:root` ke andar CSS variables (`--accent-leaf`,
  `--accent-data`, `--bg`, etc.) change karein, poori site update ho jayegi.
- **Profile photo**: agar photo add karni ho, `public/` folder mein image daal
  kar `Hero.jsx` mein `<img src="/your-photo.jpg" />` add kar dein.
