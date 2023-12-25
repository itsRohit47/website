import data from "../data.json";
import Image from "next/image";
export default function Page({ params }) {
  const selected = data.Projects.find((project) => project.id == params.id);

  return (
    <div className="flex flex-col gap-4 min-h-full p-2 text-gray-800 lg:mx-auto lg:max-w-4xl text-sm">
      <Image
        className="rounded-lg w-full h-40 lg:h-52 object-cover border"
        src={selected.imageSource}
        height={80}
        width={400}
        alt="image of {selected.projectName}"
      ></Image>

      <h1 className="text-2xl lg:text-4xl font-bold text-gray-900">
        {selected.projectName}
      </h1>
      <p className="lg:text-base">{selected.subHeading}</p>
      <p className="text-red-700 font-bold">{selected.timeframe}</p>
      <div className=" italic text-sm lg:text-base">
        <p className="text-gray-700">{selected.description}</p>
      </div>

      <div>
        <ul className="list-none flex gap-2 flex-wrap font-medium text-sm lg:text-base text-gray-600 ">
          {selected.tags.map((tag, index) => (
            <li
              key={index}
              className="text-gray-700 border rounded bg-gray-100 px-2 py-1 "
            >
              #{tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-md">
        <ul className="flex flex-col gap-4">
          {" "}
          {selected.myRole.map((role, index) => (
            <li key={index} className="text-gray-700">
              <span className="font-semibold text-base lg:text-lg">
                {" "}
                {role.title}
              </span>
              <ul className="list-inside mt-4 lg:text-base text-justify">
                {role.tasks.map((task, index) => (
                  <li key={index} className="mb-2">
                    {task}
                    <hr></hr>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-around content-center mt-20">
        <span className="flex">
          {" "}
          <a
            href={`/projects/${selected.id}`}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </a>
        </span>
        <span className="flex">
          <a
            href={`/projects/${selected.id + 1}`}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>{" "}
        </span>
      </div>
    </div>
  );
}
