import { Inter } from "next/font/google";
import "./globals.css";
import Love from "../components/Love";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {" "}
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <h1 className=" border p-2 bg-gray-50 text-center dark:text-gray-900">
          💡 <span className="font-bold">Note:</span> This project is a work in
          progress{" "}
        </h1>
        {children}
        <Love></Love>
      </body>
    </html>
  );
}
