---
lang: en
title: Bootstrap in AZ
routeSlug: bootstrap-az
provider: az
challenge: Build an Azure bootstrap baseline to keep bootstrap and live infrastructure separated.
solution: Dedicated bootstrap repository with reusable structure for future deployments.
impact: Improves traceability and reduces risk by decoupling bootstrap from live environments.
stack:
  - Azure
  - Terraform
  - GitHub Actions
repo: https://github.com/S4M73l09/AZ-Bootstrap
featured: true
order: 3
---
Azure bootstrap baseline focused on separation of concerns and reuse.
