import * as React from 'react';
import {useOrder} from '../../hooks/use-order';
import {DishType} from '../../types/menu';
import {OrderOperatorWrapper, OrderButton} from './styled';

type OrderOperator = {
  dishId: number;
  type: DishType;
};

const OrderOperator: React.FC<OrderOperator> = ({
  dishId,
  type,
}: OrderOperator) => {
  const [amount, onAmountChange, message] = useOrder(dishId, type);
  return (
    <>
      <OrderOperatorWrapper>
        <OrderButton type="button" onClick={() => onAmountChange('add')}>
          +
        </OrderButton>
        <p>{amount}</p>
        <OrderButton type="button" onClick={() => onAmountChange('remove')}>
          -
        </OrderButton>
      </OrderOperatorWrapper>
      {message && <p>{message.message}</p>}
    </>
  );
};

export default OrderOperator;
