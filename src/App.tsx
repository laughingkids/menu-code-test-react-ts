import React from 'react';
import './App.css';
import MenuList from './components/menu-list';
import {MENU_ENDPOINT} from './config/constants';
import {useFetch} from './hooks/use-fetch';
import {StyledContainer} from './styles/common';
import {Menu} from './types/menu';
import {Provider} from 'react-redux';
import {store} from './store';
import {Layout} from './components/layout';

function App() {
  const [data, loading, error] = useFetch<Menu>(MENU_ENDPOINT);
  if (error || loading) {
    return <></>;
  }
  const {starters, mains, desserts} = data as Menu;
  return (
    <Provider store={store}>
      <Layout>
        <StyledContainer className="App">
          <MenuList type={'starters'} dishes={starters} />
          <MenuList type={'mains'} dishes={mains} />
          <MenuList type={'desserts'} dishes={desserts} />
        </StyledContainer>
      </Layout>
    </Provider>
  );
}

export default App;
