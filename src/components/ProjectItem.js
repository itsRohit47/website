import Image from "next/image";

export default function Item({ project }) {
  return (
    <div className="hover:bg-gray-50 hover:rounded-lg hover:cursor-pointer p-4 flex flex-col gap-3">
      <div className="text-gray-400">| {project.timeframe}</div>
      <h1 className="font-bold text-gray-800 text-lg">
        {project.projectName} - {project.subHeading}
      </h1>
      <p className="text-gray-600">{project.description}</p>
      <ul className="list-none flex gap-2 flex-wrap text-white ">
        {project.tags.map((tag, index) => (
          <li key={index} className=" border rounded bg-purple-500 p-1 ">
            {tag}
          </li>
        ))}
      </ul>
      <div className="flex gap-2 text-purple-600 font-semibold">
        <h1>Read More</h1>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
}
