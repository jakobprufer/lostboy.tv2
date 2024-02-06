import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "vlugq6ei",
    dataset: "production",
    useCdn: true,
  });

  return client.fetch(
    groq`*[_type == "project" && visible == true] {
    title,
    slug,
    client,
    orderRank,
    available,
    agency,
    thumbnail,
    video,
    }`
  );
}
