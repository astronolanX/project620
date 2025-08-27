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

const microblog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects,
  microblog,
};