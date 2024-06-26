import WorkGrid from "./Components/WorkGrid";
// import { getProjects } from "./SanityUtils";
import HomeContent from "./Components/HomeContent";
import Script from "next/script";
import { sanityFetch } from "@/app/Sanity/SanityClient";
import { projectQuery } from "@/app/Sanity/SanityQuery";
import { ProjectType } from "./types/Project";

// export const revalidate = 10;

export default async function Home() {
  //get data
  const projects: ProjectType[] = await sanityFetch({
    query: projectQuery,
    // You can add multiple tags that matches with your document _id: ['post', 'about', ...]
    tags: ["project"],
  });

  // const projects = await getProjects();

  return (
    <main className="pageContent">
      {/* <HomeContent /> */}
      <WorkGrid projects={projects} />
      <Script
        id="HotJar"
        dangerouslySetInnerHTML={{
          __html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3906358,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />
    </main>
  );
}
