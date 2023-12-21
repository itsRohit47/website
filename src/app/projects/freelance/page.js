import ProjectItem from "../../../components/ProjectItem";
const project1 = {
  projectName: "Consultant Website",
  imageSource: "/images/gem.png",
  description:
    "A website for an immigration bussiness based in Melbourne, to allow them to have better connection with their clients and get appointment bookings.",
  startDate: "2023-11-01",
  endDate: "2023-11-29",
  status: "completed",

  technologies: ["React Native", "Firebase"],
  tasks: [
    "Develop user-friendly interface",
    "Integrate health tracking APIs",
    "Implement user authentication",
    "Conduct usability testing",
  ],
};

export default function Freelance() {
  return (
    <div className="flex justify-center content-center flex-wrap gap-10 md:grid md:grid-cols-2 lg:grid-cols-3">
      <ProjectItem project={project1}></ProjectItem>
    </div>
  );
}
