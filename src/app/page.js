import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center p-16 min-h-screen">
      <div className="before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-orange-200 after:via-yellow-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-orange-700 before:dark:opacity-10 after:dark:from-orange-900 after:dark:via-[#cfcfcf] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        {" "}
        <p className="font-Metallica text-4xl">Rohit bajaJ</p>
      </div>
      <span className="absolute top-20 left-0 p-16">
        <div className="border px-4 py-2 text-sm rounded-full bg-gray-100 text-gray-500">
          <span className="font-bold">Note:</span> This project is a work in
          progress.
        </div>
      </span>
    </main>
  );
}
