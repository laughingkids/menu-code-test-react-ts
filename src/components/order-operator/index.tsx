import * as React from 'react';
import {useOrder} from '../../hooks/use-order';
import {Dish, DishType} from '../../types/menu';
import {OrderOperatorWrapper, OrderButton} from './styled';

type OrderOperatorProps = {
  dish: Dish;
  type: DishType;
};

const OrderOperator: React.FC<OrderOperatorProps> = ({
  dish,
  type,
}: OrderOperatorProps) => {
  const [amount, onAmountChange] = useOrder(dish, type);
  return (
    <OrderOperatorWrapper>
      <OrderButton type="button" onClick={() => onAmountChange('add')}>
        +
      </OrderButton>
      <p>{amount}</p>
      <OrderButton type="button" onClick={() => onAmountChange('remove')}>
        -
      </OrderButton>
    </OrderOperatorWrapper>
  );
};

export default OrderOperator;
