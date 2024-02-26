import React from "react";
import { getCaseStudy } from "../SanityUtils";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import { client } from "../SanityUtils";

type DetailProps = {
  params: { slug: string };
};
interface SanityImageValue {
  _id: string;
  asset: {
    _ref: string;
  };
  alt?: string;
}

interface SanityImageProps {
  value: SanityImageValue;
}

const SanityImage: React.FC<SanityImageProps> = ({ value }) => {
  const { width, height } = getImageDimensions(value);

  return (
    <Image
      src={urlBuilder(client).image(value).fit("max").auto("format").url()}
      alt={value.alt || " "}
      width={width}
      height={height}
      className="detailImg"
      style={{
        aspectRatio: width / height,
      }}
    />
  );
};

const components = {
  types: {
    image: SanityImage,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
};

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
        <div className="medText">
          <PortableText value={caseStudy.content} components={components} />
        </div>
      </div>
    </div>
  );
}
