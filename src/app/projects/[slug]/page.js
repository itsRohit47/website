import data from "../../../data/data.json";
import Link from "next/link";
import Image from "next/image";

export default function Page({ params }) {
  const selected = data.Projects.find((project) => project.slug == params.slug);

  return (
    <div className="flex flex-col gap-6 text-gray-900 ">
      <div className="flex gap-2">
        <div className="my-auto">
          <Link href="/projects">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-8 h-8"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
                clip-rule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <div className="text-2xl font-semibold">{selected.projectName}</div>

        <div className="border-black h-max px-2 py-1 w-max rounded-md bg-purple-50 text-purple-500 font-bold">
          {selected.type}
        </div>
      </div>
      <div>{selected.description}</div>
      <div className="text-red-700 font-bold">{selected.timeframe}</div>
      <ul className="flex flex-col flex-wrap">
        {selected.links.map((link, index) => (
          <Link
            href={link}
            target="_blank"
            key={index}
            className=" text-blue-600"
          >
            {link}
          </Link>
        ))}
      </ul>
      <ul className="flex gap-10 overflow-scroll lg:flex-wrap">
        {selected.media.map((i, index) => (
          <Image
            className="rounded-lg border object-cover h-52 shadow-md"
            src={i}
            key={index}
            width={400}
            height={100}
            alt="images"
          ></Image>
        ))}
      </ul>
      <div className="">{selected.detailed}</div>
      <div>
        <h1 className="text-lg font-semibold mb-2">
          Roles and Responsibilities
        </h1>
        <ul className="list-disc list-inside">
          {selected.roleAndResponsibilities.map((r, index) => (
            <li key={index} className="mb-2">
              {r}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="text-lg font-semibold mb-2">Skills Learned</h1>
        <ul className="list-disc list-inside">
          {selected.skills.map((skill, index) => (
            <li key={index} className=" ">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
