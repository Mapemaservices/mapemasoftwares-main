# Caching and Compression for Vite

# 1. Enable gzip compression (Vite does this in production by default, but you can use a plugin for more control)
# 2. Add HTTP cache headers for static assets (configure in your deployment, e.g., Netlify, Vercel, or nginx)
# 3. Example: Add vite-plugin-compression for Brotli/gzip

# Install plugin:
# npm install vite-plugin-compression --save-dev

# In vite.config.ts:
import viteCompression from 'vite-plugin-compression';

export default {
  plugins: [viteCompression()],
};

# 4. For local testing, use a static server that supports compression (e.g., serve, http-server)

# 5. For image optimization, convert PNGs to WebP and update references in your code.
# Example command (requires cwebp):
# cwebp public/logo.png -o public/logo.webp
# cwebp public/android-chrome-512x512.png -o public/android-chrome-512x512.webp
# ...repeat for all PNGs

# 6. Update <img> and manifest references to use .webp where supported.

# 7. For SEO, ensure unique <title> and <meta> tags per page (already present in your code).
# 8. Structured data is handled in src/components/SEO/SEOHead.tsx.
# 9. Sitemap is referenced in robots.txt and should be generated at /public/sitemap.xml.

# 10. Run Lighthouse in Chrome DevTools for a full audit and follow its recommendations.
