import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Rohit Bajaj | Home",
  description: "Rohit Bajaj (personal website)",
};

const me = {
  name: "Rohit Bajaj",
  cover: "/images/cover.jpg",
  image: "/images/profile.jpg",
  openingStatement: "A Recent IT graduate from Deakin University.",
  unilogo: "/images/deakin.png",
  higherEducation: "Bachelor of Information Technology",
  majors: "Cloud Computing and Computer Networking",
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <header className="p-10">
        <p className="font-Metallica text-4xl text-center">Rohit . bajaJ</p>
        <div className="text-center font-Metallica text-2xl text-gray-800  dark:text-gray-50">
          <h1>it graduate</h1>
        </div>
        <div className="flex gap-4 mt-6 justify-center text-gray-600 dark:text-zinc-100 font-medium">
          <Link href="/projects">Projects</Link>
          <h1>|</h1>
          <Link href="/about">Whoami</Link>
          <h1>|</h1>
          <Link href="/guestbook">Guestbook</Link>
        </div>
      </header>
      <section className="h-max px-10 font-normal text-gray-800 dark:text-zinc-100 text-center italic">
        <span className="relative">
          <span>
            The mind is everything. What you think you become - Buddha
          </span>
        </span>
      </section>
      <section className="p-2 mt-5 flex content-center justify-center">
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
      </section>
    </main>
  );
}
