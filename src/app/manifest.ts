/* eslint-disable camelcase -- Web App Manifest uses snake_case property names. */
import type { MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => ({
  name: 'Minhas Trilhas',
  short_name: 'Minhas Trilhas',
  description: 'Um registro pessoal das trilhas que já percorri.',
  start_url: '/',
  scope: '/',
  display: 'standalone',
  background_color: '#f3f1e6',
  theme_color: '#173e29',
  orientation: 'portrait-primary',
  categories: ['lifestyle', 'travel'],
  icons: [
    {
      src: '/icons/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: '/icons/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: '/icons/icon-maskable-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'maskable',
    },
  ],
});

export default manifest;
