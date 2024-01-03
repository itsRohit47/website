import data from "../projects/data.json";
import ProjectItem from "../../components/ProjectItem";
import ProjectsIcons from "../../components/ProjectsIcons";

export const metadata = {
  title: "Rohit Bajaj | Projects",
  description: "Rohit Bajaj (personal website)",
};

export default function Projects() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-semibold">Projects</h1>
      <p className="text-gray-500 text-base">
        Things have worked on, it includes university projects, personal
        projects, or anything i have worked on to learn something.
      </p>
      <ProjectsIcons></ProjectsIcons>

      {data.Projects.map((project, index) => (
        <div key={index}>
          <ProjectItem project={project}></ProjectItem>
        </div>
      ))}
    </div>
  );
}
