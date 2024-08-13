import Link from 'next/link';
import { formatToTimeAgo } from '@/lib/utils';

interface ListTweetProps {
  tweet: string;
  created_at: Date;
  id: number;
}

export default function ListTweet({ tweet, created_at, id }: ListTweetProps) {
  return (
    <Link href={`/tweets/${id}`} className="flex gap-5">
      <div className="flex items-center justify-center gap-1 ">
        <span className="text-lg text-black">{tweet}</span>
        <span className="text-sm text-neutral-400 ml-3">
          {formatToTimeAgo(created_at.toString())}
        </span>
      </div>
    </Link>
  );
}
