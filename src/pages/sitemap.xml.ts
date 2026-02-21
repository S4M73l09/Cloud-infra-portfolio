import { getCollection } from 'astro:content';

const site = import.meta.env.SITE ?? 'https://s4m73l09.github.io';

const toBase = (path: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const cleanPath = path.replace(/^\/+/, '');
  return `${base}/${cleanPath}`.replace(/\/{2,}/g, '/');
};

const toAbsoluteUrl = (path: string) => new URL(toBase(path), site).toString();

export async function GET() {
  const staticRoutes = ['/', '/projects/', '/labs/', '/en/', '/en/projects/', '/en/labs/'];

  const projects = await getCollection('projects');
  const labs = await getCollection('labs');

  const dynamicProjectRoutes = projects.map((entry) =>
    entry.data.lang === 'es'
      ? `/projects/${entry.data.routeSlug}/`
      : `/en/projects/${entry.data.routeSlug}/`
  );

  const dynamicLabRoutes = labs.map((entry) =>
    entry.data.lang === 'es' ? `/labs/${entry.data.routeSlug}/` : `/en/labs/${entry.data.routeSlug}/`
  );

  const allRoutes = [...new Set([...staticRoutes, ...dynamicProjectRoutes, ...dynamicLabRoutes])];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (path) => `  <url>
    <loc>${toAbsoluteUrl(path)}</loc>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
