export default function Bones() {
  return (
    <>
      {[...Array(8)].map((bones, index) => (
        <div key={index} className="mt-5 md:w-3/5 mx-auto">
          <div className="bg-gray-200 rounded-md p-4 animate-pulse">
            <div className="bg-gray-300 h-6 rounded-sm mb-2"></div>
            <div className="bg-gray-300 h-6 rounded-sm mb-2"></div>
            <div className="bg-gray-300 h-6 rounded-sm"></div>
          </div>
        </div>
      ))}
    </>
  );
}
