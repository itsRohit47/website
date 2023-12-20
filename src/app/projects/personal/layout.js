export default function personalLayout({ children }) {
  return (
    <div>
      <h1 className="text-3xl text-center font-Metallica">personal projects</h1>
      <p className="text-sm text-center text-gray-600">
        This includes anything that i worked on just to upskill or test
        something.1
      </p>
      <br></br>
      {children}
    </div>
  );
}
