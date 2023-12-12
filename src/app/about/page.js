import Link from "next/link";

export const metadata = {
  title: "Rohit Bajaj | About",
  description: "Know me better",
};

export default function About() {
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
          <h1 className="text-3xl font-bold">About</h1>
          <p className="text-sm text-gray-600 dark:text-zinc-100">
            Get to know me better, who am i and what are my core skills.
          </p>
        </div>
      </div>
      <div className="">
        <h1 className="mt-10 text-2xl font-bold">Background</h1>
        <br></br>
        <p>
          Hello, I&apos;m Rohit, a 21-year-old male international student
          currently residing in Australia 🦘. I arrived here in early 2022,
          taking advantage of the lifted COVID travel restrictions to pursue
          higher education after completing my Year 12 in Punjab, India.{" "}
          <br></br>
          <br></br> During my final years in high school (Year 11 to 12), I
          delved into various subjects such as physics, chemistry, mathematics,
          and computer science. Upon achieving a commendable high school grade
          of 94%, I found myself pondering about my next steps. Reflecting on my
          academic journey, I discovered a genuine interest in computer science
          💻, particularly drawn to the logic involved in programming, an area I
          had dabbled in during high school. <br></br>
          <br></br>The turning point occurred during the summer of 2020 when
          COVID lockdowns prompted me to explore programming independently. I
          vividly recall stumbling upon a &ldquo;Learn HTML in 60 minutes&ldquo;
          video on YouTube during a casual family dinner. Stepping outside the
          confines of the school syllabus, I found the experience refreshing and
          thoroughly enjoyable. This initial foray into HTML ignited my
          curiosity, leading me to delve deeper into web development, ultimately
          solidifying my decision to pursue a degree in Information Technology.
        </p>

        <h1 className="mt-10 text-2xl font-bold">Higher Education</h1>
        <br></br>
        <p></p>
      </div>
      <div className="flex justify-center content-center mt-10">
        <h1 className="w-max border p-2 bg-gray-50 rounded-full dark:text-gray-900">
          💡 <span className="font-bold">Note:</span> This project is a work in
          progress{" "}
        </h1>
      </div>
    </main>
  );
}
