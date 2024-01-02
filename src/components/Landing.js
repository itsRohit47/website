import Image from "next/image";
export default function landing() {
  return (
    <div className="flex flex-col gap-5">
      <Image
        className="rounded-full border"
        src="/images/profile.jpg"
        alt="thats me"
        width={50}
        height={50}
      ></Image>
      <h1 className="text-gray-900 text-2xl font-bold">
        IT graduate from Deakin University, AWS cloud practitioner, aspiring
        Developer and an IT enthusiast
      </h1>
      <p className="text-gray-600">
        Welcome to my website, get to know more about me.
      </p>
      <div><Image
        className="rounded-full border"
        src="/images/profile.jpg"
        alt="thats me"
        width={50}
        height={50}
      ></Image></div><Image
        className="rounded-full border"
        src="/images/profile.jpg"
        alt="thats me"
        width={50}
        height={50}
      ></Image>
    </div>
  );
}
