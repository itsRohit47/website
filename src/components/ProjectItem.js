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
        <p className="text-gray-600 text-base mb-4">{project.description}</p>
        <div className="mb-4">
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Timeframe:</span>{" "}
            {project.startDate} to {project.endDate || "Ongoing"}
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Status:</span>{" "}
            {project.status === "ongoing" ? (
              <span className="text-green-500">Ongoing</span>
            ) : (
              <span className="text-blue-500">Completed</span>
            )}
          </p>
        </div>

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
