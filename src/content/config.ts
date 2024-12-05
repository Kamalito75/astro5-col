import { defineCollection, z } from "astro:content";

const actualitesSchema = z.object({
  id: z.string(),
  titre: z.string(),
});

const actualitesCollection = defineCollection({
  loader: async () => {
    const response = await fetch(
      "https://mgr-afpf.e-mhotep.com/items/actualites?limit=5&fields[]=id,titre"
    );
    const resp = await response.json();
    console.log("resp: ", resp.data);
    return resp.data;
  },
  schema: actualitesSchema,
});

export const collections = { actualites: actualitesCollection };
