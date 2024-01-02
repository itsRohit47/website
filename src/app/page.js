import Link from "next/link";
import Nav from "../components/Navigation";
import Landing from "../components/Landing";

export const metadata = {
  title: "Rohit Bajaj | Home",
  description: "Rohit Bajaj (personal website)",
};

export default function Home() {
  return (
    <main className="flex-col flex gap-20">
      <div className="flex justify-center m-2">
        <Nav></Nav>
      </div>
      <div className="lg:max-w-4xl p-2 lg:mx-auto">
        <Landing></Landing>
      </div>
    </main>
  );
}
