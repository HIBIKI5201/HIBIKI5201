import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    projectCode: z.string().nullable().optional(),
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
    videoUrl: z.union([z.string().url(), z.literal("")]).nullable().optional(),
    releaseUrl: z.union([z.string().url(), z.literal("")]).nullable().optional(),
    repoUrl: z.union([z.string().url(), z.literal("")]).nullable().optional(),
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
