'use client';
import Link from 'next/link';
import { Button } from '@/src/design-system/buttons';
import { usePathname } from 'next/navigation';
import Navbar from '@/src/app/design-system/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="p-6">{children}</div>
    </div>
  );
}
