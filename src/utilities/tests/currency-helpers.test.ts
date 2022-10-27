import {currencyConverter} from '../currency-helpers';

describe('test currency helper functions', () => {
  it('currencyConverter', () => {
    expect(currencyConverter(-1)).toBe('');
    expect(currencyConverter(1)).toBe('$1.00');
    expect(currencyConverter(1.25)).toBe('$1.25');
    expect(currencyConverter(1205)).toBe('$1,205.00');
    expect(currencyConverter(120500)).toBe('$120,500.00');
  });
});
