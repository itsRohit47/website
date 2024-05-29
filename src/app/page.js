import Work from "../components/Work";
import Education from "../components/Education";

export const metadata = {
  title: "Rohit Bajaj | Home",
  description: "Rohit Bajaj (personal website)",
};

export default function Home() {
  return (
    <main className="">
      <main className="flex flex-col gap-5">
        <div className="bg-gray-50 px-10 py-20 leading-8 flex flex-col gap-5">
          <h1 className="text-2xl font-bold max-w-xl">Rohit.</h1>
          <h1 className="text-4xl font-medium max-w-xl">
            Aspiring Engineer (IT)
          </h1>
          <h1 className="text-3xl">Software/Cloud/DevOps</h1>
          <p className="text-gray-500 text-base max-w-2xl">
            👋, Rohit this side. Having worked on couple of web development
            projects as a frontend and cloud enginner, i am ready to kickstart
            my professional career.{" "}
            <span className=" bg-purple-100 text-purple-500 p-1 rounded-md font-medium">
              Get in touch if you need a quality developer in your team.
            </span>{" "}
            Actively seeking new opprtunities and available to start
            immideately.
          </p>
        </div>
      </main>
      <div className="grid grid-cols-3 gap-10 p-10">
        <div className="col-span-2 text-7xl font-thin bg-gray-50 p-2 flex items-center justify-center text-center">This project is a work in progress{" "}🚀</div>
        <div className="flex flex-col gap-5">
          <Education></Education>
          <Work></Work>
        </div>
      </div>
    </main>
  );
}
