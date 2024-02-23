import { createClient, groq } from "next-sanity";

// Common Sanity client configuration
const client = createClient({
  projectId: "vlugq6ei",
  dataset: "production",
  apiVersion: "2024-02-01",
  useCdn: false,
});

// Function to fetch projects
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

// Function to fetch case studies, including details from the linked project
export async function getCaseStudies() {
  const query = groq`*[_type == "caseStudy"] {
    title,
    "icon": icon.asset->url,
    content,
    "client": linkedWork->client,
    "video": linkedWork->video.asset->url,
    "thumbnail": linkedWork->thumbnail.asset->url,
    "agency": linkedWork->agency
  }`;

  return client.fetch(query);
}
