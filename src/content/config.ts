import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    classification: z.string(),
    department: z.string(),
    subject: z.string(),
    date: z.string(),
    reference: z.string(),
    number: z.number(),
    distributionList: z.array(z.string()).optional(),
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