import Image from "next/image";
import Link from "next/link";
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
          <h1 className="text-gray-500 text-xl font-semibold tracking-widest p-4">
            ROHIT BAJAJ
          </h1>
          <div className="flex gap-3 font-semibold w-max text-sm p-4">
            <a
              href="https://github.com/itsRohit47"
              target="_blank"
              className="flex gap-2 hover:text-purple-600 hover:cursor-pointer"
            >
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

          <h1 className="text-2xl font-semibold bg-gray-50 p-3 rounded-md text-gray-700">
            Experienced Web Developer - Frontend and Backend | IT Graduate
            (Deakin University) | Certified AWS Cloud Practitioner
          </h1>
        </div>
      </div>
      <p className="text-gray-600 ">
        👋, Rohit this side. Having worked on couple of web development projects
        as a frontend and cloud enginner, i am ready to kickstart my
        professional career.{" "}
        <span className=" bg-purple-100 text-purple-500 p-1 rounded-md font-semibold">
          Get in touch if you need a quality developer in your team.
        </span>{" "}
        Actively seeking new opprtunities and available to start immideately.
      </p>

      <div className=" bg-gray-50 p-4 rounded-md text-gray-800 flex flex-col gap-4">
        <p className="">
          <Image
            src="/icons/quote.svg"
            width={80}
            height={80}
            alt="quote svg"
          ></Image>
          Rohit was an invaluable member of the Project Echo leadership team due
          to his niche skillset in cloud computing and strong web development
          skills. Rohit leads by example, approaching all tasks with genuine
          enthusiasm and his refreshing sense of optimism is not easily
          diminished. He actively seeks out challenging problems and
          opportunities to hone his skills, then delivers intelligent solutions.
          He can be relied on to keep a cool head when time is tight and will go
          above and beyond when needed to support the team. Mentoring Rohit this
          past year has been very rewarding as I have seen him take feedback on
          board and apply it immediately. Rohit is certainly one to watch
          because he will be doing big things in the devops space in the near
          future.
        </p>

        <div className="flex gap-4">
          <h1 className="font-bold hover:text-purple-500">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/quentin-cooke-666a3722a/"
            >
              Quentin Cooke - Senior Software Enginner at Deakin University
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
