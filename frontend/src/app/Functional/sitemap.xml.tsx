import { getCaseStudies } from "../SanityUtils";
import { CaseStudy } from "../types/CaseStudy";
import { NextApiResponse } from "next";

function generateSiteMap(caseStudies: CaseStudy[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://lostboy.tv</loc>
     </url>
     <url>
       <loc>https://lostboy.tv/about</loc>
     </url>
     <url>
     <loc>https://lostboy.tv/contact</loc>
   </url>
     ${caseStudies
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`https://lostboy.tv/${slug}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  // We make an API call to gather the URLs for our site
  const caseStudies = await getCaseStudies();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(caseStudies);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
