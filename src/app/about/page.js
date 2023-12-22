import Image from "next/image";
import Profile from "../../components/Profile";
import Love from "../../components/Love";
const me = {
  name: "Rohit Bajaj",
  cover: "/images/cover.jpg",
  image: "/images/profile.jpg",
  openingStatement: "A Recent IT graduate from Deakin University.",
  unilogo: "/images/deakin.png",
  higherEducation: "Bachelor of Information Technology",
  majors: "Cloud Computing and Computer Networking",
};

export default function About() {
  return (
    <div>
      <div className="flex flex-wrap content-center justify-center gap-10">
        <Profile></Profile>
        <div className="h-max w-80 p-2 border rounded-md flex-col gap-2 flex">
          <Image
            className="rounded-md"
            src={me.unilogo}
            alt="its me"
            height={200}
            width={300}
          ></Image>
          <br></br>
          <h1 className="text-2xl font-bold text-gray-900">
            {me.higherEducation}
          </h1>
          <p className="text-gray-600">{me.majors}</p>
          <p className="text-gray-600">
            <span className="font-semibold">WAM : </span>
            Distinction
          </p>
          <button className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md flex gap-2 content-center justify-center">
            <a href="/files/transcript.pdf" target="_blank" download>
              Academic Transcript
            </a>{" "}
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
                d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
              />
            </svg>
          </button>
        </div>
        <div className="h-max w-80 p-2 border rounded-md flex-col gap-2 flex">
          <Image
            className="rounded-md"
            src="/images/awscert.png"
            alt="its me"
            height={200}
            width={300}
          ></Image>
          <br></br>
          <h1 className="text-2xl font-bold text-gray-900">911/1000</h1>

          <button className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md flex gap-2 content-center justify-center">
            <a
              href="https://www.credly.com/badges/e7a90577-ac6b-439f-baed-5a8b16c6a371/linked_in_profile"
              target="_blank"
            >
              View Credential
            </a>{" "}
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
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
