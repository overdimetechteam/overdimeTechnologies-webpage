// Prefix public-folder paths with Vite's base URL so they work on GitHub Pages
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
export const asset = (path) => `${BASE}/${path.replace(/^\//, '')}`