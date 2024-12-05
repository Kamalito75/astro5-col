import type { Loader, LoaderContext } from 'astro/loaders';
import { z } from 'astro:content';
import { loadFeedData } from "./feed.js";

// Define any options that the loader needs
export function myLoader(options: { url: string, apiKey: string }): Loader {
  // Configure the loader
  const feedUrl = new URL(options.url);
  // Return a loader object
  return {
    name: "my-loader",
    // Called when updating the collection.
    load: async (context: LoaderContext): Promise<void> => {
      // Load data and update the store
      const response = await loadFeedData(feedUrl, options.apiKey);
    },
    // Optionally, define the schema of an entry.
    // It will be overridden by user-defined schema.
    schema: async () => z.object({
      // ...
    })
  };
}