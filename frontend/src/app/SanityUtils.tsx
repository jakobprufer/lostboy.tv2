import { createClient, groq } from "next-sanity";
import { CaseStudy } from "./types/CaseStudy";
import { Project } from "./types/Project";

// Common Sanity client configuration
export const client = createClient({
  projectId: "vlugq6ei",
  dataset: "production",
  apiVersion: "2024-02-01",
  useCdn: false,
});

// Fetch data
export async function getProjects() {
  const query = groq`*[_type == "project"]|order(orderRank) {
    _id,
    title,
    "slug": slug.current,
    client,
    orderRank,
    available,
    agency,
    "thumbnail": thumbnail.asset->url,
    "video": video.asset->url
  }`;

  return client.fetch(query);
}

export async function getCaseStudies() {
  const query = groq`*[_type == "caseStudy"]|order(_createdAt desc) {
    title,
    "icon": icon.asset->url,
    content,
    "client": linkedWork->client,
    "video": linkedWork->video.asset->url,
    "thumbnail": linkedWork->thumbnail.asset->url,
    "agency": linkedWork->agency,
    "slug": linkedWork->slug.current
  }`;

  return client.fetch(query);
}

export async function getCaseStudy(slug: string): Promise<CaseStudy> {
  const query = groq`*[_type == "caseStudy" && linkedWork->slug.current == $slug][0] {
    title,
    "slug": linkedWork->slug.current,
    "icon": icon.asset->url,
    content,
    "client": linkedWork->client,
    "video": linkedWork->video.asset->url,
    "thumbnail": linkedWork->thumbnail.asset->url,
    "agency": linkedWork->agency,
  }`;

  return client.fetch(query, { slug });
}
