import Image from "next/image";
import Link from "next/link";
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
          <Link href="/about">Guestbook</Link>
        </div>
      </header>
      <section className="h-max px-10 font-normal text-gray-800 dark:text-zinc-100 text-center italic">
        <span className="relative">
          <span>
            The mind is everything. What you think you become - Buddha
          </span>
        </span>
      </section>

      <section className="p-2 flex content-center justify-center">
        <div className="flex flex-col">
          <div className="flex content-center justify-center">
            <Image
              className="rounded-full border m-2"
              src="/profile.jpg"
              width={100}
              height={100}
              alt="Rohit Bajaj"
            ></Image>
          </div>
          <h1 className="h-max font-bold text-2xl text-gray-900 dark:text-zinc-100">
            Heyyy 👋 its me, <br></br>{" "}
            <span className="font-extrabold text-5xl tracking-widest">
              ROHIT
            </span>
            <div className="mt-2 text-lg text-center cursor-pointer bg-gray-900 border-2 shadow-xl text-zinc-100 font-semibold w-max px-4 py-2 rounded-lg flex gap-2 content-center justify-center">
              Resume{" "}
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
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </div>
          </h1>
        </div>
      </section>
    </main>
  );
}
