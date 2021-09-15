import React from 'react';
import './App.css';
import Modal from './app/components/Modal/Modal';
import Card from './components/Card/Card';
import CodeSnippet from './components/Code/Code';
import Input from './components/Input/Input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Modal />
        <div className="playground">
          <Card />
          <Input />
        </div>
        <div>
          <CodeSnippet />
        </div>
      </header>
    </div>
  );
}

export default App;
