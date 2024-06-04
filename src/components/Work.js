import Image from "next/image";
const work = [
  {
    name: "Deakin University",
    role: "Seasonal Academic - School of IT",
    icon: "/images/deakin.svg",
    timeframe: "Feb 2024 - Present",
  },
];

export default function Work() {
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
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
          />
        </svg>
        <span className="text-base">Employment History</span>
      </div>
      <div>
        {work.map((company, index) => (
          <div key={index} className="flex gap-2 p-2">
            <Image
              className=" border border-gray-300 rounded-full w-16 h-16 object-contain"
              src={company.icon}
              alt={company.name}
              height={50}
              width={50}
            ></Image>

            <div className="flex flex-col w-full">
              <h1 className="font-semibold text-base">{company.name}</h1>
              <p className=" text-base">{company.role}</p>
              <p className=" ">{company.timeframe}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
