import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://s4m73l09.github.io',
  base: isGithubActions && repository ? `/${repository}` : '/',
  output: 'static'
});
