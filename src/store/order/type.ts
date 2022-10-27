import {Dish, DishType} from '../../types/menu';
import {OrderItem, OrderAlert} from '../../types/order';

export type OrderState = {
  people: number;
  orderItems: OrderItem[];
  totalBill: number;
  message: OrderAlert;
};

export type DishActionPayload = {dish: Dish; dishType: DishType};
export type SetPeopleActionPayload = {people: number};
export type SetOrderMessageActionPayload = {orderMsg: OrderAlert};
