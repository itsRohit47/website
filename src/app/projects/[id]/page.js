import data from "../data.json";
import Image from "next/image";
export default function Page({ params }) {
  const selected = data.Projects.find((project) => project.id == params.id);

  return (
    <div className=" flex flex-col gap-4 min-h-full p-2 text-gray-800">
      <div className="">
        <Image
          className="rounded-lg w-full h-48 object-cover"
          src="/images/rainforests.jpg"
          height={80}
          width={400}
          alt="image of rainforests"
        ></Image>
      </div>
      <h1 className="text-4xl font-bold text-gray-900">{selected.name}</h1>
      <p className="text-green-700 font-bold">{selected.timeframe}</p>

      <div>
        <ul className="list-none flex gap-2 font-medium text-gray-600 ">
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

      <div className=" italic">
        <p className="text-gray-700">{selected.description}</p>
      </div>

      <div className="">
        <h2 className="text-2xl font-bold">My Role</h2>
        <p className="text-gray-700">{selected.myRole}</p>
      </div>
      {/* Add more sections for other details (tasks done, achievements, etc.) as needed */}

      <div className="">
        <h2 className="text-2xl font-bold">Team Members</h2>
        <ul className="list-inside list-none">
          {selected.teamMembers.map((member, index) => (
            <li key={index} className="text-gray-700">
              {member}
            </li>
          ))}
        </ul>

        {/* Add more sections for other details (images, screenshots, status, tags, etc.) as needed */}
      </div>
      <div className="flex justify-between content-center font-bold text-red-500 ">
        <span className="flex border rounded bg-gray-100 p-2">
          {" "}
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
          Previous
        </span>
        <span className="flex border rounded bg-gray-100 p-2">
          Next{" "}
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
        </span>
      </div>
    </div>
  );
}
