import {useAppSelector} from '../../hooks/use-redux';
import {DishType} from '../../types/menu';
import {OrderItem} from '../../types/order';
import {currencyConverter} from '../../utilities/currency-helpers';

const ReceiptItemList = ({
  type,
  orderedItems,
}: {
  type: DishType;
  orderedItems: OrderItem[];
}): JSX.Element => {
  if (!orderedItems.length) {
    return <></>;
  }
  return (
    <div>
      {type}
      <ul>
        {orderedItems.map(({name, amount, price}) => (
          <li>
            {name} - {amount} - {currencyConverter(price)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export function Receipt(): JSX.Element {
  const {totalBill, orderItems} = useAppSelector(state => state.order);
  const types: DishType[] = ['starters', 'mains', 'desserts'];
  return (
    <div>
      <p>Receipt</p>
      {types.map(type => {
        const itemsUnderType = orderItems.filter(
          item => item.dishType === type
        );
        return <ReceiptItemList type={type} orderedItems={itemsUnderType} />;
      })}
      <p>Total {totalBill}</p>
    </div>
  );
}
