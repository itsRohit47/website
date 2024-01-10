import "./globals.css";
import Love from "../components/Love";
import Nav from "../components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {" "}
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
      </head>
      <body className="text-sm leading-7 lg:text-base">
        <div className="bg-gray-50 p-2 text-center font-bold">
          Note:{" "}
          <span className="font-semibold">
            This project is a work in progress.
          </span>
        </div>
        <div className="flex justify-center m-2  sticky top-2">
          <Nav></Nav>
        </div>
        <div className="min-h-screen mt-5">{children}</div>
        <Love></Love>
      </body>
    </html>
  );
}
