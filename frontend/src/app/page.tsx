import WorkGrid from "./Components/WorkGrid";
import { getProjects } from "./Client";

export default async function Home() {
  //get data
  const projects = await getProjects();

  return (
    <main className="pageContent">
      <WorkGrid projects={projects} />
    </main>
  );
}
