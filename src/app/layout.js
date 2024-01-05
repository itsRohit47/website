import "./globals.css";
import Love from "../components/Love";
import Nav from "../components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {" "}
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
      </head>
      <body className="text-sm bg-slate-50">
        <div className="flex justify-center m-2  sticky top-2">
          <Nav></Nav>
        </div>
        <div className="min-h-screen">{children}</div>
        <Love></Love>
      </body>
    </html>
  );
}
