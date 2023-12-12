import Link from "next/link";
export const metadata = {
  title: "Leave a mark",
  description: "Sign my guestbook and leave your mark.",
};

export default function Guestbook() {
  return (
    <main className="py-10 px-6">
      <div className="flex gap-10">
        <div className="w-max h-max p-2 rounded-xl bg-gray-100 dark:bg-inherit dark:border mt-2 hover:shadow-md">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Sign My Guestbook</h1>
          <p className="text-sm text-gray-600 dark:text-zinc-100">
            Leave your mark that you visited my website, maybe provide some
            feedback if you have any, or simply say hi, bring life to my
            website.
          </p>
        </div>
      </div>
      <div className="flex justify-center content-center mt-20">
        <h1 className="w-max border p-2 bg-gray-50 rounded-full dark:text-gray-900">
          💡 <span className="font-bold">Note:</span> This project is a work in
          progress{" "}
        </h1>
      </div>
    </main>
  );
}
