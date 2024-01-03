import Link from "next/link";

export default function Nav() {
  return (
    <header className="border w-max px-6 py-2 rounded-full shadow-lg">
      <div className="flex gap-4  text-gray-600 dark:text-zinc-100 font-medium">
        <Link className="hover:text-purple-600" href="/projects">
          Projects
        </Link>
        <h1>|</h1>
        <Link className="hover:text-purple-600" href="/Resume">
          Resume
        </Link>
        <h1>|</h1>
        <Link className="hover:text-purple-600" href="/guestbook">
          Guestbook
        </Link>
      </div>
    </header>
  );
}
