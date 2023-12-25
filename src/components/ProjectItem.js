import Image from "next/image";

export default function Item({ project }) {
  return (
    <div className="w-80 h-max border rounded-md shadow-lg hover:shadow-xl cursor-pointer overflow-hidden">
      <div className="relative h-48">
        <Image
          className="object-cover w-full h-full border-b-2 border-gray-200 rounded-t-md"
          width={384}
          height={200}
          src={project.imageSource}
          alt={project.projectName}
        />
      </div>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">{project.projectName}</h1>
        <p className="text-gray-600 text-base mb-4">{project.subHeading}</p>
        <ul className="list-none flex gap-2 flex-wrap font-medium text-sm lg:text-base text-gray-600 ">
          {project.tags.map((tag, index) => (
            <li
              key={index}
              className="text-gray-700 border rounded bg-gray-100 px-2 py-1 "
            >
              #{tag}
            </li>
          ))}
        </ul>
        <br></br>
        <div className="flex justify-between items-center">
          <a
            href={`/projects/${project.id}`}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
