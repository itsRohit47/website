import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-slate-950">
      <header className="p-10">
        <p className="font-Metallica text-4xl text-center">Rohit bajaJ</p>
      </header>
      <section className="h-max p-2 font-normal text-gray-800 dark:text-zinc-100 text-center italic">
        <span className="relative">
          <span className="z-10">
            The mind is everything. What you think you become - Buddha
          </span>
        </span>
      </section>

      <section className="relative h-max p-10 flex content-center justify-center">
        <div className="flex flex-col gap-3">
          <div className="flex content-center justify-center">
            <Image
              className="rounded-full shadow-lg dark:shadow-slate-50"
              src="/profile.jpg"
              width={170}
              height={150}
              alt="Rohit Bajaj"
            ></Image>
          </div>
          <h1 className="h-max font-bold text-2xl text-gray-900 dark:text-zinc-100">
            Heyyy 👋 its me, <br></br>{" "}
            <span className="font-extrabold text-6xl tracking-widest">
              ROHIT
            </span>
          </h1>
        </div>
        <div className="absolute top-1/2 font-Metallica text-8xl text-gray-200 pt-24 px-10 dark:text-gray-50">
          <h1>
            it <br></br> graduate
          </h1>
        </div>
      </section>
      <div className="flex justify-center content-center">
        <div className="w-max mt-20 text-center text-2xl border-2 rounded-lg mx-2 py-2 px-5 cursor-pointer bg-gray-200 text-gray-600 tracking-widest font-bold">
          Download My Resume
        </div>
      </div>

      <section className="mt-5 p-4 text-2xl tracking-widest text-slate-950 dark:text-zinc-100 font-bold hover:underline flex content-center justify-center">
        {" "}
        <ul className="flex flex-col gap-5">
          <li>
            <Link href="/">WHOAMI</Link>
          </li>
          <li>
            <Link href="/">GET IN TOUCH</Link>
          </li>
          <li>
            <Link href="/">PROJECTS</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
