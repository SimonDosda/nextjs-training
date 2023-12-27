import { Currency } from '@/src/models/realt';

export const parseCurrency = (value: number, currency: Currency) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(value);
};

export const parsePercentage = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export const parseDate = (value: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(value);
};

export const parseAddress = (value: string) => {
  console.log(value);
  let [address, city, state, postCode] = value.split(', ');
  let country = 'United States';
  if (postCode === 'Panama') {
    country = 'Panama';
    address += city;
    city = state;
    postCode = '';
    state = '';
    return { address, city, state, postCode, country };
  }
  if (state && !postCode) {
    [state, postCode] = state.split(' ');
  } else if (!state) {
    [city, state, postCode] = city.split(' ');
  }
  return { address, city, state, postCode, country };
};
