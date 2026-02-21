const site = import.meta.env.SITE ?? 'https://s4m73l09.github.io';

const toBase = (path: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const cleanPath = path.replace(/^\/+/, '');
  return `${base}/${cleanPath}`.replace(/\/{2,}/g, '/');
};

export async function GET() {
  const sitemapUrl = new URL(toBase('/sitemap.xml'), site).toString();
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}
