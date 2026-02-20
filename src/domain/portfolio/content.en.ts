import type { HomeContent } from './types';
import { sharedTech } from './shared';

export const contentEn: HomeContent = {
  language: 'en',
  langLabel: 'ES',
  homeLabel: 'Home',
  projectsLabel: 'Projects',
  projectsLinkLabel: 'View all projects',
  labsLabel: 'Infra Lab',
  labsLinkLabel: 'View infrastructure lab',
  title: 'Samuel | DevOps & Cloud Infrastructure',
  intro:
    'I am Samuel. I automate infrastructure with Terraform and Ansible, deployments with CI/CD, and observability with Prometheus/Grafana. I focus on reproducible, secure, and documented environments.',
  contact: 'Contact: GitHub @S4M73l09',
  technologiesTitle: 'Main technologies',
  projectsTitle: 'Featured projects',
  labsTitle: 'Infrastructure lab',
  kpiTitle: 'Global impact',
  footer: 'Technical portfolio built from real cloud infrastructure projects.',
  tech: sharedTech,
  kpis: [
    {
      metric: 'Deployment time',
      before: '~45 min',
      after: '~10-12 min',
      detail: 'Automatic change application with CI/CD.'
    },
    {
      metric: 'Manual intervention',
      before: 'High',
      after: 'Minimal',
      detail: 'Automation with Ansible and Terraform.'
    },
    {
      metric: 'Infrastructure cost',
      before: 'High (unoptimized)',
      after: '~25-30% lower',
      detail: 'Resource optimization across Azure and GCP.'
    },
    {
      metric: 'Operational maintenance',
      before: 'Complex, manual',
      after: 'Simplified',
      detail: 'More agile and easier-to-maintain environments.'
    }
  ],
  cardLabels: {
    challenge: 'Challenge',
    solution: 'Solution',
    impact: 'Impact',
    repository: 'Repository',
    details: 'Details'
  },
  kpiHeaders: {
    metric: 'KPI',
    before: 'Before',
    after: 'After',
    detail: 'Description'
  }
};
