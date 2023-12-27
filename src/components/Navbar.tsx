'use client';

import Link from 'next/link';
import { Button } from '@/src/design-system/buttons';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/realt',
      label: 'Realt',
    },
    {
      href: '/design-system',
      label: 'Design system',
    },
  ];
  return (
    <nav className="flex gap-4">
      {links.map(({ href, label }) => (
        <Link key={href} href={href}>
          <Button
            color={
              (href === '/' ? pathname === '/' : pathname.startsWith(href))
                ? 'primary'
                : 'neutral'
            }
          >
            {label}
          </Button>
        </Link>
      ))}
    </nav>
  );
}
