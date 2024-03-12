import WorkGrid from "./Components/WorkGrid";
import { getProjects } from "./SanityUtils";
import HomeContent from "./Components/HomeContent";

export const revalidate = 10;

export default async function Home() {
  //get data
  const projects = await getProjects();

  return (
    <main className="pageContent">
      {/* <HomeContent /> */}
      <WorkGrid projects={projects} />
    </main>
  );
}
