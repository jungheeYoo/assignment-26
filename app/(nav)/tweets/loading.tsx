export default function Loading() {
  return (
    <div className="p-5 animate-pulse flex flex-col gap-5 ">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="*:rounded-md flex gap-5 ">
          <div className=" size-10 rounded-md bg-gray-300" />
          <div className="flex flex-col gap-2 *:rounded-md">
            <div className="bg-gray-300 h-5 w-40" />
          </div>
        </div>
      ))}
    </div>
  );
}
