import type { MetadataRoute } from 'next';

// File-based metadata: Next serves this at /manifest.webmanifest and links it
// automatically, so no change to layout.tsx is needed.
export default function manifest(): MetadataRoute.Manifest {
  return {
      "name": "VeteransServiceAssistanceCenterINC",
      "short_name": "VeteransServiceAssistanceCenterINC",
      "start_url": "/",
      "display": "standalone",
      "background_color": "#ffffff",
      "theme_color": "#0f172a",
      "icons": [
          {
              "src": "/icon-192.png",
              "sizes": "192x192",
              "type": "image/png"
          },
          {
              "src": "/icon-512.png",
              "sizes": "512x512",
              "type": "image/png"
          }
      ]
  };
}
