import * as React from 'react';
import {Dish, DishType} from '../../types/menu';
import {DishCard} from '../dish-card';
import {MenuListWrapper} from './styled';

type MenuListProps = {
  dishes: Dish[];
  type: DishType;
};

const MenuList: React.FC<MenuListProps> = ({dishes, type}: MenuListProps) => {
  return (
    <>
      <h2>{type}</h2>
      <MenuListWrapper>
        {dishes?.map(dish => (
          <DishCard {...dish} type={type} />
        ))}
      </MenuListWrapper>
    </>
  );
};

export default MenuList;
