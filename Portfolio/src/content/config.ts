import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    projectCode: z.string(),
    title: z.string(),
    date: z.string(),
    stack: z.array(z.string()),
    technologies: z.array(z.string()),
    tools: z.array(z.string()).optional(),
    productionType: z.enum(['SOLO', 'TEAM', 'OTHER']),
    isPickup: z.boolean().default(false),
    description: z.string(),
    overview: z.string().optional(),
    thumbnail: z.string().optional(),
    videoUrl: z.string().url().optional(),
    releaseUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
  }),
});

export const collections = { projects };
