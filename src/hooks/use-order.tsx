import {useEffect, useState} from 'react';
import {DishType} from '../types/menu';
import {OrderMessage, OrderOperations} from '../types/order';

function orderValidator(
  dishId: number,
  operation: OrderOperations
): OrderMessage {
  return {
    canOrder: true,
  };
}

export function useOrder(dishId: number, type: DishType) {
  // replace this with redux state updates
  const [amount, setAmount] = useState(0);
  const [message, setOrderMessage] = useState({} as OrderMessage);
  // TODO: remove the useEffect below, testing purpose only
  useEffect(() => {
    if (amount) {
      console.log(dishId, type, amount);
    }
  }, [amount]);
  const onAmountChange = (operation: OrderOperations) => {
    const {canOrder, message} = orderValidator(dishId, operation);
    if (!canOrder) {
      setOrderMessage({canOrder, message});
    }
    if (operation === 'add') {
      setAmount(amount + 1);
    }
    if (operation === 'remove' && amount > 0) {
      setAmount(amount - 1);
    }
  };
  return [amount, onAmountChange, message] as const;
}
