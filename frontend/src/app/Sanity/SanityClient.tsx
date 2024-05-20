import { createClient, groq, type QueryParams } from "next-sanity";
// import { CaseStudy } from "./types/CaseStudy";
// import { Project } from "./types/Project";

// Common Sanity client configuration
export const client = createClient({
  projectId: "vlugq6ei",
  dataset: "production",
  apiVersion: "2024-02-01",
  useCdn: false,
});

//on-demand revalidation
export async function sanityFetch<QueryResponse>({
  query,
  qParams = {},
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    cache: "force-cache",
    next: { tags },
  });
}
