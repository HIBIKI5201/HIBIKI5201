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

const trackrecords = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(), // YYYY-MM-DD or similar for sorting
    title: z.string(),
    description: z.string(),
    grantor: z.string(), // 授賞元
    image: z.string().optional(),
  }),
});

export const collections = { projects, trackrecords };
