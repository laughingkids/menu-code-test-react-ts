import * as React from 'react';
import {Dish, DishType} from '../../types/menu';
import {currencyConverter} from '../../utilities/currency-helpers';
import OrderOperator from '../order-operator';
import {DishCardWrapper, DishCardImg, DishLabel} from './styled';

type DishCardProps = {
  type: DishType;
  onAmountChange?: () => void;
  amount?: number;
} & Dish;

export const DishCard: React.FC<DishCardProps> = ({
  id,
  name,
  price,
  type,
}: DishCardProps) => {
  return (
    <DishCardWrapper key={`${name}-${id}`}>
      <DishCardImg>
        <DishLabel>{name}</DishLabel>
        <DishLabel>Price: {currencyConverter(price)}</DishLabel>
      </DishCardImg>
      <OrderOperator dishId={id} type={type} />
    </DishCardWrapper>
  );
};
