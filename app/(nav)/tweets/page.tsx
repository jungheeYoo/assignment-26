import TweetList from '@/components/tweet-list';
import Pagination from '@/components/pagination';
import db from '@/lib/db';
import { Prisma } from '@prisma/client';
import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/solid';

async function getInitialTweets(page: number, pageSize: number) {
  const tweets = await db.tweet.findMany({
    select: {
      tweet: true,
      created_at: true,
      id: true,
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: {
      created_at: 'desc',
    },
  });
  return tweets;
}

async function getTweetCount() {
  const count = await db.tweet.count();
  return count;
}

export type InitialTweets = Prisma.PromiseReturnType<typeof getInitialTweets>;

export default async function TweetsPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams.page || '1', 10);
  const PAGE_SIZE = 10;

  const initialTweets = await getInitialTweets(page, PAGE_SIZE);
  const tweetCount = await getTweetCount();

  return (
    <div className="py-8 px-6 relative">
      <h1 className="text-2xl font-bold mb-4">All Tweets</h1>
      <TweetList initialTweets={initialTweets} />
      <Pagination
        currentPage={page}
        totalCount={tweetCount}
        pageSize={PAGE_SIZE}
      />
      <Link
        href="/tweets/add"
        className="bg-blue-400 flex items-center justify-center rounded-full size-12 absolute top-20 right-8 text-white transition-colors hover:bg-blue-200"
      >
        <PlusIcon className="size-10" />
      </Link>
    </div>
  );
}
