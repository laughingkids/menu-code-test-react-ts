import * as React from 'react';
import {useOrder} from '../../hooks/features/use-order';
import {Dish, DishType} from '../../types/menu';
import {OrderOperations} from '../../types/order';
import {OrderOperatorWrapper, OrderButton} from './styled';

type OrderOperatorProps = {
  dish: Dish;
  type: DishType;
  amount: number;
  onOperatorClick: (operation: OrderOperations) => void;
};

const OrderOperator: React.FC<OrderOperatorProps> = ({
  dish,
  type,
  amount,
  onOperatorClick,
}: OrderOperatorProps) => {
  return (
    <OrderOperatorWrapper>
      <OrderButton type="button" onClick={() => onOperatorClick('add')}>
        +
      </OrderButton>
      <p>{amount}</p>
      <OrderButton type="button" onClick={() => onOperatorClick('remove')}>
        -
      </OrderButton>
    </OrderOperatorWrapper>
  );
};

export default OrderOperator;
