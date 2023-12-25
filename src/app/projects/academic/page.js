import ProjectItem from "../../../components/ProjectItem";
import data from "../data.json";

export default function Academic() {
  return (
    <div className="flex justify-center content-center flex-wrap gap-10 lg:grid lg:grid-cols-2">
      {data.Projects.map(
        (project, index) =>
          project.type === "academic" && (
            <ProjectItem
              key={index}
              className="text-gray-700"
              project={project}
            ></ProjectItem>
          )
      )}
    </div>
  );
}
