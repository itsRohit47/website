import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Rohit Bajaj | Guestbook",
  description: "Rohit Bajaj (personal website)",
};

export default function AboutLayout({ children }) {
  return (
    <section>
      <main className="relative">
        <div className="absolute gap-2 top-5 left-4 hover:shadow-sm border rounded-md w-max p-2 bg-gray-50">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              data-slot="icon"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
        </div>

        <div className="h-max flex justify-center content-center px-10 pt-28 pb-16">
          <div>
            <h1 className="font-Metallica text-6xl lg:text-7xl text-gray-900 text-center">
              guestbook
            </h1>

            <p className="text-center text-gray-600 text-sm lg:text-lg">
              Leave your mark, say me a 👋
            </p>
            <br></br>

            <hr className="mt-5"></hr>
          </div>
        </div>
      </main>

      <div className="px-10">{children}</div>
    </section>
  );
}
