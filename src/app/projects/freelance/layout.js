export default function freelanceLayout({ children }) {
  return (
    <div>
      <h1 className="text-3xl text-center font-Metallica">
        freelance projects
      </h1>
      <p className="text-sm text-center text-gray-600">The name says it all.</p>
      <br></br>
      {children}
    </div>
  );
}
