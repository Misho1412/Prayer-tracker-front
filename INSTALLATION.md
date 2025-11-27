# Installation Instructions

## Required Dependencies

You need to install the following dependencies for the dot-shader-background component to work:

### 1. Tailwind CSS (if not already installed)
```bash
npm install -D tailwindcss postcss autoprefixer
```

### 2. Three.js and React Three Fiber Dependencies
```bash
npm install three @react-three/drei @react-three/fiber
```

## Installation Steps

1. **Install Tailwind CSS dependencies:**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

2. **Install Three.js dependencies:**
   ```bash
   npm install three @react-three/drei @react-three/fiber
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

## Project Structure

The component has been integrated into:
- `src/components/ui/dot-shader-background.jsx` - The shader background component
- `src/components/LoginRegisterForm.jsx` - Login/Register form with background
- `src/contexts/ThemeContext.jsx` - Theme provider (alternative to next-themes)

## Important Notes

- The project uses **Create React App**, not Next.js, so some Next.js-specific features have been adapted:
  - Removed `'use client'` directive
  - Created custom `ThemeContext` instead of using `next-themes`
  - All paths use relative imports instead of `@/` aliases

- The component structure follows shadcn conventions with:
  - Components in `src/components/ui/`
  - Context providers in `src/contexts/`

- Tailwind CSS is configured in:
  - `tailwind.config.js`
  - `postcss.config.js`
  - `src/index.css` (imports Tailwind directives)

## Troubleshooting

If you encounter issues:

1. **Make sure all dependencies are installed** - Check `package.json` for all required packages
2. **Clear node_modules and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
3. **Check that Tailwind CSS is properly configured** - Verify `src/index.css` imports Tailwind directives

