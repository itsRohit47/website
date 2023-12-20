export default function AcademicLayout({ children }) {
  return (
    <div>
      <h1 className="text-3xl text-center font-Metallica lg:text-4xl">
        university projects
      </h1>
      <p className="text-sm text-center text-gray-600 lg:text-base">
        This includes projects that i completed as a part of my assignments at
        Deakin University (2021-2023).
      </p>
      <br></br>
      {children}
    </div>
  );
}
