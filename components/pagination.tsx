import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
}

export default function Pagination({
  currentPage,
  totalCount,
  pageSize,
}: PaginationProps) {
  const totalPages = Math.ceil(totalCount / pageSize);
  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;

  return (
    <div className="flex justify-between items-center py-4">
      <div>
        <span>
          Page {currentPage} of {totalPages}
        </span>
      </div>
      <div className="flex gap-2">
        <Link href={`/tweets?page=${currentPage - 1}`} passHref>
          <button
            disabled={!hasPreviousPage}
            className={`px-3 py-1 rounded-full ${
              hasPreviousPage
                ? 'bg-red-200 text-black'
                : 'bg-gray-400 text-white cursor-not-allowed'
            }`}
          >
            &lt; Previous
          </button>
        </Link>
        <Link href={`/tweets?page=${currentPage + 1}`} passHref>
          <button
            disabled={!hasNextPage}
            className={`px-3 py-1 rounded-full ${
              hasNextPage
                ? 'bg-red-200 text-black'
                : 'bg-gray-400 text-white cursor-not-allowed'
            }`}
          >
            Next &gt;
          </button>
        </Link>
      </div>
    </div>
  );
}
