import Link from "next/link";

export const metadata = {
  title: "Rohit Bajaj | Guestbook",
  description: "Rohit Bajaj (personal website)",
};

export default function Projects() {
  return (
    <div className="flex flex-col gap-5 mx-auto">
      <h1 className="text-4xl font-semibold text-center">Resume</h1>

      <div className="w-80 h-max flex flex-col gap-10 border rounded-md shadow-sm p-10">
        <div className="flex content-center justify-center">
          <div className="bg-purple-100 p-10 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#9333ea"
              class="w-16 h-16"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            download
            href="/files/resume.pdf"
            className="border p-2 w-full text-center rounded-md shadow bg-gray-800 text-white font-bold"
          >
            Download
          </Link>
        </div>
      </div>
    </div>
  );
}
