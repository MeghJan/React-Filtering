import React from 'react';
import './App.css';
import { MainLayout } from './pages/MainLayout/MainLayout';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
       <MainLayout />
    </Provider>
   
  );
}

export default App;
