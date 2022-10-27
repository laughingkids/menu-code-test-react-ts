export const currencyConverter = (value: number) => {
  const dollarUSLocale = Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  });
  return dollarUSLocale.format(value);
};
