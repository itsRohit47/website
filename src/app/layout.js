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
        <div className="flex justify-center sticky top-2">
          <Nav></Nav>
        </div>
        <div className="min-h-screen">{children}</div>
        <Love></Love>
      </body>
    </html>
  );
}
