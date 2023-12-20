import ProjectItem from "../../../components/ProjectItem";
const project1 = {
  projectName: "Project Echo",
  imageSource: "/images/rainforests.jpg",
  description:
    "An AI/ML solution to help conservationist save wildlife in wild otways, Australia.",
  startDate: "2023-03-10",
  endDate: "2023-10-20",
  status: "completed",

  technologies: ["React Native", "Firebase"],
  tasks: [
    "Develop user-friendly interface",
    "Integrate health tracking APIs",
    "Implement user authentication",
    "Conduct usability testing",
  ],
};

export default function Academic() {
  return (
    <div className="flex justify-center content-center flex-wrap gap-10 md:grid md:grid-cols-2 lg:grid-cols-3">
      <ProjectItem project={project1}></ProjectItem>
    </div>
  );
}
