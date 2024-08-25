// 파일 위치: app/(nav)/search/action.ts

import db from '@/lib/db';

export async function getSearchedTweet(keyword: string) {
  const lowerKeyword = keyword.toLowerCase();

  return await db.tweet.findMany({
    where: {
      tweet: {
        contains: lowerKeyword,
      },
    },
    orderBy: {
      created_at: 'desc',
    },
  });
}