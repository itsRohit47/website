"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="border w-max px-6 py-2 rounded-full shadow-md backdrop-blur-xl">
      <div className="flex gap-4 font-medium">
        <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
          Home
        </Link>
        <h1>|</h1>
        <Link
          className={`link ${pathname === "/projects" ? "active" : ""}`}
          href="/projects"
        >
          Projects
        </Link>
        <h1>|</h1>
        <Link
          className={`link ${pathname === "/resume" ? "active" : ""}`}
          href="/resume"
        >
          Resume
        </Link>
        <h1>|</h1>
        <Link
          className={`link ${pathname === "/guestbook" ? "active" : ""}`}
          href="/guestbook"
        >
          Guestbook
        </Link>
      </div>
    </header>
  );
}
