import {addDish, removeDish, setOrderMessage} from '../store/order/slice';
import {Dish, DishType} from '../types/menu';
import {OrderItem, OrderAlert, OrderOperations} from '../types/order';
import {useAppDispatch, useAppSelector} from './use-redux';

const getTotalCourse = (orderItems: OrderItem[]): number => {
  return orderItems.reduce((sum, item) => sum + item.amount, 0);
};
const getMainCourses = (orderItems: OrderItem[]): number => {
  return orderItems
    .filter(item => item.dishType === 'mains')
    .reduce((sum, item) => sum + item.amount, 0);
};
const MIN_COURSE_PER_PERSON = 2;
function orderValidator(
  dish: Dish,
  operation: OrderOperations,
  orderItems: OrderItem[],
  people: number
) {
  let alert: OrderAlert = {
    canOrder: true,
    type: 'info',
  };
  const ordered = orderItems.find(item => item.id === dish.id);
  const isAddingNewDish = operation === 'add';
  if (ordered) {
    // Rule 2: Each diner cannot have more than one of the same course.
    if (ordered.amount === people && isAddingNewDish) {
      alert = {
        canOrder: false,
        type: 'error',
        message: `No more ${dish.name} for ${people} people`,
      };
    }
    // Rule 3: There is only one piece of cheesecake left.
    if (dish.name.toLocaleLowerCase() === 'cheesecake' && isAddingNewDish) {
      alert = {
        canOrder: false,
        type: 'error',
        message: 'Only 1 cheesecake left',
      };
    }
  }
  // Rule 4: Pierre the snobby waiter will not let you have prawn cocktail and salmon fillet in the same meal.
  if (
    ((dish.id === 4 && orderItems.some(item => item.id === 7)) ||
      (dish.id === 7 && orderItems.some(item => item.id === 4))) &&
    isAddingNewDish
  ) {
    alert = {
      canOrder: false,
      type: 'error',
      message: 'Either prawn cocktail or salmon fillet',
    };
  }
  const minCourseAmount = MIN_COURSE_PER_PERSON * people;
  if (getTotalCourse(orderItems) < minCourseAmount) {
    return {
      ...alert,
      message: `At least order ${minCourseAmount} courses for ${people} people`,
    };
  }
  if (getMainCourses(orderItems) < people) {
    return {
      ...alert,
      message: `At least order ${people} main courses for ${people} people`,
    };
  }
  return alert;
}

type DishOperationHandler = (dish: Dish, type: DishType) => void;

export function useOrder(dish: Dish, dishType: DishType) {
  const dispatch = useAppDispatch();
  const {people, orderItems} = useAppSelector(state => state.order);
  const dishInOrder = orderItems.find(item => item.id === dish.id);
  const amount = dishInOrder?.amount || 0;
  const addDishHandler: DishOperationHandler = (dish, dishType) =>
    dispatch(addDish({dish, dishType}));
  const removeDishHandler: DishOperationHandler = (dish, dishType) =>
    dispatch(removeDish({dish, dishType}));
  const onAmountChange = (operation: OrderOperations) => {
    const orderMsg = orderValidator(dish, operation, orderItems, people);
    dispatch(setOrderMessage({orderMsg}));
    if (!orderMsg.canOrder) {
      return;
    }
    if (operation === 'add') {
      addDishHandler(dish, dishType);
    }
    if (operation === 'remove') {
      removeDishHandler(dish, dishType);
    }
  };
  return [amount, onAmountChange] as const;
}
