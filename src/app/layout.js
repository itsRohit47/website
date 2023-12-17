import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rohit Bajaj",
  description: "Rohit Bajaj (personal website)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {" "}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <h1 className=" border p-2 bg-gray-50 text-center dark:text-gray-900">
          💡 <span className="font-bold">Note:</span> This project is a work in
          progress{" "}
        </h1>
        {/* <div className="absolute top-20 blur-3xl -z-10 h-max w-screen flex content-center justify-center">
          <Image
            className=""
            src="/favicon.ico"
            width={500}
            height={500}
            alt="Picture of the author"
          ></Image>
        </div> */}
        {children}
      </body>
    </html>
  );
}
