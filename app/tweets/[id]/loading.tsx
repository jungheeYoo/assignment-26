import { PhotoIcon } from '@heroicons/react/24/solid';

export default function Loading() {
  return (
    <div className="flex flex-col gap-5 p-5">
      <div className="flex aspect-square items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-gray-300">
        <PhotoIcon className="h-28" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-5 w-40 rounded-md bg-red-200" />
      </div>
      <div className="h-10 w-80 rounded-md bg-gray-300" />
    </div>
  );
}
