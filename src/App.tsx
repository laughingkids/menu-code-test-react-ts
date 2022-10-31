import React from 'react';
import './App.css';
import {MENU_ENDPOINT} from './config/constants';
import {useFetch} from './hooks/common/use-fetch';
import {Menu} from './types/menu';
import {Provider} from 'react-redux';
import {store} from './store';
import {Layout} from './components/common/layout';
import MainMenu from './route/main-menu';

function App() {
  const [data, loading, error] = useFetch<Menu>(MENU_ENDPOINT);
  if (error || loading) {
    return <></>;
  }
  return (
    <Provider store={store}>
      <Layout>
        <MainMenu menu={data as Menu} />
      </Layout>
    </Provider>
  );
}

export default App;
