import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Dish} from '../../types/menu';
import {useOrder} from '../../hooks/features/use-order';
import {DishCard} from './index';

jest.mock('../../hooks/features/use-order');
const mockUseOrder = useOrder as jest.MockedFunction<typeof useOrder>;

describe('test currency helper functions', () => {
  it('image click callback been called as expected', async () => {
    const testCallback = jest.fn();
    mockUseOrder.mockReturnValue([5, testCallback]);
    render(<DishCard {...({} as Dish)} type="starters" />);
    await userEvent.click(screen.getByText('+'));
    await userEvent.click(screen.getByText('-'));
    expect(testCallback).toBeCalledTimes(2);
  });
});
