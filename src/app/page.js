import Landing from "../components/Landing";
import Work from "../components/Work";
import Education from "../components/Education";

export const metadata = {
  title: "Rohit Bajaj | Home",
  description: "Rohit Bajaj (personal website)",
};

export default function Home() {
  return (
    <main className="lg:grid lg:grid-cols-4">
      <div className="lg:col-start-2 lg:col-span-2 flex flex-col gap-10 p-5">
        <Landing></Landing>
        <Education></Education>
        <Work></Work>
      </div>
    </main>
  );
}
