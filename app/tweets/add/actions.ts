'use server';

import { z } from 'zod';
import db from '@/lib/db';
import getSession from '@/lib/session';
import { redirect } from 'next/navigation';

const tweetSchema = z.object({
  tweet: z.string({
    required_error: 'tweet is required',
  }),
});

export async function uploadTweet(_: any, formData: FormData) {
  const data = {
    tweet: formData.get('tweet'),
  };

  const result = tweetSchema.safeParse(data);
  //console.log(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const session = await getSession();
    if (session.id) {
      const post = await db.tweet.create({
        data: {
          tweet: result.data.tweet,
          user: {
            connect: {
              id: session.id,
            },
          },
        },
        select: {
          id: true,
        },
      });
      redirect(`/tweets/${post.id}`);
    }
  }
}
