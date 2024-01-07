import data from "../../data/data.json";
import ProjectItem from "../../components/ProjectItem";

export const metadata = {
  title: "Rohit Bajaj | Projects",
  description: "Rohit Bajaj (personal website)",
};

export default function Projects() {
  return (
    <div className="flex flex-col gap-5">
      
      <div className="flex flex-wrap gap-5 lg:gap-10">
        {data.Projects.map((project, index) => (
          <div key={index}>
            <ProjectItem project={project}></ProjectItem>
          </div>
        ))}
      </div>
    </div>
  );
}
