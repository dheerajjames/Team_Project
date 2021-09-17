import React from 'react';
import './App.css';

// import Modal from './components/Modal/Modal';
// import Card from './components/Card/Card';

import CodeSnippet from './components/Code/Code';
import { ComponentColumn } from './components/ComponentsColumn/ComponentsColumn';
import Input from './components/Input/Input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="playground">
          <ComponentColumn />
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
