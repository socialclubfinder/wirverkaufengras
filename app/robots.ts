import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/impressum'],
    },
    sitemap: 'https://wirverkaufengras.de/sitemap.xml',
  };
}