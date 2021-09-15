import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Modal from './app/components/Modal/Modal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Modal />
      </header>
    </div>
  );
}

export default App;
