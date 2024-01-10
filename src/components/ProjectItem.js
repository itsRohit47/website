import Image from "next/image";
import Link from "next/link";

export default function Item({ project }) {
  return (
    <div className="hover:cursor-pointer p-4 flex flex-col gap-3 lg:w-96 border rounded-md">
      <div className="text-gray-400">| {project.timeframe}</div>
      <h1 className="font-semibold text-gray-800 text-lg">
        {project.projectName} - {project.subHeading}
      </h1>
      <p className="text-gray-600">{project.description}</p>
      <ul className="list-none flex gap-2 flex-wrap text-purple-500 ">
        {project.tags.map((tag, index) => (
          <li key={index} className=" border rounded bg-purple-50 p-1 ">
            {tag}
          </li>
        ))}
      </ul>
      <div className="flex gap-2 text-purple-500 font-semibold hover:text-purple-600">
        <Link href={`/projects/${project.slug}`}>Read More</Link>{" "}
      </div>
    </div>
  );
}
