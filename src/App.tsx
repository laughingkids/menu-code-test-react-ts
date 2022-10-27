import React from 'react';
import './App.css';
import MenuList from './components/menu-list';
import {MENU_ENDPOINT} from './config/constants';
import {useFetch} from './hooks/use-fetch';
import {StyledContainer} from './styles/common';
import {Menu} from './types/menu';
import {Provider} from 'react-redux';
import {store} from './store';
import {Receipt} from './components/receipt';

function App() {
  const [data, loading, error] = useFetch<Menu>(MENU_ENDPOINT);
  if (error || loading) {
    return <></>;
  }
  const {starters, mains, desserts} = data as Menu;
  return (
    <Provider store={store}>
      <StyledContainer className="App">
        <Receipt />
        <MenuList type={'starters'} dishes={starters} />
        <MenuList type={'mains'} dishes={mains} />
        <MenuList type={'desserts'} dishes={desserts} />
      </StyledContainer>
    </Provider>
  );
}

export default App;
