import Link from "next/link";
import Nav from "../components/Navigation";
import Landing from "../components/Landing";
import Work from "../components/Work";

export const metadata = {
  title: "Rohit Bajaj | Home",
  description: "Rohit Bajaj (personal website)",
};

export default function Home() {
  return (
    <main className="flex-col flex gap-10 lg:gap-20">
      {/* <div className="flex justify-center m-6"> */}
      <Nav></Nav>
      {/* </div> */}
      {/* <div className="max-w-xl lg:max-w-4xl p-5 lg:mx-auto flex flex-col gap-10"> */}
      <Landing></Landing>
      <Work></Work>
      {/* </div> */}
    </main>
  );
}
