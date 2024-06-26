import React from "react";
// import { getCaseStudy } from "../SanityUtils";
import CaseStudyContent from "../Components/CaseStudyContent";
import Script from "next/script";
import { CaseStudyType } from "../types/CaseStudy";
import { sanityFetch } from "@/app/Sanity/SanityClient";
import { singleCaseQuery } from "../Sanity/SanityQuery";

type DetailProps = {
  params: { slug: string };
};

// export const revalidate = 10;

export default async function Detail({ params }: DetailProps) {
  // const slug = params.slug;
  // const caseStudy = await getCaseStudy(slug);
  //get data
  // const projects = await getProjects();
  const caseStudy: CaseStudyType = await sanityFetch({
    query: singleCaseQuery,
    // You can add multiple tags that matches with your document _id: ['post', 'about', ...]
    tags: ["caseStudy"],
    qParams: { slug: params.slug },
  });

  return (
    <div className="pageContent detail">
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
      <div className="detailContent">
        <h2 className="detailH">
          <div className="medH mbm detailHText stardom">
            {caseStudy.icon ? (
              <span>
                <img
                  src={caseStudy.icon}
                  alt={`${caseStudy.client} Icon`}
                  className="detailHLogo"
                />{" "}
                -{" "}
              </span>
            ) : null}{" "}
            {caseStudy.title}
          </div>
        </h2>
        <video
          className="detailVideo"
          width="1920"
          height="1080"
          preload="auto"
          controls
          poster={caseStudy.thumbnail}
        >
          <source src={caseStudy.video} type="video/mp4" />
          <source src={caseStudy.video} type="video/mov" />
          <source src={caseStudy.video} type="video/ogg" />
        </video>
        <CaseStudyContent caseStudy={caseStudy} />
      </div>
    </div>
  );
}
