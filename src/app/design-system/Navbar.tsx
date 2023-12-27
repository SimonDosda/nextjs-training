'use client';

import Link from 'next/link';
import { Button } from '@/src/design-system/buttons';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pages = ['colors', 'buttons', 'tags'];
  const pathname = usePathname();
  return (
    <nav className="flex gap-2  p-2">
      {pages.map((page) => (
        <Link key={page} href={`/design-system/${page}`}>
          <Button color={pathname.endsWith(page) ? 'primary' : 'neutral'}>
            {page}
          </Button>
        </Link>
      ))}
    </nav>
  );
}
