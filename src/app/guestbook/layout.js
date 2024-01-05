import Link from "next/link";
import data from "../projects/data.json";

export default function ProjectsLayout({ children }) {
  return (
    <main className="lg:grid lg:grid-cols-4">
      <Link href="/">
        <div className="hidden sticky top-20 col-start-1 p-10 lg:flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </Link>
      <div className="lg:col-start-2 lg:col-span-2 flex flex-col gap-10 p-2 lg:p-5">
        {children}
      </div>
    </main>
  );
}
