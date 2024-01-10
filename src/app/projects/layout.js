import ProjectsIcons from "../../components/ProjectsIcons";
export const metadata = {
  title: "Rohit Bajaj | Projects",
  description: "Rohit Bajaj (personal website)",
};

export default function ProjectsLayout({ children }) {
  return (
    <main className="flex flex-col gap-5">
      <h1 className="text-4xl font-semibold text-center">Projects</h1>
      <p className="text-gray-500 text-center text-base">
        Projects i have worked on, it includes university projects, personal
        projects, or anything i have worked on to learn something.
      </p>
      <ProjectsIcons></ProjectsIcons>

      <div className="lg:grid lg:grid-cols-4">
        <div className="lg:col-start-1 lg:col-span-4 flex flex-col gap-10 p-4 lg:px-10">
          {children}
        </div>
      </div>
    </main>
  );
}
