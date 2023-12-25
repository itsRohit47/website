import Link from "next/link";
import Profile from "../components/Profile";

export const metadata = {
  title: "Rohit Bajaj | Home",
  description: "Rohit Bajaj (personal website)",
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
          <Link href="/projects/academic">Projects</Link>
          <h1>|</h1>
          <Link href="/about">Whoami</Link>
          <h1>|</h1>
          <Link href="/guestbook">Guestbook</Link>
        </div>
      </header>
      <section className="h-max px-10 flex flex-col gap-5">
        <span className="italic text-center text-gray-600">
          The mind is everything. What you think you become - Buddha
        </span>
        <div className="flex content-center justify-center">
          {" "}
          <Profile></Profile>
        </div>
      </section>
    </main>
  );
}
