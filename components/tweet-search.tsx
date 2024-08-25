import Link from 'next/link';

interface TweetSearchListProps {
  initialTweets: { id: number; tweet: string; created_at: Date }[];
  keyword: string;
}

export default function TweetSearch({
  initialTweets,
  keyword,
}: TweetSearchListProps) {
  if (initialTweets.length === 0) {
    return <p>{keyword}에 대한 트윗이 없습니다.</p>;
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {initialTweets.map((tweet) => (
        <Link
          href={`/tweets/${tweet.id}`}
          key={tweet.id}
          className="border-b pb-2"
        >
          <div>
            <p>{tweet.tweet}</p>
            <p className="text-xs text-gray-500">
              {new Date(tweet.created_at).toLocaleString()}{' '}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
