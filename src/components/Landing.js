import Image from "next/image";
export default function landing() {
  return (
    <div className="flex flex-col gap-5">
      <div className="lg:flex gap-5">
        <div>
          <Image
            className="rounded-lg border object-cover h-52 object-top shadow-md"
            src="/images/profile.jpg"
            alt="thats me"
            width={400}
            height={100}
          ></Image>
          <br></br>
        </div>
        <div>
          <h1 className="text-gray-500 text-xl font-semibold tracking-widest">
            ROHIT BAJAJ
          </h1>
          <br></br>
          <h1 className="text-2xl font-semibold bg-gray-50 p-3 rounded-md text-gray-500">
            Experienced Web Developer - frontend and backend | IT Graduate
            (Deakin University) | Certified AWS Cloud Practitioner
          </h1>
        </div>
      </div>
      <p className="text-gray-600 ">
        Hi, Rohit this side. Having worked on couple of web development projects
        as a frontend and cloud enginner, i am ready to kickstart my
        professional career.{" "}
        <span className=" bg-purple-100 text-purple-500 p-1 rounded-md font-semibold">
          Get in touch if you need a quality developer in your team.
        </span>{" "}
        Actively seeking new opprtunities and available to start immideately.
      </p>
      <div className="flex flex-col gap-3 font-semibold w-max text-sm">
        <a
          href="https://github.com/itsRohit47"
          target="_blank"
          className="flex gap-2 hover:text-purple-600 hover:cursor-pointer"
        >
          <h1>Follow me on</h1>
          <Image
            className="rounded-full"
            src="/icons/github.svg"
            alt="thats me"
            width={25}
            height={25}
          ></Image>
        </a>
        <a
          href="https://www.linkedin.com/in/iamrohitbajaj/"
          target="_blank"
          className="flex gap-2 hover:text-purple-600 hover:cursor-pointer"
        >
          <h1>Follow me on</h1>
          <Image
            className="rounded-full"
            src="/icons/linkedin.svg"
            alt="thats me"
            width={25}
            height={25}
          ></Image>
        </a>
        <div className="flex gap-2 hover:text-purple-600 hover:cursor-pointer">
          <a href="mailto:rohitbajaj13@yahoo.com">rohitbajaj13@yahoo.com</a>
        </div>
      </div>
    </div>
  );
}
