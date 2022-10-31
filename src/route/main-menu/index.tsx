import React from 'react';
import MenuList from '../../components/menu-list';
import {StyledContainer} from '../../styles/common';
import {Menu} from '../../types/menu';

type MainMenuProps = {
  menu: Menu;
};
function MainMenu({menu}: MainMenuProps) {
  const {starters, mains, desserts} = menu;
  return (
    <StyledContainer className="MainMenu">
      <MenuList type={'starters'} dishes={starters} />
      <MenuList key={'mains'} type={'mains'} dishes={mains} />
      <MenuList key={'desserts'} type={'desserts'} dishes={desserts} />
    </StyledContainer>
  );
}

export default MainMenu;
