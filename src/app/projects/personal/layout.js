export default function personalLayout({ children }) {
  return (
    <div>
      <h1 className="text-3xl text-center font-Metallica lg:text-4xl">personal projects</h1>
      <p className="text-sm text-center text-gray-600 lg:text-base">
        This includes anything that i worked on just to upskill or test
        something.
      </p>
      <br></br>
      <br></br>
      {children}
    </div>
  );
}
