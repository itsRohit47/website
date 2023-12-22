import Image from "next/image";

const me = {
  name: "Rohit Bajaj",
  cover: "/images/cover.jpg",
  image: "/images/profile.jpg",
  openingStatement: "A Recent IT graduate from Deakin University.",
  unilogo: "/images/deakin.png",
  higherEducation: "Bachelor of Information Technology",
  majors: "Cloud Computing and Computer Networking",
};

export default function Profile() {
  return (
    <div className="h-max w-80 p-2 border rounded-md flex-col gap-2 flex">
      <div className="relative mb-16 ">
        <Image
          className="rounded-md"
          src={me.cover}
          alt="its me"
          height={200}
          width={300}
        ></Image>
        <Image
          className="absolute rounded-full border shadow -bottom-12 left-5"
          src={me.image}
          alt="its me"
          height={100}
          width={100}
        ></Image>
      </div>
      <h1 className="text-2xl font-bold text-gray-900">{me.name}</h1>
      <p className="text-gray-600">{me.openingStatement}</p>
      <div className="flex gap-5 justify-center content-center">
        <Image
          src="/icons/github.svg"
          width={30}
          height={30}
          alt="github icon"
        ></Image>
        <Image
          src="/icons/linkedin.svg"
          width={40}
          height={40}
          alt="linkedin icon"
        ></Image>
        <button className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md flex gap-2 content-center justify-center">
          <a href="/files/resume.pdf" target="_blank" download>
            Resume
          </a>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            data-slot="icon"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
