---
lang: es
title: Bootstrap en GCS
routeSlug: bootstrap-gcs
provider: gcs
challenge: Preparar una base aislada para no heredar fallos entre despliegues.
solution: Bootstrap separado para reutilizar en proyectos futuros de forma segura.
impact: Separación clara entre bootstrap e infraestructura real.
stack:
  - OIDC
  - GCloud
  - Terraform
  - GitHub Actions
repo: https://github.com/S4M73l09/GCS-Bootstrap---Live
featured: true
order: 1
---
Laboratorio enfocado en patrones de separación y seguridad para pipelines de infraestructura.
