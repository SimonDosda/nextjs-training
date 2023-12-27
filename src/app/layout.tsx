import '@/src/design-system/global.css';
import { Button } from '@/src/design-system/buttons';
import Link from 'next/link';
import { montserrat } from '@/src/design-system/fonts';
import { usePathname } from 'next/navigation';
import Navbar from '@/src/components/Navbar';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} flex min-h-screen flex-col antialiased`}
      >
        <header className="bg-neutral-100 p-2">
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
