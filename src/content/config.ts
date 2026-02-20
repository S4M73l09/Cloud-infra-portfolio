import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  lang: z.enum(['es', 'en']),
  title: z.string(),
  routeSlug: z.string().regex(/^[a-z0-9-]+$/),
  challenge: z.string(),
  solution: z.string(),
  impact: z.string(),
  stack: z.array(z.string()),
  repo: z.string().url(),
  featured: z.boolean().default(false),
  order: z.number().int().nonnegative().default(999)
});

const projects = defineCollection({
  type: 'content',
  schema: baseSchema
});

const labs = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    provider: z.enum(['gcs', 'az'])
  })
});

export const collections = {
  projects,
  labs
};
