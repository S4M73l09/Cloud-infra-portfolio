import type { HomeContent } from './types';
import { sharedTech } from './shared';

export const contentEs: HomeContent = {
  language: 'es',
  langLabel: 'EN',
  homeLabel: 'Inicio',
  projectsLabel: 'Proyectos',
  projectsLinkLabel: 'Ver todos los proyectos',
  labsLabel: 'Laboratorio',
  labsLinkLabel: 'Ver laboratorio de infraestructuras',
  title: 'Samuel | DevOps & Cloud Infrastructure',
  intro:
    'Soy Samuel. Automatizo infraestructura con Terraform y Ansible, despliegues con CI/CD y observabilidad con Prometheus/Grafana. Trabajo para que cada entorno sea reproducible, seguro y documentado.',
  contact: 'Contacto: GitHub @S4M73l09',
  technologiesTitle: 'Tecnologias principales',
  projectsTitle: 'Proyectos destacados',
  labsTitle: 'Laboratorio de infraestructuras',
  kpiTitle: 'Impacto global',
  footer: 'Portfolio tecnico basado en mis proyectos reales de infraestructura cloud.',
  tech: sharedTech,
  kpis: [
    {
      metric: 'Tiempo de despliegue',
      before: '~45 min',
      after: '~10-12 min',
      detail: 'Aplicacion automatica de cambios con CI/CD.'
    },
    {
      metric: 'Intervencion manual',
      before: 'Alta',
      after: 'Minima',
      detail: 'Automatizacion con Ansible y Terraform.'
    },
    {
      metric: 'Coste de infraestructura',
      before: 'Alto (no optimizado)',
      after: '~25-30% menos',
      detail: 'Recursos optimizados entre Azure y GCP.'
    },
    {
      metric: 'Mantenimiento operativo',
      before: 'Complejo, manual',
      after: 'Simplificado',
      detail: 'Entornos mas agiles y faciles de mantener.'
    }
  ],
  cardLabels: {
    challenge: 'Reto',
    solution: 'Solucion',
    impact: 'Impacto',
    repository: 'Repositorio',
    details: 'Detalles'
  },
  kpiHeaders: {
    metric: 'KPI',
    before: 'Antes',
    after: 'Despues',
    detail: 'Descripcion'
  }
};
