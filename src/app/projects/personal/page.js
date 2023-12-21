import ProjectItem from "../../../components/ProjectItem";
const project1 = {
  projectName: "Personal Website",
  imageSource: "/images/r.png",
  description: "this.project()",
  startDate: "2023-12-11",
  endDate: null,
  status: "ongoing",

  technologies: ["React Native", "Firebase"],
  tasks: [
    "Develop user-friendly interface",
    "Integrate health tracking APIs",
    "Implement user authentication",
    "Conduct usability testing",
  ],
};

export default function Personal() {
  return (
    <div className="flex justify-center content-center flex-wrap gap-10 md:grid md:grid-cols-2 lg:grid-cols-3">
      <ProjectItem project={project1}></ProjectItem>
    </div>
  );
}
