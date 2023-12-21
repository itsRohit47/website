export default function Guestbook() {
  return (
    <div className="flex content-center justify-center">
      <div className="border rounded-md p-2">
        <input type="text" className="mr-2" placeholder="Enter something..." />
        <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
}
