import db from '@/lib/db';
import getSession from '@/lib/session';
import { notFound, redirect } from 'next/navigation';

async function getUser() {
  const session = await getSession();
  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
    });
    if (user) {
      return user;
    }
  }
  notFound();
}

export default async function Profile() {
  const user = await getUser();
  const logOut = async () => {
    'use server';
    const session = await getSession();
    await session.destroy();
    redirect('/');
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="flex flex-col items-center gap-5 mt-10 py-8 px-6">
        <span className="text-green-600 text-3xl">Welcome😆</span>
        <span className="text-2xl">{user?.username}!</span>
      </h1>
      <form action={logOut}>
        <button className="w-full bg-gray-200 text-black font-medium rounded-full text-center h-12 hover:bg-gray-300 transition-colors hover:text-white mt-5 px-10">
          Log out
        </button>
      </form>
    </div>
  );
}
