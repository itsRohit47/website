"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SunIcon } from "@heroicons/react/24/outline";

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between px-10 py-4 fixed w-full">
      <h1 className="text-2xl font-bold max-w-xl">Rohit.</h1>
      <div className="border flex gap-4 font-medium px-6 py-2 rounded-xl shadow-2xl backdrop-blur-xl">
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
      <div className="  rounded-full border shadow-xl bg-white backdrop-blur-xl p-2">
        <SunIcon className="w-6 h-6"></SunIcon>
      </div>
    </header>
  );
}
