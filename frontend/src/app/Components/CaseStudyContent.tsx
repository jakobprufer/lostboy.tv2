"use client";
import { useState } from "react";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import { client } from "../SanityUtils";
import { CaseStudy } from "../types/CaseStudy";
import AudioPlayer from "./AudioPlayer";

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
    file: AudioPlayer,
  },
};

interface CaseStudyContentProps {
  caseStudy: CaseStudy; // Add the caseStudy prop with the correct type
}

const CaseStudyContent: React.FC<CaseStudyContentProps> = ({ caseStudy }) => {
  //state to register currently playing player
  const [currentPlaying, setCurrentPlaying] = useState(null);

  return (
    <div className="medText">
      <PortableText value={caseStudy.content} components={components} />
    </div>
  );
};

export default CaseStudyContent;
