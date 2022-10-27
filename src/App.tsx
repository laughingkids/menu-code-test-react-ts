import React from 'react';
import './App.css';
import MenuList from './components/menu-list';
import {MENU_ENDPOINT} from './config/constants';
import {useFetch} from './hooks/use-fetch';
import {StyledContainer} from './styles/common';
import {Menu} from './types/menu';

function App() {
  const [data, loading, error] = useFetch<Menu>(MENU_ENDPOINT);
  if (error || loading) {
    return <></>;
  }
  const {starters, mains, desserts} = data as Menu;
  return (
    <StyledContainer className="App">
      <MenuList type={'starters'} dishes={starters} />
      <MenuList type={'mains'} dishes={mains} />
      <MenuList type={'desserts'} dishes={desserts} />
    </StyledContainer>
  );
}

export default App;
