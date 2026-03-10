import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    status: z.enum(['ACTIVE', 'COMPLETED', 'ARCHIVED']),
    description: z.string(),
  }),
});

export const collections = { projects };
