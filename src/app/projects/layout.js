import ProjectsIcons from "../../components/ProjectsIcons";
export const metadata = {
  title: "Rohit Bajaj | Projects",
  description: "Rohit Bajaj (personal website)",
};

export default function ProjectsLayout({ children }) {
  return (
    <main className="flex flex-col gap-5">
      <div className="bg-gray-50 px-10 py-20">
        <h1 className="text-4xl font-medium">PROJECTS</h1>
        <br></br>
        <p className="text-gray-500 text-base max-w-xl">
          Projects i have worked on, it includes university projects, personal
          projects, or anything i have worked on to learn something.
        </p>
        <br></br>
        <ProjectsIcons></ProjectsIcons>
      </div>
      <div className="p-10">
        <div className="">{children}</div>
      </div>
    </main>
  );
}
