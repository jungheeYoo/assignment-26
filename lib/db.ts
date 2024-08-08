import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

async function test() {
  const tweet = await db.tweet.create({
    data: {
      tweet: 'test',
      user: {
        connect: {
          id: 2,
        },
      },
    },
  });
  console.log(tweet);
}

async function like() {
  const like = await db.like.create({
    data: {
      user: {
        connect: {
          id: 2,
        },
      },
      tweet: {
        connect: {
          id: 3,
        },
      },
    },
  });
  console.log(like);
}

async function main() {
  await test();
  await like();
}

main();

export default db;
