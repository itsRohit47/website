import "./globals.css";
import Love from "../components/Love";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {" "}
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
      </head>
      <body>
        <h1 className=" border p-2 bg-gray-50 text-center dark:text-gray-900">
          💡 <span className="font-bold">Note:</span> This project is a work in
          progress{" "}
        </h1>
        <div className="min-h-screen">{children}</div>
        <Love></Love>
      </body>
    </html>
  );
}
