import { PortableTextBlock } from "sanity";

export type CaseStudy = {
  title: string;
  client: string;
  agency: string;
  thumbnail: string;
  icon: string;
  video: string;
  slug: string;
  content: PortableTextBlock[];
};
