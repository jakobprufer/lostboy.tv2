import { createClient, groq } from "next-sanity";
import { Project } from "@/app/types/Project";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "vlugq6ei",
    dataset: "production",
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == "project" && visible == true]|order(orderRank) {
    _id,
    title,
    "slug": slug.current,
    client,
    orderRank,
    available,
    agency,
    "thumbnail": thumbnail.asset->url,
    "video": video.asset->url
    }`
  );
}
