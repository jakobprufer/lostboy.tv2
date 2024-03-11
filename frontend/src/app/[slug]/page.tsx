import React from "react";
import { getCaseStudy } from "../SanityUtils";
import CaseStudyContent from "../Components/CaseStudyContent";

type DetailProps = {
  params: { slug: string };
};

export const revalidate = 120;

export default async function Detail({ params }: DetailProps) {
  const slug = params.slug;
  const caseStudy = await getCaseStudy(slug);

  return (
    <div className="pageContent detail">
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
