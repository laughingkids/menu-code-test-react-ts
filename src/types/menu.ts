type Dish = {
  id: number;
  name: string;
  price: number;
};

type Menu = {
  [key in DishType]: Dish[];
};

type DishType = 'starters' | 'mains' | 'desserts';

export type {Dish, Menu, DishType};
