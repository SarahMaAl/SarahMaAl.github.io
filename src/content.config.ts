import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.date(),
    affiliation: z.string(),
    context: z.string(),
    domain: z.array(z.string()),
    methods: z.array(z.string()),
    tools: z.array(z.string()),
    skills: z.array(z.string()),
    image: z.string().optional(),
    github: z.string().optional(),
    report: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const certifications = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/certifications",
  }),
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    date: z.date(),
    skills: z.array(z.string()).optional(),
    link: z.string().optional(),
  }),
});

export const collections = {
  projects,
  certifications,
};
