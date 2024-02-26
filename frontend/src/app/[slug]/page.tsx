import React from "react";
import { getCaseStudy } from "../SanityUtils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { extractImageDimensions } from "../functional/extractImageDimensions";

type DetailProps = {
  params: { slug: string };
};

interface ImageValue {
  imageUrl: string;
}

const myPortableTextComponents = {
  types: {
    image: ({ value }: { value: ImageValue }) => (
      <img src={value.imageUrl} alt="" />
    ),
  },
};

export default async function Detail({ params }: DetailProps) {
  const slug = params.slug;
  const caseStudy = await getCaseStudy(slug);

  //extracting image dimensions
  //   const dimensions = extractImageDimensions(caseStudy.icon);
  // left out for now, used normal image tag instead of next/image

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
        <div className="medText">
          <PortableText
            value={caseStudy.content}
            components={myPortableTextComponents}
          />
        </div>
      </div>
    </div>
  );
}
