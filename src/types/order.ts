import {Alert} from './alert';
import {Dish, DishType} from './menu';

export type OrderItem = {
  amount: number;
  dishType: DishType;
} & Dish;

export type OrderValidator = (dish: OrderItem, visitor: number) => OrderAlert;

export type OrderAlert = {
  canOrder: boolean;
} & Alert;

export type OrderOperations = 'add' | 'remove';
