import {Dish, DishType} from './menu';

export type OrderItem = {
  amount: number;
} & Dish;

export type OrderValidator = (dish: OrderItem, visitor: number) => OrderMessage;

export type Order = {
  [key in DishType]: OrderItem[];
};

export type OrderMessage = {
  canOrder: boolean;
  message?: string;
};

export type OrderOperations = 'add' | 'remove';
