"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="border w-max px-6 py-2 rounded-xl shadow-2xl backdrop-blur-xl absolute">
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
      </div>
    </header>
  );
}
