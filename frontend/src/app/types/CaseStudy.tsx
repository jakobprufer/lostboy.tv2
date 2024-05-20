import { PortableTextBlock } from "sanity";

export type CaseStudyType = {
  title: string;
  showAbout: boolean;
  client: string;
  agency: string;
  thumbnail: string;
  icon: string;
  video: string;
  slug: string;
  content: PortableTextBlock[];
  modified: string;
};
