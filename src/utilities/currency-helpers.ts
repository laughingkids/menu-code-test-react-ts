export const currencyConverter = (value: number) => {
  if (value < 0) {
    return '';
  }
  const dollarUSLocale = Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  });
  return dollarUSLocale.format(value);
};
