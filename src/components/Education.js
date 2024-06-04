import Image from "next/image";
const work = [
  {
    name: "Bachelor of Information Technology",
    role: "Deakin University",
    icon: "/images/deakin.svg",
    timeframe: "Mar 2021 - Nov 2023",
  },
];

export default function Education() {
  return (
    <div className="dark:text-white h-max p-2 border border-gray-200 rounded-lg flex flex-col gap-4 shadow-sm">
      <div className="w-full flex font-semibold gap-4">
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
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>

        <span className="text-base">Education</span>
      </div>
      <div>
        {work.map((company, index) => (
          <div key={index} className="flex gap-2 p-2">
            <div className="">
              <Image
                className="rounded-full w-20 h-20"
                src={company.icon}
                alt={company.name}
                height={50}
                width={50}
              ></Image>
            </div>
            <div className="flex-flex-col gap-2 w-full">
              <h1 className="font-semibold text-base">{company.name}</h1>
              <p className=" text-base">{company.role}</p>
              <p className="">{company.timeframe}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
