import { contentEn } from './content.en';
import { contentEs } from './content.es';
import type { HomeContent, PortfolioLanguage } from './types';

export type { PortfolioItem, PortfolioLanguage, PortfolioSection, HomeContent } from './types';
export { getFeaturedPortfolioItems, getPortfolioItemBySlug, getPortfolioItems } from './repository';

const contentByLanguage: Record<PortfolioLanguage, HomeContent> = {
  es: contentEs,
  en: contentEn
};

export const getPortfolioContent = (language: PortfolioLanguage): HomeContent => {
  return contentByLanguage[language];
};
