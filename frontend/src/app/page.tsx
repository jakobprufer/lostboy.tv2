import WorkGrid from "./Components/WorkGrid";
import { getProjects } from "./Client";
import HomeContent from "./Components/HomeContent";

export default async function Home() {
  //get data
  const projects = await getProjects();

  return (
    <main className="pageContent">
      <HomeContent />
      <WorkGrid projects={projects} />
    </main>
  );
}
