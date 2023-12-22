import ProjectItem from "../../../components/ProjectItem";
const project1 = {
  id: 1,
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

const project2 = {
  id: 2,
  projectName: "Game Development (C++)",
  imageSource: "/images/ninja",
  description:
    "Building a 2d game from sctratch using splashkit library with C++",
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

const project3 = {
  id: 3,
  projectName: "Banking System (OOPS, C#)",
  imageSource: "/images/dollar.jpg",
  description:
    "Terminal based banking system that allows you to create/delete accounts, check balance, transfer funds between accounts.",
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
    <div className="flex justify-center content-center flex-wrap gap-10 lg:grid lg:grid-cols-2">
      <ProjectItem project={project1}></ProjectItem>
      <ProjectItem project={project2}></ProjectItem>
      <ProjectItem project={project3}></ProjectItem>
    </div>
  );
}
