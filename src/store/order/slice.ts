import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {OrderItem, OrderAlert} from '../../types/order';
import {
  DishActionPayload,
  OrderState,
  SetOrderMessageActionPayload,
  SetPeopleActionPayload,
} from './type';
import {reduxLogger} from '../../utilities/logger';

const initialState: OrderState = {
  people: 2,
  orderItems: [],
  totalBill: 0,
  message: {canOrder: true} as OrderAlert,
};

const getTotalBill = (orderItems: OrderItem[]): number => {
  return orderItems.reduce((sum, item) => sum + item.amount * item.price, 0);
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addDish: (state, {payload, type}: PayloadAction<DishActionPayload>) => {
      reduxLogger(payload, type);
      const {orderItems} = state;
      const orderedItems = [...orderItems];
      const {dish, dishType} = payload;
      if (orderedItems.some(item => item.id === dish.id)) {
        const itemAt = orderedItems.findIndex(item => item.id === dish.id);
        const {amount} = orderedItems[itemAt];
        orderedItems[itemAt] = {...orderedItems[itemAt], amount: amount + 1};
      } else {
        orderedItems.push({...dish, dishType, amount: 1});
      }
      orderedItems.sort((a, b) => a.id - b.id);
      return {
        ...state,
        orderItems: orderedItems,
        totalBill: getTotalBill(orderedItems),
      };
    },
    removeDish: (state, {payload, type}: PayloadAction<DishActionPayload>) => {
      reduxLogger(payload, type);
      const {orderItems} = state;
      const orderedItems = [...orderItems];
      const {dish} = payload;
      if (orderedItems.some(item => item.id === dish.id)) {
        const itemAt = orderedItems.findIndex(item => item.id === dish.id);
        const {amount} = orderedItems[itemAt];
        orderedItems[itemAt] = {
          ...orderedItems[itemAt],
          amount: amount > 0 ? amount - 1 : 0,
        };
        if (amount - 1 === 0) {
          orderedItems.splice(itemAt, 1);
        }
      }
      orderedItems.sort((a, b) => a.id - b.id);
      return {
        ...state,
        orderItems: orderedItems,
        totalBill: getTotalBill(orderedItems),
      };
    },
    setPeople: (
      state,
      {payload, type}: PayloadAction<SetPeopleActionPayload>
    ) => {
      reduxLogger(payload, type);
      const {people} = payload;
      return {...state, people};
    },
    setOrderMessage: (
      state,
      {payload, type}: PayloadAction<SetOrderMessageActionPayload>
    ) => {
      reduxLogger(payload, type);
      const {orderMsg} = payload;
      return {...state, orderMsg};
    },
  },
});

export const {addDish, removeDish, setPeople, setOrderMessage} =
  orderSlice.actions;

export default orderSlice.reducer;
