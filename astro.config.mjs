import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const isUserOrOrgPagesRepo = Boolean(repository && repository.endsWith('.github.io'));
const basePath =
  isGithubActions && repository && !isUserOrOrgPagesRepo ? `/${repository}` : '/';

export default defineConfig({
  site: 'https://s4m73l09.github.io',
  base: basePath,
  output: 'static'
});
