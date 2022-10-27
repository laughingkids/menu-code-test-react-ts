import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {useOrder} from '../../hooks/use-order';
import {OrderMessage} from '../../types/order';
import OrderOperator from './index';

jest.mock('../../hooks/use-order');
const mockUseOrder = useOrder as jest.MockedFunction<typeof useOrder>;

describe('test currency helper functions', () => {
  it('operator callback been called as expected', async () => {
    const testCallback = jest.fn();
    mockUseOrder.mockReturnValue([5, testCallback, {} as OrderMessage]);
    render(<OrderOperator dishId={1} type="starters" />);
    await userEvent.click(screen.getByText('+'));
    await userEvent.click(screen.getByText('-'));
    expect(testCallback).toBeCalledTimes(2);
  });
  it('operator callback been called as expected', async () => {
    const testCallback = jest.fn();
    mockUseOrder.mockReturnValue([5, testCallback, {} as OrderMessage]);
    render(<OrderOperator dishId={1} type="starters" />);
    expect(screen.getByText('5')).not.toBeNull();
  });
});
