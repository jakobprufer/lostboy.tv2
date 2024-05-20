import { caseQuery } from "./Sanity/SanityQuery";
import { CaseStudyType } from "./types/CaseStudy";
import { sanityFetch } from "./Sanity/SanityClient";

const URL = "https://lostboy.tv";

export default async function sitemap() {
  const caseStudies: CaseStudyType[] = await sanityFetch({
    query: caseQuery,
    // You can add multiple tags that matches with your document _id: ['post', 'about', ...]
    tags: ["caseStudy"],
  });
  // const caseStudies = await getCaseStudies();

  const caseStudyUrls = caseStudies.map((caseStudy: CaseStudyType) => ({
    url: `${URL}/${caseStudy.slug}`,
    lastModified: caseStudy.modified,
  }));

  const routes = ["", "/about", "/contact"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...caseStudyUrls];
}
