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
        IT Graduate (Deakin University) | Certified AWS Cloud Practitioner |
        Aspiring Developer and Passionate IT Enthusiast
      </h1>
      <p className="text-gray-600">
        As a highly motivated IT graduate, I bring a wealth of hands-on
        experience in cloud platforms, specifically AWS and GCP, coupled with a
        robust background in web and software development through various
        projects. Recognized for being a fast learner and a collaborative
        professional, I am actively seeking entry-level IT positions to initiate
        a rewarding career journey in the dynamic realm of technology. My
        commitment to excellence and passion for innovation make me a valuable
        asset in any professional setting.
      </p>
      <div className="flex flex-col gap-4 font-semibold text-base">
        <div className="flex gap-2 hover:text-purple-600 hover:cursor-pointer">
          <h1>Follow me on</h1>
          <Image
            className="rounded-full"
            src="/icons/github.svg"
            alt="thats me"
            width={25}
            height={25}
          ></Image>
        </div>
        <div className="flex gap-2 hover:text-purple-600 hover:cursor-pointer">
          <h1>Follow me on</h1>
          <Image
            className="rounded-full"
            src="/icons/linkedin.svg"
            alt="thats me"
            width={25}
            height={25}
          ></Image>
        </div>
      </div>
    </div>
  );
}
