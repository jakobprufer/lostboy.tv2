import { groq } from "next-sanity";

// // Fetch data
// export async function getProjects() {
//     const query = groq`*[_type == "project"]|order(orderRank) {
//       _id,
//       title,
//       "slug": slug.current,
//       client,
//       "brandIcon": brandIcon.asset->url,
//       orderRank,
//       available,
//       agency,
//       "thumbnail": thumbnail.asset->url,
//       "video": video.asset->url
//     }`;

//     return client.fetch(query);
//   }

//   export async function getCaseStudies(): Promise<CaseStudy[]> {
//     const query = groq`*[_type == "caseStudy"]|order(_createdAt desc) {
//       title,
//       showAbout,
//       "icon": linkedWork->brandIcon.asset->url,
//       content,
//       "client": linkedWork->client,
//       "video": linkedWork->video.asset->url,
//       "thumbnail": linkedWork->thumbnail.asset->url,
//       "agency": linkedWork->agency,
//       "slug": linkedWork->slug.current,
//       "modified": _updatedAt
//     }`;

//     return client.fetch(query);
//   }

//   export async function getCaseStudy(slug: string): Promise<CaseStudy> {
//     const query = groq`*[_type == "caseStudy" && linkedWork->slug.current == $slug][0] {
//       title,
//       "slug": linkedWork->slug.current,
//       "icon": linkedWork->brandIcon.asset->url,
//       content,
//       "client": linkedWork->client,
//       "video": linkedWork->video.asset->url,
//       "thumbnail": linkedWork->thumbnail.asset->url,
//       "agency": linkedWork->agency,
//     }`;

//     return client.fetch(query, { slug });
//   }

export const projectQuery = groq`*[_type == "project"]|order(orderRank) {
    _id,
    title,
    "slug": slug.current,
    client,
    "brandIcon": brandIcon.asset->url,
    orderRank,
    available,
    agency,
    "thumbnail": thumbnail.asset->url,
    "video": video.asset->url
  }`;

export const caseQuery = groq`*[_type == "caseStudy"]|order(_createdAt desc) {
    title,
    showAbout,
    "slug": linkedWork->slug.current,
    "icon": linkedWork->brandIcon.asset->url,
    content,
    "client": linkedWork->client,
    "video": linkedWork->video.asset->url,
    "thumbnail": linkedWork->thumbnail.asset->url,
    "agency": linkedWork->agency,
  }`;

export const singleCaseQuery = groq`*[_type == "caseStudy" && linkedWork->slug.current == $slug][0] {
    title,
    "slug": linkedWork->slug.current,
    "icon": linkedWork->brandIcon.asset->url,
    content,
    "client": linkedWork->client,
    "video": linkedWork->video.asset->url,
    "thumbnail": linkedWork->thumbnail.asset->url,
    "agency": linkedWork->agency,
  }`;
