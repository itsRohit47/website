import Link from "next/link";

export default function ProjectsLayout({ children }) {
  return (
    <main className="lg:grid lg:grid-cols-4">
      <div className="lg:col-start-2 lg:col-span-2 flex flex-col gap-10 p-4 lg:p-5">
        {children}
      </div>
    </main>
  );
}
