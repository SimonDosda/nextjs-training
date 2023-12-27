import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/src/design-system/buttons';
import Image from 'next/image';
import { LinkIcon } from '@heroicons/react/20/solid';

export default function Page() {
  return (
    <div className="grow">
      <div className="flex flex-row">
        <div className="flex flex-1 flex-col justify-around gap-4 rounded-l-2xl bg-primary-100 p-4">
          <h2 className="text-2xl">Realt</h2>
          <p className="text-lg">
            Realt is a decentralized real estate tokenization platform.
          </p>
          <Link href={'/realt'}>
            <Button>
              Go to Dashboard
              <ArrowRightIcon className="ml-2 h-5" />
            </Button>
          </Link>
        </div>
        <div className="flex flex-1 overflow-hidden  rounded-r-2xl">
          <Image
            src="/real_token.jpeg"
            width="1000"
            height="1000"
            alt="real token"
          />
        </div>
      </div>
    </div>
  );
}
