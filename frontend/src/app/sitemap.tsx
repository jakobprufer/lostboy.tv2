import { getCaseStudies } from "./SanityUtils";
import { CaseStudy } from "./types/CaseStudy";

const URL = "https://lostboy.tv";

export default async function sitemap() {
  const caseStudies = await getCaseStudies();

  const caseStudyUrls = caseStudies.map((caseStudy: CaseStudy) => ({
    url: `${URL}/${caseStudy.slug}`,
    lastModified: caseStudy.modified,
  }));

  const routes = ["", "/about", "/contact"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...caseStudyUrls];
}
