import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const countries = defineCollection({
  loader: glob({ base: "./src/content", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      flag: z.string(),
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      image: z.optional(image()),
    }),
});

export const collections = { countries };
