import { getTokens } from '@/src/services/realt';
import { RealtToken } from '@/src/models/realt';
import Image from 'next/image';
import Link from 'next/link';
import { Tag } from '@/src/design-system/tags';
import {
  parseAddress,
  parseCurrency,
  parseDate,
  parsePercentage,
} from '@/src/utils/parsers';

export default async function Page() {
  const tokens = await getTokens();

  return (
    <div className="p-6">
      <div className="flex flex-col gap-2">
        {tokens
          .filter(
            (token) =>
              token.canal === 'release' &&
              token.sellPropertyTo === 'intl_investors_only',
          )
          .map((token) => (
            <div
              key={token.uuid}
              className="flex gap-4 overflow-hidden rounded-lg"
            >
              <Image
                src={token.imageLink[0]}
                alt={token.shortName}
                width={250}
                height={200}
              />
              <div className="max-w-lg flex-1">
                <div className="flex justify-between">
                  <Link href={token.marketplaceLink} className="link">
                    <h2 className="text-2xl">{token.shortName}</h2>
                  </Link>
                  <Tag
                    text={
                      parseInt(token.propertyType) > 1
                        ? 'Multi Family'
                        : 'Single Family'
                    }
                    color={
                      parseInt(token.propertyType) > 1 ? 'secondary' : 'primary'
                    }
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-l text-primary-400">
                    {parseAddress(token.fullName).city},{' '}
                    {parseAddress(token.fullName).state}{' '}
                    {parseAddress(token.fullName).postCode},{' '}
                    {parseAddress(token.fullName).country}
                  </p>
                  <div className="flex justify-between">
                    <div className="flex flex-col items-center">
                      <p>Token Price</p>
                      <p className="text-2xl text-primary-600">
                        {parseCurrency(token.tokenPrice, token.currency)}
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p>
                        Rent per Year{' '}
                        {token.rentCalculationType === 'average' && (
                          <span>(average)</span>
                        )}
                      </p>
                      <p className="text-2xl text-primary-600">
                        {parseCurrency(
                          token.netRentYearPerToken,
                          token.currency,
                        )}
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p>Expected Yield</p>
                      <p className="text-2xl text-primary-600">
                        {parsePercentage(token.annualPercentageYield / 100)}{' '}
                      </p>
                    </div>
                  </div>

                  <p>
                    Rent start: {parseDate(new Date(token.rentStartDate.date))}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
