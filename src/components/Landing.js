import Image from "next/image";
export default function landing() {
  return (
    <div className="flex flex-col gap-5">
      <Image
        className="rounded-full border"
        src="/images/profile.jpg"
        alt="thats me"
        width={60}
        height={60}
      ></Image>
      <h1 className="text-gray-900 text-2xl font-bold">
        IT graduate from Deakin University, AWS cloud practitioner, aspiring
        Developer and an IT enthusiast
      </h1>
      <p className="text-gray-600">
        I&apos;m Rohit, Welcome to my website, get to know more about me,
        checkout my projects, skills and more.
      </p>
      <div className="flex gap-4">
        <Image
          className="rounded-full"
          src="/icons/github.svg"
          alt="thats me"
          width={30}
          height={30}
        ></Image>
        <Image
          className="rounded-full"
          src="/icons/linkedin.svg"
          alt="thats me"
          width={40}
          height={40}
        ></Image>
      </div>
    </div>
  );
}
