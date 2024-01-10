export const metadata = {
  title: "Rohit Bajaj | Guestbook",
  description: "Rohit Bajaj (personal website)",
};

export default function Projects() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-semibold text-center">Guestbook</h1>
      <p className="text-gray-500 text-base text-center">
        Leave a mark, say me hi
      </p>
      <br></br>
      <div className="border rounded-md p-2 flex justify-between">
        <input
          type="text"
          className="mr-2 w-full outline-none bg-transparent"
          placeholder="Enter something..."
        />
        <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
}
