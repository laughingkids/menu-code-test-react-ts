import * as React from 'react';
import {useOrder} from '../../hooks/use-order';
import {Dish, DishType} from '../../types/menu';
import {currencyConverter} from '../../utilities/currency-helpers';
import OrderOperator from '../order-operator';
import {DishCardWrapper, DishCardImg, DishLabel} from './styled';

type DishCardProps = {
  type: DishType;
} & Dish;

export const DishCard: React.FC<DishCardProps> = ({
  type,
  ...dish
}: DishCardProps) => {
  const {id, name, price} = dish;
  const [amount, onAmountChange] = useOrder(dish, type);
  return (
    <DishCardWrapper key={`${name}-${id}`}>
      <DishCardImg role="button" onClick={() => onAmountChange('add')}>
        <DishLabel>{name}</DishLabel>
        <DishLabel>Price: {currencyConverter(price)}</DishLabel>
      </DishCardImg>
      <OrderOperator dish={dish} type={type} />
    </DishCardWrapper>
  );
};
