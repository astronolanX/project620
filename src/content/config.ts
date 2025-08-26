import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    year: z.string(),
    type: z.string(),
    number: z.number(),
    color: z.string(),
    colorLight: z.string(),
    colorLighter: z.string(),
  }),
});

export const collections = {
  projects,
};