import LastUpdated from "../components/LastUpdated";
export const metadata = {
  title: "Rohit Bajaj | Home",
  description: "Rohit Bajaj (personal website)",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center h-screen gap-5">
      <h1 className="text-9xl font-medium">Namaste World 🙏</h1>
      <LastUpdated></LastUpdated>
    </main>
  );
}
