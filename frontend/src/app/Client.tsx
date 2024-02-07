import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "vlugq6ei",
    dataset: "production",
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == "project" && visible == true]|order(orderRank) {
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
