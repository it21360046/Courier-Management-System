import './App.css';
import React from 'react';
import { BrowserRouter , Router , Routes , Route } from 'react-router-dom';
import HeaderComponent from './components/header-component/headerComponent'
import ComponentContainer from './components/content-component/content-container'

function App() {
  return (
    <React.Fragment>
      <HeaderComponent/>
      <ComponentContainer/>
    </React.Fragment>
  );
}

export default App;
