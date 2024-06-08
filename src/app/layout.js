import "./globals.css";
import Nav from "../components/Navigation";
import {
  ArrowLongUpIcon,
  ArrowLongDownIcon,
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/outline";
import LastUpdated from "../components/LastUpdated";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {" "}
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
      </head>
      <body className="text-sm leading-7 lg:text-base fixed dark ">
        <div className="dark:bg-zinc-900">
          <div className="text-white font-semibold text-sm p-1 bg-blue-500">work in progress</div>
          <div className="absolute top-10 w-full text-center">
            <span id="page-name" className="text-white">hi</span>
          </div>
          <Nav></Nav>

          <div className="h-screen w-screen">
            <div className="absolute top-32 left-1/2 -translate-x-1/2 ">
              <div className="px-2 py-1 border rounded-lg text-gray-500 dark:text-white border-b-4">
                <ArrowLongUpIcon className="w-6 h-6"></ArrowLongUpIcon>{" "}
              </div>
            </div>
            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 ">
              <div className="px-2 py-1 border rounded-lg text-gray-500 dark:text-white border-b-4">
                <ArrowLongDownIcon className="w-6 h-6"></ArrowLongDownIcon>
              </div>
            </div>
            <div className="absolute left-32 top-1/2 -translate-y-1/2">
              <div className="px-2 py-1 border rounded-lg text-gray-500 dark:text-white border-b-4">
                <ArrowLongLeftIcon className="w-6 h-6"></ArrowLongLeftIcon>
              </div>
            </div>
            <div className="absolute right-32 top-1/2 -translate-y-1/2">
              <div className="px-2 py-1 border rounded-lg text-gray-500 dark:text-white border-b-4">
                <ArrowLongRightIcon className="w-6 h-6"></ArrowLongRightIcon>
              </div>
            </div>
          </div>
          <div className="w-screen absolute top-1/2 -translate-y-1/2 flex items-center justify-center p-10">
            {children}
          </div>
          <div className="absolute bottom-10 w-full text-center">
            <LastUpdated></LastUpdated>
          </div>
        </div>
      </body>
    </html>
  );
}
