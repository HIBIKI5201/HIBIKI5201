import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    projectCode: z.string(),
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    status: z.enum(['ACTIVE', 'COMPLETED', 'ARCHIVED']),
    description: z.string(),
    thumbnail: z.string().optional(),
    videoUrl: z.string().url().optional(),
    releaseUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
  }),
});

export const collections = { projects };
