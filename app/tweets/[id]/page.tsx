import db from '@/lib/db';
import { UserIcon } from '@heroicons/react/24/solid';
import { notFound } from 'next/navigation';

async function getTweet(id: number) {
  const tweet = await db.tweet.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });
  return tweet;
}

export default async function TweetDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) return notFound();

  const tweet = await getTweet(id);
  if (!tweet) return notFound();

  return (
    <div>
      <div className="p-5">
        <h1 className="text-2xl font-semibold">{tweet.user.username}</h1>
        <p>{tweet.tweet}</p>
        <div className="mt-5 flex gap-3 items-center">
          <UserIcon className="h-10 w-10 text-gray-500" />
          <span>{tweet.user.username}</span>
        </div>
      </div>
    </div>
  );
}
