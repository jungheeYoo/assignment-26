'use client';

// 중복해서 사용할 수 없어서 별칭(alias)을 줌
// import { HomeIcon } from '@heroicons/react/24/outline';
import {
  HomeIcon as SolidHomeIcon,
  NewspaperIcon as SolidNewspaperIcon,
  ChatBubbleOvalLeftEllipsisIcon as SolidChatIcon,
  VideoCameraIcon as SolidVideoCameraIcon,
  UserIcon as SolidUserIcon,
} from '@heroicons/react/24/solid';
import {
  HomeIcon as OutlineHomeIcon,
  NewspaperIcon as OutlineNewspaperIcon,
  ChatBubbleOvalLeftEllipsisIcon as OutlineChatIcon,
  VideoCameraIcon as OutlineVideoCameraIcon,
  UserIcon as OutlineUserIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 w-full mx-auto max-w-screen-sm grid grid-cols-3 px-5 py-3 *:text-white bg-neutral-800 ">
      <Link href="/tweets" className="flex flex-col items-center gap-px">
        {pathname === '/tweets' ? (
          <SolidHomeIcon className="w-7 h-7" />
        ) : (
          <OutlineHomeIcon className="w-7 h-7" />
        )}
        <span>tweets</span>
      </Link>
      <Link href="/search" className="flex flex-col items-center gap-px">
        {pathname === '/search' ? (
          <SolidNewspaperIcon className="w-7 h-7" />
        ) : (
          <OutlineNewspaperIcon className="w-7 h-7" />
        )}
        <span>search</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center gap-px">
        {pathname === '/profile' ? (
          <SolidChatIcon className="w-7 h-7" />
        ) : (
          <OutlineChatIcon className="w-7 h-7" />
        )}
        <span>profile</span>
      </Link>
    </div>
  );
}
