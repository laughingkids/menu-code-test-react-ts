import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Dish} from '../../types/menu';
import OrderOperator from './index';

describe('test currency helper functions', () => {
  it('operator callback been called as expected', async () => {
    const testCallback = jest.fn();
    render(
      <OrderOperator
        dish={{} as Dish}
        type="starters"
        amount={5}
        onOperatorClick={testCallback}
      />
    );
    await userEvent.click(screen.getByText('+'));
    await userEvent.click(screen.getByText('-'));
    expect(testCallback).toBeCalledTimes(2);
  });
  it('operator callback been called as expected', async () => {
    const testCallback = jest.fn();
    render(
      <OrderOperator
        dish={{} as Dish}
        type="starters"
        amount={5}
        onOperatorClick={testCallback}
      />
    );
    expect(screen.getByText('5')).not.toBeNull();
  });
});
