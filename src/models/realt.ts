const CANALS = [
  'tokens_migrated',
  'release',
  'exit_complete',
  'offering_closed',
] as const;
const CURRENCIES = ['USD'];
const PRODUCT_TYPES = ['real_estate_rental'];
const PROPERTY_TYPES = ['1', '2', '3', '4', '8', '9', '10', '11'];
const SELL_PROPERTY_TO = ['intl_investor_only', 'us_investor_only'];
const RENT_CALCULATION_TYPE = ['constant', 'average'];
const RENTAL_TYPE = ['long_term', 'short_term'];

export type Canal = (typeof CANALS)[number];
export type Currency = (typeof CURRENCIES)[number];
export type ProductType = (typeof PRODUCT_TYPES)[number];
export type PropertyType = (typeof PROPERTY_TYPES)[number];
export type SellPropertyTo = (typeof SELL_PROPERTY_TO)[number];
export type RentCalculationType = (typeof RENT_CALCULATION_TYPE)[number];
export type RentalType = (typeof RENTAL_TYPE)[number];

export interface RealtToken {
  // Token
  uuid: string;
  symbol: string;
  shortName: string;
  fullName: string;
  productType: ProductType;
  canal: Canal;
  currency: Currency;
  sellPropertyTo: SellPropertyTo;
  initialLaunchDate: InitialLaunchDate;
  lastUpdate: LastUpdate;

  marketplaceLink: string;
  imageLink: string[];

  // Price
  tokenPrice: number;
  totalTokens: number;
  totalTokensRegSummed: number;
  totalInvestment: number;
  underlyingAssetPrice: number;

  // Rent
  grossRentYear: number;
  grossRentMonth: number;
  netRentDay: number;
  netRentMonth: number;
  netRentYear: number;
  netRentDayPerToken: number;
  netRentMonthPerToken: number;
  netRentYearPerToken: number;
  rentalType: RentalType;
  rentCalculationType: RentCalculationType;
  rentStartDate: RentStartDate;

  // Expenses
  propertyMaintenanceMonthly: number;
  propertyManagement: number;
  propertyManagementPercent: number;
  insurance: number;
  propertyTaxes: number;
  realtPlatform: number;
  realtPlatformPercent: number;
  utilities: number;
  initialMaintenanceReserve?: number;
  renovationReserve?: number;
  realtListingFeePercent?: number;
  realtListingFee?: number;
  miscellaneousCosts?: number;

  annualPercentageYield: number;

  // Contracts
  blockchainAddresses: BlockchainAddresses;
  ethereumContract?: string;
  xDaiContract?: string;
  gnosisContract?: string;
  goerliContract?: string;

  // Property
  coordinate: Coordinate;
  propertyType: PropertyType;
  squareFeet?: number;
  lotSize?: number;
  bedroomBath?: string;
  hasTenants: boolean;
  rentedUnits: number;
  totalUnits: number;
  termOfLease: null;
  renewalDate: null;
  section8paid: number;
  subsidyStatus: string;
  subsidyStatusValue?: number;
  subsidyBy?: string;
  seriesNumber: number;
  constructionYear: number;
  constructionType?: string;
  roofType?: string;
  assetParking?: string;
  foundation?: string;
  heating?: string;
  cooling?: string;
  propertyStories?: number; // number of floors

  // Secondary Market
  secondaryMarketplace: SecondaryMarketplace;
  secondaryMarketplaces: SecondaryMarketplace2[];
  originSecondaryMarketplaces: OriginSecondaryMarketplace[];
}

export interface Coordinate {
  lat: string;
  lng: string;
}

export interface SecondaryMarketplace {
  UniswapV1: any;
  UniswapV2: any;
}

export interface SecondaryMarketplace2 {
  chainId: number;
  chainName: string;
  dexName: string;
  contractPool: string;
  pair?: Pair;
}

export interface Pair {
  contract: string;
  symbol: string;
  name: string;
}

export interface BlockchainAddresses {
  ethereum: Ethereum;
  xDai: XDai;
  goerli: Goerli;
}

export interface Ethereum {
  chainName: string;
  chainId: number;
  contract: any;
  distributor: any;
  maintenance: any;
}

export interface XDai {
  chainName: string;
  chainId: number;
  contract: any;
  distributor: any;
  rmmPoolAddress: any;
  chainlinkPriceContract: any;
}

export interface Goerli {
  chainName: string;
  chainId: number;
  contract: any;
  distributor: any;
  rmmPoolAddress: number;
  chainlinkPriceContract: number;
}

export interface RentStartDate {
  date: string;
  timezone_type: number;
  timezone: string;
}

export interface LastUpdate {
  date: string;
  timezone_type: number;
  timezone: string;
}

export interface OriginSecondaryMarketplace {
  chainId: number;
  chainName: string;
  dexName: string;
  contractPool: string;
}

export interface InitialLaunchDate {
  date: string;
  timezone_type: number;
  timezone: string;
}
