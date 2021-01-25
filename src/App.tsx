import React from 'react';
import './App.css';
import Routes from './RoutesConfig'
import { Provider } from 'react-redux'
import { store,  } from './Store';


function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
