import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Sidebar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
