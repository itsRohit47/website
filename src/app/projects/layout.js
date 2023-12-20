import Link from "next/link";
import Image from "next/image";

export default function ProjectsLayout({ children }) {
  return (
    <section>
      <main className="relative">
        <div className="absolute gap-2 top-5 left-4 hover:shadow-sm border rounded-md w-max p-2 bg-gray-50">
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
        <div className="absolute top-5 right-4 hover:shadow-sm border rounded-md w-max p-2 bg-gray-50">
          <Link href="/">About Me</Link>
        </div>
        <div className="h-max flex justify-center content-center px-24 pt-28 pb-16">
          <div>
            <h1 className="font-Metallica text-6xl lg:text-7xl text-gray-900 text-center">
              projects
            </h1>

            <div className="lg:hidden flex gap-4 justify-center text-gray-600 dark:text-zinc-100 font-medium">
              <Link href="/projects/academic">Academic</Link>
              <h1>|</h1>
              <Link href="/projects/personal">Personal</Link>
              <h1>|</h1>
              <Link href="/projects/freelance">Freelance</Link>
            </div>
            <br className="lg:hidden"></br>
            <p className="text-center text-gray-600 text-sm lg:text-lg">
              This includes the university assgined projects (acedemic),
              personal projects, and/or any freelance work i have done.
            </p>
            <br></br>
            <div className="flex p-2 flex-wrap gap-6 content-center justify-center">
              <Image
                src="/icons/vue.svg"
                width={40}
                height={40}
                alt="Rohit Bajaj"
              ></Image>
              <Image
                src="/icons/tailwind.svg"
                width={40}
                height={40}
                alt="Rohit Bajaj"
              ></Image>
              <Image
                src="/icons/html.svg"
                width={40}
                height={40}
                alt="Rohit Bajaj"
              ></Image>
              <Image
                src="/icons/css.svg"
                width={40}
                height={40}
                alt="Rohit Bajaj"
              ></Image>
              <Image
                src="/icons/js.svg"
                width={40}
                height={40}
                alt="Rohit Bajaj"
              ></Image>
              <Image
                src="/icons/vscode.svg"
                width={40}
                height={40}
                alt="Rohit Bajaj"
              ></Image>
              <Image
                src="/icons/next.svg"
                width={40}
                height={40}
                alt="Rohit Bajaj"
              ></Image>
              <Image
                src="/icons/aws.svg"
                width={40}
                height={40}
                alt="Rohit Bajaj"
              ></Image>
              <Image
                src="/icons/gcp.svg"
                width={40}
                height={40}
                alt="Rohit Bajaj"
              ></Image>
              <Image
                src="/icons/docker.svg"
                width={40}
                height={40}
                alt="Rohit Bajaj"
              ></Image>
              <Image
                src="/icons/k8.svg"
                width={40}
                height={40}
                alt="Rohit Bajaj"
              ></Image>
            </div>
            <hr className="mt-5"></hr>
          </div>
        </div>
      </main>
      <div className="hidden lg:grid grid-cols-6">
        <div className="flex content-center justify-center mt-20">
          {" "}
          <div className="flex h-max flex-col gap-5 text-gray-600  dark:text-zinc-100 font-medium text-lg py-10">
            <Link
              href="/projects/academic"
              className="hover:border-2 hover:bg-gray-100  rounded-sm px-2"
            >
              Academic
            </Link>
            <Link
              href="/projects/personal"
              className=" hover:border-2 hover:bg-gray-100  rounded-sm px-2"
            >
              Personal
            </Link>
            <Link
              href="/projects/freelance"
              className=" hover:border-2 hover:bg-gray-100  rounded-sm px-2"
            >
              Freelance
            </Link>
          </div>
        </div>
        <div className="col-span-4 px-10 mx-auto">{children}</div>
      </div>
      <div className="lg:hidden px-10"> {children}</div>
      <div className="mt-40 bg-gray-50 p-2">
        <p className="text-center font-bold">Made with 💗</p>
      </div>
    </section>
  );
}
