export default function freelanceLayout({ children }) {
  return (
    <div>
      <h1 className="text-3xl text-center font-Metallica lg:text-4xl">
        freelance projects
      </h1>
      <p className="text-sm text-center text-gray-600 lg:text-base">
        The name says it all.
      </p>
      <br></br>
      <br></br>
      {children}
    </div>
  );
}
