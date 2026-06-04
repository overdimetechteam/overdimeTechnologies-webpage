// Prefix public-folder paths with Vite's base URL so they work on GitHub Pages.
// Also URL-encodes spaces and special chars in filenames.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export const asset = (path) => {
  const clean = path.replace(/^\//, '')
  const parts = clean.split('/')
  const encoded = parts.map((p, i) => (i === parts.length - 1 ? encodeURIComponent(p) : p)).join('/')
  return `${BASE}/${encoded}`
}