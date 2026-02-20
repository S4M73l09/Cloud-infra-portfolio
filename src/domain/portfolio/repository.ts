import { getCollection } from 'astro:content';
import type { PortfolioItem, PortfolioLanguage, PortfolioSection } from './types';

const byOrder = (a: PortfolioItem, b: PortfolioItem) => a.order - b.order;

const resolveProvider = (entry: {
  data: {
    provider?: string;
    title: string;
    stack: string[];
  };
}): 'gcs' | 'az' | undefined => {
  const raw = entry.data.provider?.toLowerCase();
  if (raw === 'gcs' || raw === 'az') return raw;

  const blob = `${entry.data.title} ${entry.data.stack.join(' ')}`.toLowerCase();
  if (blob.includes('azure') || blob.includes('az')) return 'az';
  if (blob.includes('gcs') || blob.includes('gcloud') || blob.includes('google cloud')) return 'gcs';
  return undefined;
};

export const getPortfolioItems = async (
  section: PortfolioSection,
  language: PortfolioLanguage
): Promise<PortfolioItem[]> => {
  const entries = await getCollection(section, ({ data }) => data.lang === language);

  return entries
    .map((entry) => ({
      slug: entry.data.routeSlug,
      title: entry.data.title,
      challenge: entry.data.challenge,
      solution: entry.data.solution,
      impact: entry.data.impact,
      stack: entry.data.stack,
      repo: entry.data.repo,
      featured: entry.data.featured,
      order: entry.data.order,
      provider: resolveProvider(entry)
    }))
    .sort(byOrder);
};

export const getFeaturedPortfolioItems = async (
  section: PortfolioSection,
  language: PortfolioLanguage,
  limit: number
): Promise<PortfolioItem[]> => {
  const items = await getPortfolioItems(section, language);
  return items.filter((item) => item.featured).slice(0, limit);
};

export const getPortfolioItemBySlug = async (
  section: PortfolioSection,
  language: PortfolioLanguage,
  slug: string
): Promise<PortfolioItem | undefined> => {
  const items = await getPortfolioItems(section, language);
  return items.find((item) => item.slug === slug);
};
