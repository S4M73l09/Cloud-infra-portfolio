export type PortfolioLanguage = 'es' | 'en';

export type PortfolioSection = 'projects' | 'labs';

export type LabProvider = 'gcs' | 'az';

export type PortfolioItem = {
  slug: string;
  title: string;
  challenge: string;
  solution: string;
  impact: string;
  stack: string[];
  repo: string;
  featured: boolean;
  order: number;
  provider?: LabProvider;
};

export type Kpi = {
  metric: string;
  before: string;
  after: string;
  detail: string;
};

export type HomeContent = {
  language: PortfolioLanguage;
  langLabel: string;
  homeLabel: string;
  projectsLabel: string;
  projectsLinkLabel: string;
  labsLabel: string;
  labsLinkLabel: string;
  title: string;
  intro: string;
  contact: string;
  technologiesTitle: string;
  projectsTitle: string;
  labsTitle: string;
  kpiTitle: string;
  footer: string;
  tech: string[];
  kpis: Kpi[];
  cardLabels: {
    challenge: string;
    solution: string;
    impact: string;
    repository: string;
    details: string;
  };
  kpiHeaders: {
    metric: string;
    before: string;
    after: string;
    detail: string;
  };
};
