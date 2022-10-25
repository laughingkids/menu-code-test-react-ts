type Dish = {
  id: number;
  name: string;
  price: number;
};

type Menu = {
  starters: Dish[];
  mains: Dish[];
  desserts: Dish[];
};

export type {Dish, Menu};
