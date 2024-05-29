import Image from "next/image";
import Link from "next/link";

export default function Item({ project }) {
  return (
    <div className="p-10 border shadow-2xl flex flex-col gap-5 rounded-xl w-[360px]">
      <h1 className="font-semibold text-gray-800 text-lg">
        {project.projectName} - {project.subHeading}
      </h1>
      <p className="text-gray-600">{project.description}</p>

      <div className="flex gap-2 text-purple-500 font-semibold hover:text-purple-600">
        <Link href={`/projects/${project.slug}`}>Read More</Link>{" "}
      </div>
    </div>
  );
}
