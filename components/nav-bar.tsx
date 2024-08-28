'use client';

// 중복해서 사용할 수 없어서 별칭(alias)을 줌
// import { HomeIcon } from '@heroicons/react/24/outline';
import {
  FireIcon as SolidFireIcon,
  MagnifyingGlassCircleIcon as SolidMagnifyingGlassCircleIcon,
  UserIcon as SolidUserIcon,
} from '@heroicons/react/24/solid';
import {
  FireIcon as OutlineFireIcon,
  MagnifyingGlassCircleIcon as OutlineMagnifyingGlassCircleIcon,
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
          <SolidFireIcon className="w-7 h-7" />
        ) : (
          <OutlineFireIcon className="w-7 h-7" />
        )}
        <span>tweets</span>
      </Link>
      <Link href="/search" className="flex flex-col items-center gap-px">
        {pathname === '/search' ? (
          <SolidMagnifyingGlassCircleIcon className="w-7 h-7" />
        ) : (
          <OutlineMagnifyingGlassCircleIcon className="w-7 h-7" />
        )}
        <span>search</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center gap-px">
        {pathname === '/profile' ? (
          <SolidUserIcon className="w-7 h-7" />
        ) : (
          <OutlineUserIcon className="w-7 h-7" />
        )}
        <span>profile</span>
      </Link>
    </div>
  );
}
